import Image from "next/image";

import { professionals } from "@/content/professionals";
import { siteConfig } from "@/content/site";
import { createMailtoHref, createWhatsAppHref } from "@/lib/contact";
import type { Professional } from "@/types/professional";

const activeProfessionals = professionals
  .filter((professional) => professional.enabled)
  .toSorted(
    (firstProfessional, secondProfessional) =>
      firstProfessional.order - secondProfessional.order,
  );

export function TeamPage() {
  return (
    <main>
      <section className="bg-white px-4 pb-12 pt-12 sm:px-6 sm:pb-16 sm:pt-16 lg:px-8 lg:pb-18 lg:pt-18">
        <div className="mx-auto w-full max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[color:var(--color-brand-purple-strong)]">
              Equipo
            </p>
            <h1 className="mt-4 text-[clamp(2.15rem,8vw,4rem)] font-bold leading-tight text-[color:var(--color-ink)]">
              Profesionales que te acompañan
            </h1>
            <div className="mt-6 max-w-2xl space-y-4 text-base leading-8 text-[color:var(--color-muted)] sm:text-lg">
              <p>
                En Aprende trabajamos desde distintas áreas para ofrecer una atención
                individualizada y coordinada, adaptada a las necesidades de cada persona y
                cada familia.
              </p>
              <p>
                Cada profesional aporta su formación y experiencia desde su ámbito de
                intervención, manteniendo una visión conjunta cuando el caso lo requiere.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        className="bg-[color:var(--color-surface)] px-4 py-14 sm:px-6 sm:py-18 lg:px-8 lg:py-22"
        aria-label="Profesionales de Aprende"
      >
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-14 lg:gap-18">
          {activeProfessionals.map((professional, index) => (
            <ProfessionalSection
              key={professional.id}
              professional={professional}
              isReversed={index % 2 === 1}
            />
          ))}
        </div>
      </section>

      <TeamContactCTA />
    </main>
  );
}

type ProfessionalSectionProps = {
  professional: Professional;
  isReversed: boolean;
};

function ProfessionalSection({
  isReversed,
  professional,
}: ProfessionalSectionProps) {
  const bioParagraphs = splitParagraphs(professional.bio || professional.shortBio);
  const approachParagraphs = splitParagraphs(professional.workingApproach).slice(0, 2);

  return (
    <article className="grid gap-8 border-y border-[color:var(--color-border-strong)] bg-white py-8 sm:py-10 lg:grid-cols-[0.42fr_0.58fr] lg:gap-12 lg:py-12">
      <div className={isReversed ? "lg:order-2" : undefined}>
        <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-[linear-gradient(135deg,rgba(186,70,180,0.10)_0%,rgba(96,196,249,0.12)_100%)]">
          {professional.image ? (
            <Image
              src={professional.image.src}
              alt={professional.image.alt}
              fill
              sizes="(min-width: 1280px) 34rem, (min-width: 1024px) 38vw, 92vw"
              className="object-cover"
            />
          ) : null}
        </div>
      </div>

      <div className="flex flex-col justify-center px-0 sm:px-2 lg:px-0">
        <div>
          <p className="text-sm font-semibold text-[color:var(--color-brand-purple-strong)]">
            {professional.role}
          </p>
          <h2 className="mt-2 text-3xl font-bold leading-tight text-[color:var(--color-ink)] sm:text-4xl">
            {professional.name}
          </h2>

          {professional.secondaryRoles.length > 0 ? (
            <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-sm font-medium leading-6 text-[color:var(--color-muted)]">
              {professional.secondaryRoles.map((role) => (
                <li key={role}>{role}</li>
              ))}
            </ul>
          ) : null}

          {professional.professionalRegistration ? (
            <p className="mt-4 text-sm text-[color:var(--color-muted)]">
              Colegiada {professional.professionalRegistration}
            </p>
          ) : null}
        </div>

        <div className="mt-7 space-y-5 text-base leading-8 text-[color:var(--color-muted)]">
          {bioParagraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>

        <div className="mt-8 grid gap-8 lg:grid-cols-2">
          <InfoList title="Áreas de trabajo" items={professional.workAreas} />
          <InfoList title="Formación destacada" items={professional.education} />
        </div>

        {approachParagraphs.length > 0 ? (
          <section className="mt-8 border-l-4 border-[color:var(--color-brand-cyan)] pl-5">
            <h3 className="text-lg font-semibold text-[color:var(--color-ink)]">
              Enfoque profesional
            </h3>
            <div className="mt-3 space-y-4 text-base leading-8 text-[color:var(--color-muted)]">
              {approachParagraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </section>
        ) : null}
      </div>
    </article>
  );
}

type InfoListProps = {
  title: string;
  items: string[];
};

function InfoList({ items, title }: InfoListProps) {
  if (items.length === 0) {
    return null;
  }

  return (
    <section>
      <h3 className="text-lg font-semibold text-[color:var(--color-ink)]">
        {title}
      </h3>
      <ul className="mt-4 space-y-3 text-sm leading-6 text-[color:var(--color-muted)] sm:text-base sm:leading-7">
        {items.map((item) => (
          <li key={item} className="flex gap-3">
            <span
              className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[color:var(--color-brand-pink)]"
              aria-hidden="true"
            />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

function TeamContactCTA() {
  const whatsappHref = createWhatsAppHref(siteConfig.whatsapp);
  const emailHref = createMailtoHref(siteConfig.email);

  return (
    <section
      className="bg-white px-4 py-14 sm:px-6 sm:py-18 lg:px-8 lg:py-22"
      aria-labelledby="team-contact-title"
    >
      <div className="mx-auto w-full max-w-7xl">
        <div className="max-w-3xl border-l-4 border-[color:var(--color-brand-pink)] pl-5 sm:pl-7">
          <h2
            id="team-contact-title"
            className="text-2xl font-bold leading-tight text-[color:var(--color-ink)] sm:text-3xl"
          >
            ¿Necesitas orientación?
          </h2>
          <p className="mt-4 text-base leading-8 text-[color:var(--color-muted)] sm:text-lg">
            Si no tienes claro qué profesional o servicio puede adaptarse mejor a lo que
            necesitas, puedes escribirnos y te orientaremos.
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <a
              href={whatsappHref}
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-[color:var(--color-brand-purple-strong)] px-6 py-3 text-center text-base font-semibold text-white shadow-[0_14px_30px_rgba(157,90,204,0.18)] transition hover:bg-[color:var(--color-brand-pink-strong)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[color:var(--color-brand-purple)] motion-reduce:transition-none"
            >
              Hablar por WhatsApp
            </a>
            <a
              href={emailHref}
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-[color:var(--color-border-strong)] bg-white px-6 py-3 text-center text-base font-semibold text-[color:var(--color-ink)] transition hover:border-[color:var(--color-brand-purple)] hover:text-[color:var(--color-brand-purple-strong)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[color:var(--color-brand-purple)] motion-reduce:transition-none"
            >
              Escribir por email
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function splitParagraphs(text: string): string[] {
  return text
    .split(/\n{2,}/)
    .map((paragraph) => paragraph.trim())
    .filter(Boolean);
}
