import type { LegalPageContent } from "@/content/legal";

type PendingLegalPageProps = {
  content: LegalPageContent;
};

export function PendingLegalPage({ content }: PendingLegalPageProps) {
  return (
    <main>
      <article className="bg-white px-4 py-14 sm:px-6 sm:py-18 lg:px-8 lg:py-20">
        <div className="mx-auto w-full max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[color:var(--color-brand-purple-strong)]">
            Informacion legal
          </p>
          <h1 className="mt-4 text-[clamp(2rem,7vw,3.25rem)] font-bold leading-tight text-[color:var(--color-ink)]">
            {content.title}
          </h1>
          <p className="mt-6 text-base leading-8 text-[color:var(--color-muted)] sm:text-lg">
            {content.intro}
          </p>

          <div className="mt-12 space-y-10">
            {content.sections.map((section, index) => {
              const sectionId = `legal-section-${index + 1}`;

              return (
                <section key={section.title} aria-labelledby={sectionId}>
                  <h2
                    id={sectionId}
                    className="text-xl font-semibold leading-snug text-[color:var(--color-ink)] sm:text-2xl"
                  >
                    {section.title}
                  </h2>
                  {section.paragraphs?.map((paragraph) => (
                    <p
                      key={paragraph}
                      className="mt-4 text-base leading-8 text-[color:var(--color-muted)]"
                    >
                      {paragraph}
                    </p>
                  ))}
                  {section.items ? (
                    <ul className="mt-4 list-disc space-y-2 pl-5 text-base leading-8 text-[color:var(--color-muted)]">
                      {section.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  ) : null}
                </section>
              );
            })}
          </div>
        </div>
      </article>
    </main>
  );
}
