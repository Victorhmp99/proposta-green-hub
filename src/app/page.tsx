import { Hero } from "@/components/Hero";
import {
  Origin,
  Problem,
  Difference,
  ForestMethod,
  Team,
  AnchorTeam,
  AnchorSecretary,
  CRC,
  Cases,
  Plans,
  EstruturaGreen,
  Onboarding,
  Closing,
  GreenClub,
} from "@/components/Sections";

export default function Home() {
  return (
    <main className="flex flex-col">
      <Hero />
      <Origin />
      <Problem />
      <Difference />
      <ForestMethod />
      <Team />
      <AnchorTeam />
      <AnchorSecretary />
      <CRC />
      <Cases />
      <Plans />
      <EstruturaGreen />
      <Onboarding />
      <Closing />
      <GreenClub />
      <footer className="border-t border-mint/10 px-6 py-10 text-center text-xs text-cream/40">
        Green Hub © 2026 — Hub de Soluções para Clínicas de Saúde
      </footer>
    </main>
  );
}
