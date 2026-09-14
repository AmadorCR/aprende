import type { Metadata } from "next";
import Image from "next/image";

import { siteConfig } from "@/content/site";
import { createMailtoHref, createWhatsAppHref } from "@/lib/contact";

export const metadata: Metadata = {
  title: "El centro | Aprende Centro Multidisciplinar",
  description:
    "Conoce Aprende Centro Multidisciplinar en Priego de Córdoba, nuestro espacio y cómo contactar con nosotros.",
};

export default function CentroPageRoute() {
  const { address, centerPage, homeCenter } = siteConfig;
  const [featuredImage, secondaryImage] = homeCenter.images;
  const whatsappHref = createWhatsAppHref(siteConfig.whatsapp);
  const emailHref = createMailtoHref(siteConfig.email);

  return (
    <main>
      <section className="bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-18">
        <div className="mx-auto grid w-full max-w-7xl gap-10 lg:grid-cols-[0.48fr_0.52fr] lg:items-center lg:gap-14">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[color:var(--color-brand-purple-strong)]">
              {centerPage.hero.eyebrow}
            </p>
            <h1 className="mt-4 text-[clamp(2.15rem,8vw,4rem)] font-bold leading-tight text-[color:var(--color-ink)]">
              {centerPage.hero.title}
            </h1>
            <div className="mt-6 max-w-2xl space-y-4 text-base leading-8 text-[color:var(--color-muted)] sm:text-lg">
              <p>{centerPage.hero.description}</p>
              <p>{centerPage.hero.secondaryDescription}</p>
            </div>
          </div>

          <CenterImage
            image={featuredImage}
            className="aspect-[4/3] lg:aspect-[5/4]"
            sizes="(min-width: 1280px) 42rem, (min-width: 1024px) 48vw, 92vw"
            priority
          />
        </div>
      </section>

      <section className="bg-[color:var(--color-surface)] px-4 py-14 sm:px-6 sm:py-18 lg:px-8 lg:py-22">
        <div className="mx-auto grid w-full max-w-7xl gap-10 lg:grid-cols-[0.38fr_0.62fr] lg:items-center lg:gap-16">
          <CenterImage
            image={secondaryImage}
            className="aspect-[4/3]"
            sizes="(min-width: 1280px) 34rem, (min-width: 1024px) 40vw, 92vw"
          />

          <section className="min-w-0" aria-labelledby="center-environment-title">
            <h2
              id="center-environment-title"
              className="text-2xl font-bold leading-tight text-[color:var(--color-ink)] sm:text-3xl"
            >
              {centerPage.environment.title}
            </h2>
            <div className="mt-5 max-w-2xl space-y-4 text-base leading-8 text-[color:var(--color-muted)] sm:text-lg">
              {centerPage.environment.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </section>
        </div>
      </section>

      <section
        className="bg-white px-4 py-14 sm:px-6 sm:py-18 lg:px-8 lg:py-22"
        aria-labelledby="center-location-title"
      >
        <div className="mx-auto w-full max-w-7xl">
          <div className="grid gap-8 border-y border-[color:var(--color-border-strong)] py-8 sm:py-10 lg:grid-cols-[0.44fr_0.56fr] lg:gap-12 lg:py-12">
            <div>
              <p className="text-sm font-semibold text-[color:var(--color-brand-purple-strong)]">
                {address.locality}
              </p>
              <h2
                id="center-location-title"
                className="mt-3 text-2xl font-bold leading-tight text-[color:var(--color-ink)] sm:text-3xl"
              >
                {centerPage.location.title}
              </h2>
              <p className="mt-4 text-base leading-8 text-[color:var(--color-muted)]">
                {centerPage.location.description}
              </p>
            </div>

            <address className="not-italic">
              <div className="flex gap-4">
                <Image
                  src="/icons/contact/google-maps.svg"
                  alt=""
                  width={28}
                  height={28}
                  className="mt-1 h-7 w-7 shrink-0"
                />
                <div>
                  <p className="text-xl font-semibold leading-8 text-[color:var(--color-ink)]">
                    {address.street}
                  </p>
                  <p className="mt-2 text-base leading-8 text-[color:var(--color-muted)] sm:text-lg">
                    {address.postalCode} {address.locality}, {address.province}
                  </p>
                </div>
              </div>

              {centerPage.location.mapsUrl ? (
                <a
                  href={centerPage.location.mapsUrl}
                  className="mt-7 inline-flex rounded-md text-sm font-semibold text-[color:var(--color-brand-purple-strong)] transition hover:text-[color:var(--color-brand-pink-strong)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[color:var(--color-brand-purple)] motion-reduce:transition-none"
                  target="_blank"
                  rel="noreferrer"
                >
                  Abrir en Google Maps
                  <span className="ml-2" aria-hidden="true">
                    -&gt;
                  </span>
                </a>
              ) : null}
            </address>
          </div>
        </div>
      </section>

      <section
        className="bg-[color:var(--color-surface)] px-4 py-14 sm:px-6 sm:py-18 lg:px-8 lg:py-22"
        aria-labelledby="center-contact-title"
      >
        <div className="mx-auto w-full max-w-7xl">
          <div className="max-w-3xl border-l-4 border-[color:var(--color-brand-pink)] pl-5 sm:pl-7">
            <h2
              id="center-contact-title"
              className="text-2xl font-bold leading-tight text-[color:var(--color-ink)] sm:text-3xl"
            >
              {centerPage.contact.title}
            </h2>
            <p className="mt-4 text-base leading-8 text-[color:var(--color-muted)] sm:text-lg">
              {centerPage.contact.description}
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <a
                href={whatsappHref}
                className="inline-flex min-h-12 items-center justify-center rounded-full bg-[color:var(--color-brand-purple-strong)] px-6 py-3 text-center text-base font-semibold text-white shadow-[0_14px_30px_rgba(157,90,204,0.18)] transition hover:bg-[color:var(--color-brand-pink-strong)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[color:var(--color-brand-purple)] motion-reduce:transition-none"
              >
                {centerPage.contact.primaryCTA.label}
              </a>
              <a
                href={emailHref}
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-[color:var(--color-border-strong)] bg-white px-6 py-3 text-center text-base font-semibold text-[color:var(--color-ink)] transition hover:border-[color:var(--color-brand-purple)] hover:text-[color:var(--color-brand-purple-strong)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[color:var(--color-brand-purple)] motion-reduce:transition-none"
              >
                {centerPage.contact.secondaryCTA.label}
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

type CenterImageProps = {
  image: {
    id: string;
    src: string | null;
    alt: string;
  };
  className: string;
  sizes: string;
  priority?: boolean;
};

function CenterImage({ className, image, priority = false, sizes }: CenterImageProps) {
  return (
    <figure
      className={`relative overflow-hidden rounded-2xl border border-[color:var(--color-border-strong)] bg-white ${className}`}
    >
      {image.src ? (
        <Image
          src={image.src}
          alt={image.alt}
          fill
          sizes={sizes}
          className="object-cover"
          priority={priority}
        />
      ) : null}
    </figure>
  );
}
