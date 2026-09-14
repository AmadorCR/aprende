import type { Metadata } from "next";

import { ServicesPage } from "@/components/services/ServicesPage";

export const metadata: Metadata = {
  title: "Servicios",
  description:
    "Conoce las áreas y servicios de Aprende Centro Multidisciplinar en Priego de Córdoba: aprendizaje, comunicación y lenguaje, psicología, neuropsicología y evaluación.",
};

export default function ServiciosPageRoute() {
  return <ServicesPage />;
}
