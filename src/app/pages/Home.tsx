import { HeroCarousel } from "../components/HeroCarousel";
import { AboutSection } from "../components/AboutSection";
import { WhyHirewiseSection } from "../components/WhyHirewiseSection";
import { ClientsSection } from "../components/ClientsSection";
import { ServicesSection } from "../components/ServicesSection";

export function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Add top padding to account for fixed navbar */}
      <main className="pt-20">
        <HeroCarousel />
        <AboutSection />
        <WhyHirewiseSection />
        <ClientsSection />
        <ServicesSection />
      </main>
    </div>
  );
}