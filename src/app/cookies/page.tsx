import type { Metadata } from "next";

import { PendingLegalPage } from "@/components/legal/PendingLegalPage";

export const metadata: Metadata = {
  title: "Cookies | Aprende Centro Multidisciplinar",
};

export default function CookiesPageRoute() {
  return <PendingLegalPage title="Cookies" />;
}
