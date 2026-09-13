import type { Metadata } from "next";

import { PendingLegalPage } from "@/components/legal/PendingLegalPage";

export const metadata: Metadata = {
  title: "Privacidad | Aprende Centro Multidisciplinar",
};

export default function PrivacidadPageRoute() {
  return <PendingLegalPage title="Privacidad" />;
}
