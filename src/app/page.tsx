
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-zinc-50 px-6 text-center">
      <div className="w-full max-w-xl">
        <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-emerald-700">
          Entrenamiento personalizado
        </p>

        <h1 className="mb-6 text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl">
          Educando tu cuerpo
        </h1>

        <p className="mb-8 text-lg leading-relaxed text-zinc-600">
          Un espacio para acompañarte en tu entrenamiento,
          organizar tus rutinas y registrar tus progresos.
        </p>

        <div className="rounded-xl border border-zinc-200 bg-white p-6 shadow-sm">
          <h2 className="mb-2 text-xl font-semibold text-zinc-900">
            ¡Bienvenido!
          </h2>

          <p className="text-zinc-600">
            Estamos preparando tu espacio de entrenamiento.
          </p>
        </div>
      </div>
    </main>
  );
}
