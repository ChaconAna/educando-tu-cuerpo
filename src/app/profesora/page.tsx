
import { requireProfesora } from "@/lib/auth";

import LogoutButton from "@/components/BotonSalir";

export default async function ProfesoraPage() {
  const { profile } = await requireProfesora();

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-zinc-50 px-6">
      <div className="w-full max-w-2xl rounded-2xl border border-zinc-200 bg-white p-8 shadow-sm">
        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-emerald-700">
          Panel de profesora
        </p>

        <h1 className="mb-4 text-3xl font-bold text-zinc-900">
          ¡Bienvenida, {profile.first_name}!
        </h1>

        <p className="text-zinc-600">
          Este es tu espacio de administración de Educando tu cuerpo.
        </p>

        <div className="mt-8 rounded-xl bg-emerald-50 p-5">
          <h2 className="mb-2 font-semibold text-emerald-900">
            Próximamente
          </h2>

        <div className="mt-8 flex justify-end">
            <LogoutButton />
        </div>

          <p className="text-sm text-emerald-800">
            Desde acá vas a poder gestionar tus alumnos, asignar rutinas
            y consultar sus progresos.
          </p>
        </div>
      </div>
    </main>
  );
}
