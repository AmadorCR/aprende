import type { Metadata } from "next";

import { PendingLegalPage } from "@/components/legal/PendingLegalPage";
import { legalPages } from "@/content/legal";

export const metadata: Metadata = {
  title: "Política de cookies",
  description: "Información sobre cookies de Aprende Centro Multidisciplinar.",
};

export default function CookiesPageRoute() {
  return <PendingLegalPage content={legalPages.cookies} />;
}
