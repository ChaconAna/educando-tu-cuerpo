import "server-only";

import { requireProfesora } from "@/lib/auth";
import { createAdminClient } from "@/lib/supabase/admin";
import { createClient } from "@/lib/supabase/server";

const PAGE_SIZE = 20;

type Student = {
  id: string;
  first_name: string;
  last_name: string;
  phone: string | null;
  is_active: boolean;
  email: string | null;
};

type StudentsResult =
  | { ok: false }
  | {
      ok: true;
      students: Student[];
      page: number;
      hasNextPage: boolean;
      emailUnavailable: boolean;
    };

export async function getStudents(
  requestedPage?: string | string[],
): Promise<StudentsResult> {
  // Fuera del try: las redirecciones de autorización deben propagarse.
  await requireProfesora();

  const parsedPage = typeof requestedPage === "string" ? Number(requestedPage) : 1;
  const page = Number.isSafeInteger(parsedPage) && parsedPage > 0 &&
    parsedPage <= Math.floor(Number.MAX_SAFE_INTEGER / PAGE_SIZE)
    ? parsedPage
    : 1;

  try {
    const supabase = await createClient();
    const offset = (page - 1) * PAGE_SIZE;
    const { data, error } = await supabase
      .from("profiles")
      .select("id, first_name, last_name, phone, is_active")
      .eq("role", "ALUMNO")
      .order("last_name")
      .order("first_name")
      .order("id")
      .range(offset, offset + PAGE_SIZE);

    if (error || !data) return { ok: false };

    const profiles = data.slice(0, PAGE_SIZE);
    const result = {
      ok: true as const,
      page,
      hasNextPage: data.length > PAGE_SIZE,
    };

    if (profiles.length === 0) {
      return { ...result, students: [], emailUnavailable: false };
    }

    // Solo consultar Auth para los perfiles visibles, nunca para toda la cuenta.
    let admin: ReturnType<typeof createAdminClient> = null;
    try {
      admin = createAdminClient();
    } catch {
      // Un problema de configuración no impide consultar los perfiles.
    }

    const students = await Promise.all(profiles.map(async (profile) => {
      let email: string | null = null;
      if (admin) {
        try {
          const { data, error } = await admin.auth.admin.getUserById(profile.id);
          if (!error) email = data.user?.email || null;
        } catch {
          // No exponer errores ni metadatos de Auth en la respuesta.
        }
      }

      return {
        id: profile.id,
        first_name: profile.first_name,
        last_name: profile.last_name,
        phone: profile.phone,
        is_active: profile.is_active,
        email,
      };
    }));

    return {
      ...result,
      students,
      emailUnavailable: students.some((student) => student.email === null),
    };
  } catch {
    return { ok: false };
  }
}
