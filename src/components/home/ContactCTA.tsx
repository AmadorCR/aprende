import Image from "next/image";

import { siteConfig } from "@/content/site";
import { createMailtoHref, createWhatsAppHref } from "@/lib/contact";

const contactIcons = {
  email: "/icons/contact/email.svg",
  whatsapp: "/icons/contact/whatsapp.svg",
} as const;

type ContactIconName = keyof typeof contactIcons;

function ContactIcon({
  className = "h-5 w-5",
  name,
}: {
  className?: string;
  name: ContactIconName;
}) {
  return (
    <Image
      src={contactIcons[name]}
      alt=""
      aria-hidden="true"
      className={`shrink-0 object-contain ${className}`}
      width="20"
      height="20"
    />
  );
}

export function ContactCTA() {
  const { email, homeContact, whatsapp } = siteConfig;
  const whatsappHref = createWhatsAppHref(whatsapp);
  const emailHref = createMailtoHref(email);

  return (
    <section
      className="bg-white px-4 py-18 sm:px-6 sm:py-22 lg:px-8 lg:py-26"
      aria-labelledby="contact-title"
    >
      <div className="mx-auto w-full max-w-7xl">
        <div className="overflow-hidden rounded-2xl border border-[color:var(--color-border-strong)] bg-[linear-gradient(135deg,rgba(186,70,180,0.08)_0%,rgba(255,255,255,0.96)_46%,rgba(96,196,249,0.1)_100%)] px-5 py-8 sm:px-8 sm:py-10 lg:px-12 lg:py-12">
          <div className="mx-auto max-w-3xl text-center">
            <h2
              id="contact-title"
              className="text-3xl font-bold leading-tight text-[color:var(--color-ink)] sm:text-4xl"
            >
              {homeContact.title}
            </h2>
            <p className="mt-5 text-base leading-8 text-[color:var(--color-muted)] sm:text-lg">
              {homeContact.description}
            </p>

            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <a
                href={whatsappHref}
                className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-[color:var(--color-brand-purple-strong)] px-6 py-3 text-center text-base font-semibold text-white shadow-[0_14px_30px_rgba(157,90,204,0.18)] transition hover:bg-[color:var(--color-brand-pink-strong)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[color:var(--color-brand-purple)] motion-reduce:transition-none sm:w-auto"
              >
                <ContactIcon name="whatsapp" />
                {homeContact.primaryCTA.label}
              </a>
              <a
                href={emailHref}
                className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full border border-[color:var(--color-border-strong)] bg-white px-6 py-3 text-center text-base font-semibold text-[color:var(--color-ink)] transition hover:border-[color:var(--color-brand-purple)] hover:text-[color:var(--color-brand-purple-strong)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[color:var(--color-brand-purple)] motion-reduce:transition-none sm:w-auto"
              >
                <ContactIcon name="email" />
                {homeContact.secondaryCTA.label}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
