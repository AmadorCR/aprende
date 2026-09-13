import Image from "next/image";
import Link from "next/link";

import { siteConfig } from "@/content/site";
import { createWhatsAppHref } from "@/lib/contact";

import { MobileNavigation } from "./MobileNavigation";

export const navigationItems = [
  { label: "Inicio", href: "/" },
  { label: "Servicios", href: "/servicios" },
  { label: "Equipo", href: "/equipo" },
  { label: "El centro", href: "/centro" },
] as const;

export function Header() {
  const whatsappHref = createWhatsAppHref(siteConfig.whatsapp);
  const whatsappLabel = siteConfig.homeHero.primaryCTA.label;

  return (
    <header className="sticky top-0 z-50 border-b border-[color:var(--color-border)] bg-white/95 backdrop-blur-sm">
      <div className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="flex min-w-0 items-center gap-3 rounded-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[color:var(--color-brand-purple)]"
          aria-label={`${siteConfig.fullName} - Inicio`}
        >
          <Image
            src="/images/branding/aprende-isotipo.jpg"
            alt=""
            width={44}
            height={44}
            className="h-11 w-11 shrink-0 rounded-full object-cover"
            priority
          />
          <Image
            src="/images/branding/aprende-logotipo.png"
            alt={siteConfig.name}
            width={150}
            height={45}
            className="h-9 w-auto max-w-[8.5rem] object-contain sm:max-w-[9.5rem]"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-7 md:flex" aria-label="Navegación principal">
          {navigationItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-md text-sm font-medium text-[color:var(--color-muted)] transition hover:text-[color:var(--color-ink)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[color:var(--color-brand-purple)] motion-reduce:transition-none"
            >
              {item.label}
            </Link>
          ))}
          <a
            href={whatsappHref}
            className="rounded-full bg-[color:var(--color-brand-purple-strong)] px-5 py-3 text-sm font-semibold text-white shadow-[0_10px_25px_rgba(157,90,204,0.18)] transition hover:bg-[color:var(--color-brand-pink-strong)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[color:var(--color-brand-purple)] motion-reduce:transition-none"
          >
            {whatsappLabel}
          </a>
        </nav>

        <MobileNavigation
          items={navigationItems}
          whatsappHref={whatsappHref}
          whatsappLabel={whatsappLabel}
        />
      </div>
    </header>
  );
}
