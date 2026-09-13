import { serviceAreas } from "@/content/services";
import { siteConfig } from "@/content/site";
import { createMailtoHref, createWhatsAppHref } from "@/lib/contact";
import { ServiceAreasExplorer } from "./ServiceAreasExplorer";

const activeServiceAreas = serviceAreas
  .filter((area) => area.enabled)
  .map((area) => ({
    ...area,
    services: area.services
      .filter((service) => service.enabled)
      .toSorted((firstService, secondService) => firstService.order - secondService.order),
  }))
  .toSorted((firstArea, secondArea) => firstArea.order - secondArea.order);

export function ServicesPage() {
  const { contact, hero } = siteConfig.servicesPage;

  return (
    <main>
      <section className="bg-white px-4 pb-12 pt-12 sm:px-6 sm:pb-16 sm:pt-16 lg:px-8 lg:pb-18 lg:pt-18">
        <div className="mx-auto w-full max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[color:var(--color-brand-purple-strong)]">
              {hero.eyebrow}
            </p>
            <h1 className="mt-4 text-[clamp(2.15rem,8vw,4rem)] font-bold leading-tight text-[color:var(--color-ink)]">
              {hero.title}
            </h1>
            <div className="mt-6 max-w-2xl space-y-4 text-base leading-8 text-[color:var(--color-muted)] sm:text-lg">
              <p>{hero.description}</p>
              <p>{hero.secondaryDescription}</p>
            </div>
          </div>
        </div>
      </section>

      <section
        className="bg-[color:var(--color-surface)] px-4 py-14 sm:px-6 sm:py-18 lg:px-8 lg:py-22"
        aria-labelledby="service-areas-title"
      >
        <div className="mx-auto w-full max-w-7xl">
          <div className="max-w-2xl">
            <h2
              id="service-areas-title"
              className="text-2xl font-bold leading-tight text-[color:var(--color-ink)] sm:text-3xl"
            >
              Áreas de trabajo
            </h2>
            <p className="mt-4 text-base leading-8 text-[color:var(--color-muted)]">
              Organizamos los servicios por áreas para que puedas ubicar mejor qué tipo de
              apoyo puede encajar con tu situación.
            </p>
          </div>

          <div className="mt-10 divide-y divide-[color:var(--color-border-strong)] border-y border-[color:var(--color-border-strong)] bg-white">
            <ServiceAreasExplorer areas={activeServiceAreas} />
          </div>
        </div>
      </section>

      <ServicesContactCTA
        title={contact.title}
        description={contact.description}
        whatsappLabel={contact.primaryCTA.label}
        emailLabel={contact.secondaryCTA.label}
      />
    </main>
  );
}

type ServicesContactCTAProps = {
  title: string;
  description: string;
  whatsappLabel: string;
  emailLabel: string;
};

function ServicesContactCTA({
  description,
  emailLabel,
  title,
  whatsappLabel,
}: ServicesContactCTAProps) {
  const whatsappHref = createWhatsAppHref(siteConfig.whatsapp);
  const emailHref = createMailtoHref(siteConfig.email);

  return (
    <section
      className="bg-white px-4 py-14 sm:px-6 sm:py-18 lg:px-8 lg:py-22"
      aria-labelledby="services-contact-title"
    >
      <div className="mx-auto w-full max-w-7xl">
        <div className="max-w-3xl border-l-4 border-[color:var(--color-brand-pink)] pl-5 sm:pl-7">
          <h2
            id="services-contact-title"
            className="text-2xl font-bold leading-tight text-[color:var(--color-ink)] sm:text-3xl"
          >
            {title}
          </h2>
          <p className="mt-4 text-base leading-8 text-[color:var(--color-muted)] sm:text-lg">
            {description}
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <a
              href={whatsappHref}
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-[color:var(--color-brand-purple-strong)] px-6 py-3 text-center text-base font-semibold text-white shadow-[0_14px_30px_rgba(157,90,204,0.18)] transition hover:bg-[color:var(--color-brand-pink-strong)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[color:var(--color-brand-purple)] motion-reduce:transition-none"
            >
              {whatsappLabel}
            </a>
            <a
              href={emailHref}
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-[color:var(--color-border-strong)] bg-white px-6 py-3 text-center text-base font-semibold text-[color:var(--color-ink)] transition hover:border-[color:var(--color-brand-purple)] hover:text-[color:var(--color-brand-purple-strong)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[color:var(--color-brand-purple)] motion-reduce:transition-none"
            >
              {emailLabel}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
