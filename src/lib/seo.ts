import { siteConfig } from "@/content/site";

export const siteSeo = {
  siteName: siteConfig.fullName,
  shortName: siteConfig.name,
  defaultDescription:
    "Centro multidisciplinar en Priego de Córdoba especializado en aprendizaje, comunicación y lenguaje, psicología, neuropsicología, evaluación y orientación.",
  locale: "es_ES",
  favicon: "/images/branding/aprende-isotipo.jpg",
  publicRoutes: ["/", "/servicios", "/equipo", "/centro"] as const,
  legalRoutes: ["/aviso-legal", "/privacidad", "/cookies"] as const,
};

export function getSiteUrl() {
  const rawSiteUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();

  if (!rawSiteUrl) {
    return undefined;
  }

  return rawSiteUrl.replace(/\/+$/, "");
}

export function isSiteIndexable() {
  return process.env.NEXT_PUBLIC_SITE_INDEXABLE === "true";
}

export function getPublicUrl(path: string) {
  const siteUrl = getSiteUrl();

  if (!siteUrl) {
    return undefined;
  }

  return `${siteUrl}${path === "/" ? "" : path}`;
}
