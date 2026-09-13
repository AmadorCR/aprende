"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import type { Highlight } from "@/content/highlights";

type HighlightsCarouselProps = {
  highlights: readonly Highlight[];
};

export function HighlightsCarousel({ highlights }: HighlightsCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const hasMultipleHighlights = highlights.length > 1;
  const activeHighlight = highlights[activeIndex];

  if (!activeHighlight) {
    return <HighlightsFallback />;
  }

  function goToPrevious() {
    setActiveIndex((current) =>
      current === 0 ? highlights.length - 1 : current - 1,
    );
  }

  function goToNext() {
    setActiveIndex((current) =>
      current === highlights.length - 1 ? 0 : current + 1,
    );
  }

  return (
    <aside
      className="overflow-hidden rounded-[1.75rem] border border-[color:var(--color-border)] bg-white shadow-[0_18px_45px_rgba(23,23,23,0.06)]"
      aria-label="Destacados de Aprende"
    >
      <div className="relative aspect-[16/10] bg-[color:var(--color-surface)]">
        <Image
          src={activeHighlight.image.src}
          alt={activeHighlight.image.alt}
          fill
          className="object-cover"
          sizes="(min-width: 1024px) 42vw, 100vw"
          priority
        />
      </div>

      <div className="p-5 sm:p-6">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[color:var(--color-brand-purple-strong)]">
          Destacado
        </p>
        <h2 className="mt-3 text-xl font-semibold leading-tight text-[color:var(--color-ink)]">
          {activeHighlight.title}
        </h2>
        <p className="mt-3 text-sm leading-6 text-[color:var(--color-muted)]">
          {activeHighlight.description}
        </p>

        <div className="mt-5 flex items-center justify-between gap-4">
          {activeHighlight.href ? (
            <Link
              href={activeHighlight.href}
              className="rounded-md text-sm font-semibold text-[color:var(--color-brand-purple-strong)] underline-offset-4 transition hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[color:var(--color-brand-purple)] motion-reduce:transition-none"
            >
              Más información
            </Link>
          ) : (
            <span aria-hidden="true" />
          )}

          {hasMultipleHighlights ? (
            <div className="flex items-center gap-2">
              <button
                type="button"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[color:var(--color-border)] text-[color:var(--color-ink)] transition hover:border-[color:var(--color-brand-purple)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[color:var(--color-brand-purple)] motion-reduce:transition-none"
                aria-label="Destacado anterior"
                onClick={goToPrevious}
              >
                <span aria-hidden="true">‹</span>
              </button>
              <button
                type="button"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[color:var(--color-border)] text-[color:var(--color-ink)] transition hover:border-[color:var(--color-brand-purple)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[color:var(--color-brand-purple)] motion-reduce:transition-none"
                aria-label="Siguiente destacado"
                onClick={goToNext}
              >
                <span aria-hidden="true">›</span>
              </button>
            </div>
          ) : null}
        </div>

        {hasMultipleHighlights ? (
          <div className="mt-5 flex gap-2" aria-label="Seleccionar destacado">
            {highlights.map((highlight, index) => (
              <button
                key={highlight.id}
                type="button"
                className="h-2.5 rounded-full transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[color:var(--color-brand-purple)] motion-reduce:transition-none data-[active=true]:w-7 data-[active=false]:w-2.5 data-[active=true]:bg-[color:var(--color-brand-purple-strong)] data-[active=false]:bg-[color:var(--color-border-strong)]"
                aria-label={`Mostrar destacado ${index + 1} de ${highlights.length}`}
                aria-current={index === activeIndex ? "true" : undefined}
                data-active={index === activeIndex}
                onClick={() => setActiveIndex(index)}
              />
            ))}
          </div>
        ) : null}
      </div>
    </aside>
  );
}

function HighlightsFallback() {
  return (
    <div
      className="relative aspect-[4/5] w-full overflow-hidden rounded-[1.75rem] border border-[color:var(--color-border)] bg-[color:var(--color-surface)] sm:aspect-[5/4] lg:aspect-[4/5]"
      aria-label="Espacio reservado para destacados o fotografía real del centro"
      role="img"
    >
      <div className="absolute inset-x-8 top-8 h-1 rounded-full bg-[linear-gradient(90deg,#BA46B4_0%,#9D5ACC_30%,#7D75E3_55%,#69A1F0_75%,#60C4F9_100%)]" />
      <div className="flex h-full items-center justify-center p-8 text-center">
        <p className="max-w-xs text-sm font-medium leading-6 text-[color:var(--color-muted)]">
          Destacados o fotografía real pendientes
        </p>
      </div>
    </div>
  );
}
