import type { Metadata } from "next";

import { PendingLegalPage } from "@/components/legal/PendingLegalPage";
import { legalPages } from "@/content/legal";

export const metadata: Metadata = {
  title: "Politica de privacidad | Aprende Centro Multidisciplinar",
};

export default function PrivacidadPageRoute() {
  return <PendingLegalPage content={legalPages.privacy} />;
}
