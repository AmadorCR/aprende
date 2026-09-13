import Image from "next/image";
import Link from "next/link";

import { siteConfig } from "@/content/site";

export function CenterIntro() {
  const { address, homeCenter } = siteConfig;
  const [featuredImage, secondaryImage] = homeCenter.images;
  const addressLine = `${address.street}, ${address.postalCode} ${address.locality}`;

  return (
    <section
      className="bg-[color:var(--color-surface)] px-4 py-18 sm:px-6 sm:py-22 lg:px-8 lg:py-26"
      aria-labelledby="center-title"
    >
      <div className="mx-auto w-full max-w-7xl">
        <div className="grid gap-5 lg:grid-cols-12">
          <CenterImage
            image={featuredImage}
            className="aspect-[4/3] lg:col-span-12"
            priority="featured"
          />

          <div className="border border-[color:var(--color-border-strong)] bg-white p-6 sm:p-8 lg:col-span-7 lg:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[color:var(--color-brand-purple-strong)]">
              {homeCenter.eyebrow}
            </p>
            <h2
              id="center-title"
              className="mt-4 text-3xl font-bold leading-tight text-[color:var(--color-ink)] sm:text-4xl"
            >
              {homeCenter.title}
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-[color:var(--color-muted)] sm:text-lg">
              {homeCenter.description}
            </p>

            <address className="mt-8 not-italic">
              <p className="text-sm font-semibold text-[color:var(--color-brand-purple-strong)]">
                {address.locality}
              </p>
              <p className="mt-2 text-base leading-7 text-[color:var(--color-ink)]">
                {addressLine}
              </p>
              <p className="text-sm leading-6 text-[color:var(--color-muted)]">
                {address.province}
              </p>
            </address>

            <Link
              href={homeCenter.cta.href}
              className="mt-8 inline-flex rounded-md text-sm font-semibold text-[color:var(--color-brand-purple-strong)] transition hover:text-[color:var(--color-brand-pink-strong)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[color:var(--color-brand-purple)] motion-reduce:transition-none"
            >
              {homeCenter.cta.label}
              <span className="ml-2" aria-hidden="true">
                -&gt;
              </span>
            </Link>
          </div>

          <CenterImage
            image={secondaryImage}
            className="aspect-[4/3] lg:col-span-5 lg:aspect-auto lg:min-h-[26rem]"
            priority="secondary"
          />
        </div>
      </div>
    </section>
  );
}

type CenterImageProps = {
  image: CenterImageData;
  className: string;
  priority: "featured" | "secondary";
};

type CenterImageData = {
  id: string;
  src: string | null;
  alt: string;
  label: string;
  featured: boolean;
};

function CenterImage({ image, className, priority }: CenterImageProps) {
  return (
    <figure
      className={`relative overflow-hidden border border-[color:var(--color-border-strong)] bg-white ${className}`}
    >
      {image.src ? (
        <Image
          src={image.src}
          alt={image.alt}
          fill
          sizes={
            priority === "featured"
              ? "(min-width: 1024px) 80rem, 92vw"
              : "(min-width: 1024px) 32rem, 92vw"
          }
          className="object-cover"
        />
      ) : (
        <div
          className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.86)_0%,rgba(157,90,204,0.08)_48%,rgba(96,196,249,0.12)_100%)]"
          aria-hidden="true"
        >
          <div className="absolute inset-5 border border-dashed border-[color:var(--color-border-strong)] sm:inset-7" />
          <div className="absolute left-8 top-8 h-1.5 w-24 bg-[color:var(--color-brand-cyan)]" />
          <div className="absolute bottom-8 left-8 right-8 grid gap-2">
            <span className="h-2 w-2/3 bg-[color:var(--color-border-strong)]" />
            <span className="h-2 w-1/2 bg-[color:var(--color-border)]" />
          </div>
        </div>
      )}

      {!image.src ? (
        <figcaption className="absolute inset-x-6 top-1/2 -translate-y-1/2 text-center text-sm font-semibold text-[color:var(--color-muted)] sm:text-base">
          {image.label}
        </figcaption>
      ) : null}
    </figure>
  );
}
