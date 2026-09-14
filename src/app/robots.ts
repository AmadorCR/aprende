import type { MetadataRoute } from "next";

import { getPublicUrl, isSiteIndexable } from "@/lib/seo";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  const sitemapUrl = getPublicUrl("/sitemap.xml");

  if (!isSiteIndexable()) {
    return {
      rules: {
        userAgent: "*",
        disallow: "/",
      },
      sitemap: sitemapUrl,
    };
  }

  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: sitemapUrl,
  };
}
