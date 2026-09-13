import Link from "next/link";

import { serviceAreas } from "@/content/services";
import { siteConfig } from "@/content/site";
import type { ServiceAreaId } from "@/types/service";

const areaStyles: Record<
  ServiceAreaId,
  {
    accent: string;
    className: string;
  }
> = {
  "aprendizaje-educacion": {
    accent: "bg-[color:var(--color-brand-purple)]",
    className: "lg:col-span-6",
  },
  "comunicacion-lenguaje": {
    accent: "bg-[color:var(--color-brand-cyan)]",
    className: "lg:col-span-6",
  },
  "terapia-psicologica": {
    accent: "bg-[color:var(--color-brand-pink)]",
    className: "lg:col-span-6",
  },
  neuropsicologia: {
    accent: "bg-[#7D75E3]",
    className: "lg:col-span-6",
  },
  "evaluacion-orientacion": {
    accent: "bg-[#69A1F0]",
    className: "lg:col-span-8 lg:col-start-3",
  },
};

const activeAreas = serviceAreas
  .filter((area) => area.enabled)
  .toSorted((firstArea, secondArea) => firstArea.order - secondArea.order);

export function HelpAreas() {
  const { homeHelpAreas } = siteConfig;

  return (
    <section
      className="bg-white px-4 py-18 sm:px-6 sm:py-22 lg:px-8 lg:py-26"
      aria-labelledby="help-areas-title"
    >
      <div className="mx-auto w-full max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <h2
            id="help-areas-title"
            className="text-3xl font-bold leading-tight text-[color:var(--color-ink)] sm:text-4xl"
          >
            {homeHelpAreas.title}
          </h2>
          <p className="mt-4 text-base leading-8 text-[color:var(--color-muted)] sm:text-lg">
            {homeHelpAreas.description}
          </p>
        </div>

        <div className="mt-11 grid gap-4 sm:gap-5 lg:grid-cols-12">
          {activeAreas.map((area, index) => (
            <HelpAreaItem
              key={area.id}
              area={area}
              number={index + 1}
              className={areaStyles[area.id].className}
              accentClassName={areaStyles[area.id].accent}
            />
          ))}

          <Link
            href={homeHelpAreas.cta.href}
            className="group flex min-h-16 items-center justify-between gap-4 rounded-2xl border border-[color:var(--color-border)] bg-[linear-gradient(90deg,rgba(186,70,180,0.08)_0%,rgba(157,90,204,0.07)_35%,rgba(96,196,249,0.1)_100%)] px-6 py-4 text-sm font-semibold text-[color:var(--color-brand-purple-strong)] transition hover:border-[color:var(--color-brand-purple)] hover:text-[color:var(--color-brand-pink-strong)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[color:var(--color-brand-purple)] motion-reduce:transition-none sm:px-7 lg:col-span-12"
          >
            <span>{homeHelpAreas.cta.label}</span>
            <span
              className="text-lg leading-none transition group-hover:translate-x-1 motion-reduce:transition-none motion-reduce:group-hover:translate-x-0"
              aria-hidden="true"
            >
              →
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}

type HelpAreaItemProps = {
  area: (typeof serviceAreas)[number];
  number: number;
  className: string;
  accentClassName: string;
};

function HelpAreaItem({
  area,
  number,
  className,
  accentClassName,
}: HelpAreaItemProps) {
  return (
    <article
      className={`group relative overflow-hidden rounded-2xl border border-[color:var(--color-border)] bg-[color:var(--color-surface)] p-6 transition hover:border-[color:var(--color-border-strong)] focus-within:border-[color:var(--color-brand-purple)] motion-reduce:transition-none sm:p-7 ${className}`}
    >
      <div
        className={`absolute inset-x-0 top-0 h-1.5 ${accentClassName}`}
        aria-hidden="true"
      />
      <div className="flex items-start gap-5">
        <span
          className="mt-1 text-sm font-semibold text-[color:var(--color-brand-purple-strong)]"
          aria-hidden="true"
        >
          {number.toString().padStart(2, "0")}
        </span>
        <div className="min-w-0">
          <h3 className="text-xl font-semibold leading-snug text-[color:var(--color-ink)]">
            <Link
              href="/servicios"
              className="rounded-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[color:var(--color-brand-purple)]"
            >
              <span className="absolute inset-0" aria-hidden="true" />
              {area.name}
            </Link>
          </h3>
          <p className="mt-3 text-sm leading-7 text-[color:var(--color-muted)] sm:text-base">
            {area.shortDescription}
          </p>
        </div>
      </div>
    </article>
  );
}
