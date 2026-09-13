import type { Metadata } from "next";
import Image from "next/image";

import { siteConfig } from "@/content/site";

export const metadata: Metadata = {
  title: "El centro | Aprende Centro Multidisciplinar",
  description:
    "Conoce las instalaciones de Aprende Centro Multidisciplinar en Priego de Córdoba.",
};

export default function CentroPageRoute() {
  const { address, homeCenter } = siteConfig;

  return (
    <main>
      <section className="bg-white px-4 pb-12 pt-12 sm:px-6 sm:pb-16 sm:pt-16 lg:px-8 lg:pb-18 lg:pt-18">
        <div className="mx-auto w-full max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[color:var(--color-brand-purple-strong)]">
              {homeCenter.eyebrow}
            </p>
            <h1 className="mt-4 text-[clamp(2.15rem,8vw,4rem)] font-bold leading-tight text-[color:var(--color-ink)]">
              {homeCenter.title}
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-[color:var(--color-muted)] sm:text-lg">
              {homeCenter.description}
            </p>
          </div>
        </div>
      </section>

      <section
        className="bg-[color:var(--color-surface)] px-4 py-14 sm:px-6 sm:py-18 lg:px-8 lg:py-22"
        aria-label="Fotografías del centro Aprende"
      >
        <div className="mx-auto grid w-full max-w-7xl gap-5 lg:grid-cols-2">
          {homeCenter.images.map((image) => (
            <figure
              key={image.id}
              className="relative aspect-[4/3] overflow-hidden border border-[color:var(--color-border-strong)] bg-white"
            >
              {image.src ? (
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(min-width: 1024px) 40rem, 92vw"
                  className="object-cover"
                />
              ) : null}
            </figure>
          ))}
        </div>
      </section>

      <section className="bg-white px-4 py-14 sm:px-6 sm:py-18 lg:px-8 lg:py-22">
        <div className="mx-auto w-full max-w-7xl">
          <address className="max-w-3xl border-l-4 border-[color:var(--color-brand-cyan)] pl-5 not-italic sm:pl-7">
            <p className="text-sm font-semibold text-[color:var(--color-brand-purple-strong)]">
              {address.locality}
            </p>
            <h2 className="mt-3 text-2xl font-bold leading-tight text-[color:var(--color-ink)] sm:text-3xl">
              {address.street}
            </h2>
            <p className="mt-4 text-base leading-8 text-[color:var(--color-muted)] sm:text-lg">
              {address.postalCode} {address.locality}, {address.province}, {address.country}
            </p>
          </address>
        </div>
      </section>
    </main>
  );
}
