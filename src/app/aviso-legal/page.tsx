import type { Metadata } from "next";

import { PendingLegalPage } from "@/components/legal/PendingLegalPage";
import { legalPages } from "@/content/legal";

export const metadata: Metadata = {
  title: "Aviso legal",
  description: "Información legal básica de Aprende Centro Multidisciplinar.",
};

export default function AvisoLegalPageRoute() {
  return <PendingLegalPage content={legalPages.legalNotice} />;
}
