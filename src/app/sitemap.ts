import type { MetadataRoute } from "next";

import { getPublicUrl, isSiteIndexable, siteSeo } from "@/lib/seo";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  if (!isSiteIndexable()) {
    return [];
  }

  const routes = [...siteSeo.publicRoutes, ...siteSeo.legalRoutes];

  return routes.flatMap((route) => {
    const url = getPublicUrl(route);

    if (!url) {
      return [];
    }

    const isLegalRoute = siteSeo.legalRoutes.includes(
      route as (typeof siteSeo.legalRoutes)[number],
    );

    return {
      url,
      lastModified: new Date(),
      changeFrequency: route === "/" ? "monthly" : "yearly",
      priority: route === "/" ? 1 : isLegalRoute ? 0.2 : 0.7,
    };
  });
}
