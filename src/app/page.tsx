import { Hero } from "@/components/home/Hero";
import { HelpAreas } from "@/components/home/HelpAreas";
import { TeamIntro } from "@/components/home/TeamIntro";
import { CenterIntro } from "@/components/home/CenterIntro";
import { ContactCTA } from "@/components/home/ContactCTA";

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
