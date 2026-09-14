import type { Metadata } from "next";

import { PendingLegalPage } from "@/components/legal/PendingLegalPage";
import { legalPages } from "@/content/legal";

export const metadata: Metadata = {
  title: "Política de privacidad",
  description: "Información sobre privacidad de Aprende Centro Multidisciplinar.",
};

export default function PrivacidadPageRoute() {
  return <PendingLegalPage content={legalPages.privacy} />;
}
