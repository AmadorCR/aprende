export function createWhatsAppHref(phone: string): string {
  const number = phone.replace(/\D/g, "");

  return `https://wa.me/${number}`;
}

export function createTelHref(phone: string): string {
  const number = phone.replace(/\s/g, "");

  return `tel:${number}`;
}

export function createMailtoHref(email: string): string {
  return `mailto:${email}`;
}
