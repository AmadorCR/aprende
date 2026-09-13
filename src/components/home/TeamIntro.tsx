import Image from "next/image";
import Link from "next/link";

import { professionals } from "@/content/professionals";
import { siteConfig } from "@/content/site";
import type { Professional } from "@/types/professional";

const activeProfessionals = professionals
  .filter((professional) => professional.enabled)
  .toSorted(
    (firstProfessional, secondProfessional) =>
      firstProfessional.order - secondProfessional.order,
  );

export function TeamIntro() {
  const { homeTeam } = siteConfig;

  return (
    <section
      className="bg-white px-4 py-18 sm:px-6 sm:py-22 lg:px-8 lg:py-26"
      aria-labelledby="team-title"
    >
      <div className="mx-auto w-full max-w-7xl">
        <div className="grid gap-8 border-y border-[color:var(--color-border-strong)] py-10 lg:grid-cols-[0.72fr_1fr] lg:gap-14 lg:py-14">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[color:var(--color-brand-purple-strong)]">
              {homeTeam.eyebrow}
            </p>
            <h2
              id="team-title"
              className="mt-4 text-3xl font-bold leading-tight text-[color:var(--color-ink)] sm:text-4xl"
            >
              {homeTeam.title}
            </h2>
            <p className="mt-5 text-base leading-8 text-[color:var(--color-muted)] sm:text-lg">
              {homeTeam.description}
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {activeProfessionals.map((professional) => (
              <ProfessionalProfile
                key={professional.id}
                professional={professional}
                ctaLabel={homeTeam.profileCTA.label}
                ctaHref={homeTeam.profileCTA.href}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

type ProfessionalProfileProps = {
  professional: Professional;
  ctaLabel: string;
  ctaHref: string;
};

function ProfessionalProfile({
  professional,
  ctaLabel,
  ctaHref,
}: ProfessionalProfileProps) {
  const supportingDetails =
    professional.secondaryRoles.length > 0
      ? professional.secondaryRoles
      : professional.specializations;
  const visibleDetails = supportingDetails.slice(0, 2);

  return (
    <article className="group relative overflow-hidden rounded-2xl border border-[color:var(--color-border)] bg-[color:var(--color-surface)] transition hover:border-[color:var(--color-border-strong)] focus-within:border-[color:var(--color-brand-purple)] motion-reduce:transition-none">
      <div className="relative aspect-[4/5] overflow-hidden bg-[linear-gradient(135deg,rgba(186,70,180,0.11)_0%,rgba(157,90,204,0.08)_42%,rgba(96,196,249,0.13)_100%)]">
        {professional.image ? (
          <Image
            src={professional.image.src}
            alt={professional.image.alt}
            fill
            sizes="(min-width: 1024px) 28vw, (min-width: 768px) 44vw, 92vw"
            className="object-cover"
          />
        ) : (
          <div aria-hidden="true" className="absolute inset-0">
            <div className="absolute inset-x-8 bottom-0 h-[72%] rounded-t-[2rem] border border-white/70 bg-white/42" />
            <div className="absolute left-8 top-8 h-1.5 w-24 rounded-full bg-[color:var(--color-brand-pink)]" />
            <div className="absolute bottom-8 left-8 right-8 h-px bg-white/80" />
          </div>
        )}
      </div>

      <div className="p-6 sm:p-7">
        <p className="text-sm font-semibold text-[color:var(--color-brand-purple-strong)]">
          {professional.role}
        </p>
        <h3 className="mt-2 text-2xl font-semibold leading-tight text-[color:var(--color-ink)]">
          {professional.name}
        </h3>

        {visibleDetails.length > 0 ? (
          <ul className="mt-4 flex flex-wrap gap-x-3 gap-y-2 text-sm leading-6 text-[color:var(--color-muted)]">
            {visibleDetails.map((detail) => (
              <li key={detail}>{detail}</li>
            ))}
          </ul>
        ) : null}

        {professional.shortBio ? (
          <p className="mt-5 text-sm leading-7 text-[color:var(--color-muted)] sm:text-base">
            {professional.shortBio}
          </p>
        ) : null}

        <Link
          href={ctaHref}
          className="mt-6 inline-flex rounded-md text-sm font-semibold text-[color:var(--color-brand-purple-strong)] transition hover:text-[color:var(--color-brand-pink-strong)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[color:var(--color-brand-purple)] motion-reduce:transition-none"
        >
          {ctaLabel}
          <span
            className="ml-2 transition group-hover:translate-x-1 motion-reduce:transition-none motion-reduce:group-hover:translate-x-0"
            aria-hidden="true"
          >
            -&gt;
          </span>
        </Link>
      </div>
    </article>
  );
}
