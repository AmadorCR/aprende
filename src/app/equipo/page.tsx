import type { Metadata } from "next";

import { TeamPage } from "@/components/team/TeamPage";

export const metadata: Metadata = {
  title: "Equipo",
  description:
    "Conoce al equipo de Aprende Centro Multidisciplinar en Priego de Córdoba y las áreas profesionales desde las que acompañamos a cada persona.",
};

export default function EquipoPageRoute() {
  return <TeamPage />;
}
