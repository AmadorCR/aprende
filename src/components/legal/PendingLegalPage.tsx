type PendingLegalPageProps = {
  title: string;
};

export function PendingLegalPage({ title }: PendingLegalPageProps) {
  return (
    <main>
      <section className="bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="mx-auto w-full max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[color:var(--color-brand-purple-strong)]">
            Información legal
          </p>
          <h1 className="mt-4 text-[clamp(2.15rem,8vw,4rem)] font-bold leading-tight text-[color:var(--color-ink)]">
            {title}
          </h1>
          <p className="mt-6 text-base leading-8 text-[color:var(--color-muted)] sm:text-lg">
            Este contenido legal está pendiente de validación y se incorporará cuando esté
            disponible el texto definitivo.
          </p>
        </div>
      </section>
    </main>
  );
}
