import type { Metadata } from "next";

import { PendingLegalPage } from "@/components/legal/PendingLegalPage";
import { legalPages } from "@/content/legal";

export const metadata: Metadata = {
  title: "Politica de cookies | Aprende Centro Multidisciplinar",
};

export default function CookiesPageRoute() {
  return <PendingLegalPage content={legalPages.cookies} />;
}
