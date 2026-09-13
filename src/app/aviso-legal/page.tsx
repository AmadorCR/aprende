import type { Metadata } from "next";

import { PendingLegalPage } from "@/components/legal/PendingLegalPage";

export const metadata: Metadata = {
  title: "Aviso legal | Aprende Centro Multidisciplinar",
};

export default function AvisoLegalPageRoute() {
  return <PendingLegalPage title="Aviso legal" />;
}
