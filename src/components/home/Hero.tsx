import Link from "next/link";

import { HighlightsCarousel } from "@/components/home/HighlightsCarousel";
import { highlights } from "@/content/highlights";
import { siteConfig } from "@/content/site";
import { createWhatsAppHref } from "@/lib/contact";
import { getActiveHighlights } from "@/lib/highlights";

export function Hero() {
  const { homeHero } = siteConfig;
  const whatsappHref = createWhatsAppHref(siteConfig.whatsapp);
  const activeHighlights = getActiveHighlights(highlights);

  return (
    <section className="overflow-hidden bg-[color:var(--color-background)]">
      <div className="mx-auto grid min-h-[calc(100vh-5rem)] w-full max-w-7xl items-center gap-12 px-4 py-14 sm:px-6 sm:py-18 lg:grid-cols-[1.08fr_0.92fr] lg:px-8 lg:py-20">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[color:var(--color-brand-purple-strong)]">
            {homeHero.eyebrow}
          </p>
          <h1 className="mt-5 max-w-3xl text-[clamp(2.35rem,8vw,4.65rem)] font-bold leading-[1.02] text-[color:var(--color-ink)]">
            {homeHero.title}
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-[color:var(--color-muted)] sm:text-lg">
            {homeHero.description}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href={whatsappHref}
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-[color:var(--color-brand-purple-strong)] px-6 py-3 text-center text-base font-semibold text-white shadow-[0_14px_30px_rgba(157,90,204,0.2)] transition hover:bg-[color:var(--color-brand-pink-strong)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[color:var(--color-brand-purple)] motion-reduce:transition-none"
            >
              {homeHero.primaryCTA.label}
            </a>
            <Link
              href={homeHero.secondaryCTA.href}
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-[color:var(--color-border-strong)] bg-white px-6 py-3 text-center text-base font-semibold text-[color:var(--color-ink)] transition hover:border-[color:var(--color-brand-purple)] hover:text-[color:var(--color-brand-purple-strong)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[color:var(--color-brand-purple)] motion-reduce:transition-none"
            >
              {homeHero.secondaryCTA.label}
            </Link>
          </div>

          <p className="mt-8 hidden bg-[linear-gradient(90deg,#BA46B4_0%,#9D5ACC_30%,#7D75E3_55%,#69A1F0_75%,#60C4F9_100%)] bg-clip-text text-lg font-semibold text-transparent lg:inline-block">
            {homeHero.slogan}
          </p>
        </div>

        <div>
          <HighlightsCarousel highlights={activeHighlights} />
        </div>

        <p className="inline-block bg-[linear-gradient(90deg,#BA46B4_0%,#9D5ACC_30%,#7D75E3_55%,#69A1F0_75%,#60C4F9_100%)] bg-clip-text text-lg font-semibold text-transparent lg:hidden">
          {homeHero.slogan}
        </p>
      </div>
    </section>
  );
}
