import Link from "next/link";

export default function NotFound() {
  return (
    <main>
      <section className="bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="mx-auto w-full max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[color:var(--color-brand-purple-strong)]">
            Error 404
          </p>
          <h1 className="mt-4 text-[clamp(2.15rem,8vw,4rem)] font-bold leading-tight text-[color:var(--color-ink)]">
            Página no encontrada
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-[color:var(--color-muted)] sm:text-lg">
            La página que buscas no existe o puede haber cambiado de dirección.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/"
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-[color:var(--color-brand-purple-strong)] px-6 py-3 text-center text-base font-semibold text-white shadow-[0_14px_30px_rgba(157,90,204,0.18)] transition hover:bg-[color:var(--color-brand-pink-strong)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[color:var(--color-brand-purple)] motion-reduce:transition-none"
            >
              Volver al inicio
            </Link>
            <Link
              href="/servicios"
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-[color:var(--color-border-strong)] bg-white px-6 py-3 text-center text-base font-semibold text-[color:var(--color-ink)] transition hover:border-[color:var(--color-brand-purple)] hover:text-[color:var(--color-brand-purple-strong)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[color:var(--color-brand-purple)] motion-reduce:transition-none"
            >
              Ver nuestros servicios
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
