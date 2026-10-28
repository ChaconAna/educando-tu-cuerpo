
import Link from "next/link";

export default function AccesoDenegadoPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-zinc-50 px-6">
      <div className="w-full max-w-md rounded-2xl border border-zinc-200 bg-white p-8 text-center shadow-sm">
        <h1 className="mb-4 text-3xl font-bold text-zinc-900">
          Acceso denegado
        </h1>

        <p className="mb-6 text-zinc-600">
          No tenés permisos para acceder a esta sección.
        </p>

        <Link
          href="/login"
          className="inline-block rounded-lg bg-emerald-700 px-6 py-3 font-semibold text-white hover:bg-emerald-800"
        >
          Volver al inicio de sesión
        </Link>
      </div>
    </main>
  );
}
