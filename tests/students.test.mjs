import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { createRequire } from "node:module";
import { test } from "node:test";
import { runInNewContext } from "node:vm";
import ts from "typescript";
import React from "react";
import { renderToStaticMarkup } from "react-dom/server";

const require = createRequire(import.meta.url);
const root = new URL("../", import.meta.url);
const student = {
  id: "student-1",
  first_name: "Ana",
  last_name: "Pérez",
  phone: null,
  is_active: true,
};

// Ejecuta los módulos reales con dependencias simuladas, sin red ni credenciales.
function loadModule(path, dependencies) {
  const source = readFileSync(new URL(path, root), "utf8");
  const { outputText } = ts.transpileModule(source, {
    compilerOptions: {
      module: ts.ModuleKind.CommonJS,
      jsx: ts.JsxEmit.ReactJSX,
      target: ts.ScriptTarget.ES2020,
      esModuleInterop: true,
    },
  });
  const compiledModule = { exports: {} };
  runInNewContext(outputText, {
    module: compiledModule,
    exports: compiledModule.exports,
    require(name) {
      if (name === "server-only") return {};
      if (name === "react/jsx-runtime") return require(name);
      if (name in dependencies) return dependencies[name];
      throw new Error(`Dependencia no simulada: ${name}`);
    },
    process: { env: {
      NEXT_PUBLIC_SUPABASE_URL: "https://example.invalid",
      SUPABASE_SERVICE_ROLE_KEY: "test-server-secret",
    } },
  }, { filename: path });
  return compiledModule.exports;
}

function setup(options = {}) {
  const calls = { profiles: 0, admin: 0, emails: [], filters: [], orders: [] };
  const query = {
    select(fields) { calls.fields = fields; return this; },
    eq(field, value) { calls.filters.push([field, value]); return this; },
    order(field) { calls.orders.push(field); return this; },
    async range(from, to) {
      calls.profiles++;
      calls.range = [from, to];
      if (options.profileThrows) throw new Error("sensitive database details");
      return { data: options.students ?? [], error: options.profileError ?? null };
    },
    async single() {
      return {
        data: options.profile ?? { role: "PROFESORA", is_active: true },
        error: options.authProfileError ?? null,
      };
    },
  };
  const server = {
    createClient: async () => ({
      auth: { getUser: async () => ({
        data: { user: options.anonymous ? null : { id: "teacher" } },
        error: null,
      }) },
      from(table) { assert.equal(table, "profiles"); return query; },
    }),
  };
  const auth = loadModule("src/lib/auth.ts", {
    "@/lib/supabase/server": server,
    "next/navigation": { redirect(path) { throw new Error(`redirect:${path}`); } },
  });
  const data = loadModule("src/features/students/data/get-students.ts", {
    "@/lib/auth": auth,
    "@/lib/supabase/server": server,
    "@/lib/supabase/admin": {
      createAdminClient() {
        calls.admin++;
        if (options.noAdmin) return null;
        return { auth: { admin: { async getUserById(id) {
          calls.emails.push(id);
          if (options.emailThrows) throw new Error("sensitive Auth details");
          return {
            data: { user: { email: `${id}@example.com`, app_metadata: { secret: "hidden" } } },
            error: options.emailError ?? null,
          };
        } } } };
      },
    },
  });
  const page = loadModule("src/app/profesora/alumnos/page.tsx", {
    "@/features/students/data/get-students": data,
    "next/link": { default: ({ children, ...props }) => React.createElement("a", props, children), __esModule: true },
  });
  return { calls, getStudents: data.getStudents, async render(pagina) {
    return renderToStaticMarkup(await page.default({ searchParams: Promise.resolve({ pagina }) }));
  } };
}

