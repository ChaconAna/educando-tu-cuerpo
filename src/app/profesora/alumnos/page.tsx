import Link from "next/link";
import { getStudents } from "@/features/students/data/get-students";

export default async function AlumnosPage({
  searchParams,
}: {
  searchParams: Promise<{ pagina?: string | string[] }>;
}) {
  const { pagina } = await searchParams;
  const result = await getStudents(pagina);

  return (
    <main className="min-h-screen bg-zinc-50 px-4 py-8 sm:px-6 sm:py-12">
      <div className="mx-auto w-full max-w-5xl rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm sm:p-8">
        <Link href="/profesora" className="text-sm font-semibold text-emerald-700 underline underline-offset-4 hover:text-emerald-900">
          Volver al panel
        </Link>
        <p className="mb-3 mt-6 text-sm font-semibold uppercase tracking-widest text-emerald-700">
          Panel de profesora
        </p>
        <h1 className="text-3xl font-bold text-zinc-900">Alumnos</h1>
        <p className="mt-3 text-zinc-600">Consultá los datos de tus alumnos registrados.</p>

        {!result.ok ? (
          <div role="alert" className="mt-8 rounded-xl border border-red-200 bg-red-50 p-5 text-red-900">
            <p>No pudimos cargar el listado de alumnos. Intentá nuevamente.</p>
            <a href="/profesora/alumnos" className="mt-3 inline-block font-semibold underline underline-offset-4">
              Reintentar
            </a>
          </div>
        ) : (
          <>
            {result.emailUnavailable && (
              <p role="status" className="mt-6 rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-900">
                No pudimos cargar algunos correos electrónicos. Los demás datos están disponibles.
              </p>
            )}
            {result.students.length === 0 ? (
              <p className="mt-8 rounded-xl bg-zinc-50 p-6 text-zinc-600">
                {result.page === 1
                  ? "Todavía no hay alumnos registrados."
                  : "No hay alumnos en esta página."}
              </p>
            ) : (
              <ul className="mt-8 grid gap-4 md:grid-cols-2">
                {result.students.map((student) => (
                  <li key={student.id} className="min-w-0 rounded-xl border border-zinc-200 p-5">
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <h2 className="min-w-0 break-words text-lg font-semibold text-zinc-900">
                        {student.first_name} {student.last_name}
                      </h2>
                      <span className={`rounded-full px-3 py-1 text-xs font-semibold ${student.is_active ? "bg-emerald-50 text-emerald-800" : "bg-zinc-100 text-zinc-700"}`}>
                        {student.is_active ? "Activo" : "Inactivo"}
                      </span>
                    </div>
                    <dl className="mt-4 space-y-3 text-sm">
                      <div>
                        <dt className="font-medium text-zinc-500">Correo electrónico</dt>
                        <dd className="mt-1 break-words text-zinc-900">{student.email ?? "No disponible"}</dd>
                      </div>
                      <div>
                        <dt className="font-medium text-zinc-500">Teléfono</dt>
                        <dd className="mt-1 break-words text-zinc-900">{student.phone || "Sin teléfono registrado"}</dd>
                      </div>
                    </dl>
                  </li>
                ))}
              </ul>
            )}
            {(result.page > 1 || result.hasNextPage) && (
              <nav aria-label="Páginas de alumnos" className="mt-8 flex flex-wrap items-center justify-between gap-4 text-sm">
                {result.page > 1 && (
                  <Link href={`/profesora/alumnos?pagina=${result.page - 1}`} className="rounded-lg border border-zinc-200 px-4 py-3 font-semibold text-emerald-700 hover:bg-emerald-50">
                    Anterior
                  </Link>
                )}
                <span className="text-zinc-600">Página {result.page}</span>
                {result.hasNextPage && (
                  <Link href={`/profesora/alumnos?pagina=${result.page + 1}`} className="rounded-lg border border-zinc-200 px-4 py-3 font-semibold text-emerald-700 hover:bg-emerald-50">
                    Siguiente
                  </Link>
                )}
              </nav>
            )}
          </>
        )}
      </div>
    </main>
  );
}
