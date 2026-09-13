"use client";

import Link from "next/link";
import { useState } from "react";

type NavigationItem = {
  label: string;
  href: string;
};

type MobileNavigationProps = {
  items: readonly NavigationItem[];
  whatsappHref: string;
  whatsappLabel: string;
};

export function MobileNavigation({
  items,
  whatsappHref,
  whatsappLabel,
}: MobileNavigationProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        type="button"
        className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-full border border-[color:var(--color-border)] bg-white text-[color:var(--color-ink)] transition hover:border-[color:var(--color-brand-purple)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[color:var(--color-brand-purple)] motion-reduce:transition-none"
        aria-label={isOpen ? "Cerrar navegación" : "Abrir navegación"}
        aria-expanded={isOpen}
        aria-controls="mobile-navigation"
        onClick={() => setIsOpen((current) => !current)}
      >
        <span className="flex h-4 w-5 flex-col justify-between" aria-hidden="true">
          <span className="h-0.5 w-full rounded-full bg-current" />
          <span className="h-0.5 w-full rounded-full bg-current" />
          <span className="h-0.5 w-full rounded-full bg-current" />
        </span>
      </button>

      {isOpen ? (
        <nav
          id="mobile-navigation"
          aria-label="Navegación principal"
          className="fixed inset-x-4 top-24 rounded-2xl border border-[color:var(--color-border)] bg-white p-3 shadow-[0_18px_45px_rgba(23,23,23,0.08)]"
        >
          <ul className="flex flex-col gap-1">
            {items.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="block rounded-xl px-4 py-3 text-sm font-medium text-[color:var(--color-ink)] transition hover:bg-[color:var(--color-surface)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--color-brand-purple)] motion-reduce:transition-none"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li className="pt-2">
              <a
                href={whatsappHref}
                className="block rounded-full bg-[color:var(--color-brand-purple-strong)] px-4 py-3 text-center text-sm font-semibold text-white transition hover:bg-[color:var(--color-brand-pink-strong)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--color-brand-purple)] motion-reduce:transition-none"
                onClick={() => setIsOpen(false)}
              >
                {whatsappLabel}
              </a>
            </li>
          </ul>
        </nav>
      ) : null}
    </div>
  );
}