for (const [label, options, destination] of [
  ["sin sesión", { anonymous: true }, "/login"],
  ["alumno activo", { profile: { role: "ALUMNO", is_active: true } }, "/acceso-denegado"],
  ["profesora inactiva", { profile: { role: "PROFESORA", is_active: false } }, "/acceso-denegado"],
  ["perfil inaccesible", { authProfileError: { message: "private" } }, "/acceso-denegado"],
]) {
  test(`rechaza ${label} antes de consultar alumnos o Auth administrativo`, async () => {
    const { render, calls } = setup(options);
    await assert.rejects(render(), { message: `redirect:${destination}` });
    assert.equal(calls.profiles, 0);
    assert.equal(calls.admin, 0);
  });
}

test("la profesora ve el estado vacío sin consultar Auth administrativo", async () => {
  const { render, calls } = setup();
  assert.match(await render(), /Todavía no hay alumnos registrados/);
  assert.equal(calls.admin, 0);
  assert.ok(calls.filters.some(([field, value]) => field === "role" && value === "ALUMNO"));
});

test("muestra datos, teléfono opcional y ambos estados; descarta metadatos de Auth", async () => {
  const { render, calls } = setup({ students: [student, {
    ...student, id: "student-2", first_name: "Luis", is_active: false, phone: "+54 1112345678",
  }] });
  const html = await render();
  for (const text of ["Ana Pérez", "student-1@example.com", "Sin teléfono registrado", "+54 1112345678", "Activo", "Inactivo"]) {
    assert.ok(html.includes(text), text);
  }
  assert.ok(!html.includes("hidden"));
  assert.deepEqual(calls.emails, ["student-1", "student-2"]);
  assert.ok(!calls.filters.some(([field]) => field === "is_active"));
});

for (const options of [{ noAdmin: true }, { emailThrows: true }, { emailError: { message: "private" } }]) {
  test(`conserva perfiles y avisa cuando el correo no está disponible: ${JSON.stringify(options)}`, async () => {
    const { render } = setup({ ...options, students: [student] });
    const html = await render();
    assert.match(html, /Ana Pérez/);
    assert.match(html, /No pudimos cargar algunos correos/);
    assert.match(html, /No disponible/);
    assert.doesNotMatch(html, /sensitive|private|test-server-secret/);
  });
}

for (const options of [{ profileThrows: true }, { profileError: { message: "private" } }]) {
  test(`muestra error seguro y no un falso estado vacío: ${JSON.stringify(options)}`, async () => {
    const { render, calls } = setup(options);
    const html = await render();
    assert.match(html, /No pudimos cargar el listado/);
    assert.doesNotMatch(html, /Todavía no hay alumnos|sensitive|private/);
    assert.equal(calls.admin, 0);
  });
}

test("pagina sin consultar el correo del registro adicional y permite continuar", async () => {
  const students = Array.from({ length: 21 }, (_, index) => ({ ...student, id: `student-${index}` }));
  const { render, calls } = setup({ students });
  const html = await render("2");
  assert.deepEqual(calls.range, [20, 40]);
  assert.deepEqual(calls.orders, ["last_name", "first_name", "id"]);
  assert.equal(calls.emails.length, 20);
  assert.ok(!calls.emails.includes("student-20"));
  assert.match(html, /pagina=1/);
  assert.match(html, /pagina=3/);
});

test("normaliza páginas inválidas y distingue una página vacía del listado vacío", async () => {
  for (const page of ["0", "-1", "1.5", "no-numero", "Infinity", ["2", "3"], "9007199254740991"]) {
    const { getStudents } = setup();
    assert.equal((await getStudents(page)).page, 1);
  }
  const { render } = setup();
  const html = await render("2");
  assert.match(html, /No hay alumnos en esta página/);
  assert.doesNotMatch(html, /Todavía no hay alumnos registrados/);
});

test("el cliente administrativo no persiste sesiones y usa la clave privada", () => {
  let options;
  const { createAdminClient } = loadModule("src/lib/supabase/admin.ts", {
    "@supabase/supabase-js": { createClient(url, key, config) {
      assert.equal(url, "https://example.invalid");
      assert.equal(key, "test-server-secret");
      options = config.auth;
      return {};
    } },
  });
  createAdminClient();
  assert.equal(options.persistSession, false);
  assert.equal(options.autoRefreshToken, false);
  assert.equal(options.detectSessionInUrl, false);
});
