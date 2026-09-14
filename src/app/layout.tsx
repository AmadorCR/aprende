import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { getSiteUrl, isSiteIndexable, siteSeo } from "@/lib/seo";

import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const siteUrl = getSiteUrl();

export const metadata: Metadata = {
  metadataBase: siteUrl ? new URL(siteUrl) : undefined,
  title: {
    default: "Aprende Centro Multidisciplinar | Priego de Córdoba",
    template: `%s | ${siteSeo.siteName}`,
  },
  applicationName: siteSeo.shortName,
  description: siteSeo.defaultDescription,
  robots: isSiteIndexable()
    ? {
        index: true,
        follow: true,
      }
    : {
        index: false,
        follow: false,
      },
  icons: {
    icon: siteSeo.favicon,
    shortcut: siteSeo.favicon,
    apple: siteSeo.favicon,
  },
  openGraph: {
    siteName: siteSeo.siteName,
    title: "Aprende Centro Multidisciplinar | Priego de Córdoba",
    description: siteSeo.defaultDescription,
    locale: siteSeo.locale,
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Aprende Centro Multidisciplinar | Priego de Córdoba",
    description: siteSeo.defaultDescription,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es" className={`${inter.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col">
        <Header />
        <div className="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
