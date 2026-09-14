import type { Metadata } from "next";

import { Hero } from "@/components/home/Hero";
import { HelpAreas } from "@/components/home/HelpAreas";
import { TeamIntro } from "@/components/home/TeamIntro";
import { CenterIntro } from "@/components/home/CenterIntro";
import { ContactCTA } from "@/components/home/ContactCTA";

export const metadata: Metadata = {
  title: {
    absolute: "Aprende Centro Multidisciplinar | Priego de Córdoba",
  },
  description:
    "Atención especializada en aprendizaje, comunicación y lenguaje, psicología, neuropsicología, evaluación y orientación en Priego de Córdoba.",
};

export default function Home() {
  return (
    <main>
      <Hero />
      <HelpAreas />
      <TeamIntro />
      <CenterIntro />
      <ContactCTA />
    </main>
  );
}
