import Image from "next/image";
import Link from "next/link";

import { siteConfig } from "@/content/site";
import { createMailtoHref, createTelHref } from "@/lib/contact";

import { navigationItems } from "./Header";

const legalLinks = [
  { label: "Aviso legal", href: "/aviso-legal" },
  { label: "Privacidad", href: "/privacidad" },
  { label: "Cookies", href: "/cookies" },
] as const;

const iconClassName = "h-5 w-5 shrink-0 opacity-80";

export function Footer() {
  const currentYear = new Date().getFullYear();
  const telHref = createTelHref(siteConfig.phone);
  const emailHref = createMailtoHref(siteConfig.email);
  const addressText = siteConfig.address.lines.join(", ");

  return (
    <footer className="border-t border-[color:var(--color-border)] bg-[color:var(--color-surface)]">
      <div className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.35fr_0.85fr_1.15fr_0.85fr]">
          <div className="max-w-sm">
            <Link
              href="/"
              className="inline-flex items-center gap-3 rounded-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[color:var(--color-brand-purple)]"
              aria-label={`${siteConfig.fullName} - Inicio`}
            >
              <Image
                src="/images/branding/aprende-isotipo.jpg"
                alt=""
                width={42}
                height={42}
                className="h-10 w-10 rounded-full object-cover"
              />
              <Image
                src="/images/branding/aprende-logotipo.png"
                alt={siteConfig.name}
                width={140}
                height={42}
                className="h-8 w-auto max-w-[8.75rem] object-contain"
              />
            </Link>
            <p className="mt-4 text-sm font-semibold text-[color:var(--color-ink)]">
              Centro Multidisciplinar
            </p>
            <p className="mt-2 text-sm leading-6 text-[color:var(--color-muted)]">
              {siteConfig.slogan}
            </p>
          </div>

          <nav aria-label="Navegaci&oacute;n del pie de p&aacute;gina">
            <p className="text-sm font-semibold text-[color:var(--color-ink)]">Navegaci&oacute;n</p>
            <ul className="mt-4 space-y-2">
              {navigationItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="inline-flex min-h-8 items-center rounded-md text-sm text-[color:var(--color-muted)] transition hover:text-[color:var(--color-brand-purple-strong)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[color:var(--color-brand-purple)] motion-reduce:transition-none"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <address className="not-italic">
            <p className="text-sm font-semibold text-[color:var(--color-ink)]">Contacto</p>
            <ul className="mt-4 space-y-3 text-sm text-[color:var(--color-muted)]">
              <li>
                <a
                  href={telHref}
                  className="inline-flex min-h-8 items-center gap-3 rounded-md transition hover:text-[color:var(--color-brand-purple-strong)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[color:var(--color-brand-purple)] motion-reduce:transition-none"
                >
                  <Image src="/icons/contact/phone.svg" alt="" width={20} height={20} className={iconClassName} />
                  <span>{siteConfig.phone}</span>
                </a>
              </li>
              <li>
                <a
                  href={emailHref}
                  className="inline-flex min-h-8 items-center gap-3 rounded-md transition hover:text-[color:var(--color-brand-purple-strong)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[color:var(--color-brand-purple)] motion-reduce:transition-none"
                >
                  <Image src="/icons/contact/email.svg" alt="" width={20} height={20} className={iconClassName} />
                  <span>{siteConfig.email}</span>
                </a>
              </li>
              <li className="flex gap-3">
                <Image
                  src="/icons/contact/google-maps.svg"
                  alt=""
                  width={20}
                  height={20}
                  className={`${iconClassName} mt-0.5`}
                />
                <span>{addressText}</span>
              </li>
            </ul>
          </address>

          <nav aria-label="Redes sociales">
            <p className="text-sm font-semibold text-[color:var(--color-ink)]">Redes</p>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href={siteConfig.socialNetworks.instagram.url}
                  className="inline-flex min-h-8 items-center gap-3 rounded-md text-sm text-[color:var(--color-muted)] transition hover:text-[color:var(--color-brand-purple-strong)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[color:var(--color-brand-purple)] motion-reduce:transition-none"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Image src="/icons/contact/instagram.svg" alt="" width={20} height={20} className={iconClassName} />
                  <span>Instagram</span>
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.socialNetworks.tiktok.url}
                  className="inline-flex min-h-8 items-center gap-3 rounded-md text-sm text-[color:var(--color-muted)] transition hover:text-[color:var(--color-brand-purple-strong)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[color:var(--color-brand-purple)] motion-reduce:transition-none"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Image src="/icons/contact/tiktok.svg" alt="" width={20} height={20} className={iconClassName} />
                  <span>TikTok</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-[color:var(--color-border)] pt-6 text-sm text-[color:var(--color-muted)] sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {currentYear} {siteConfig.fullName}</p>
          <nav aria-label="Informaci&oacute;n legal">
            <ul className="flex flex-wrap gap-x-5 gap-y-2">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="inline-flex min-h-8 items-center rounded-md transition hover:text-[color:var(--color-brand-purple-strong)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[color:var(--color-brand-purple)] motion-reduce:transition-none"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}
