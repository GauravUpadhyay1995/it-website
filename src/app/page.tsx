import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { IntegrationsSection } from "@/components/sections/IntegrationsSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { FeaturesSection } from "@/components/sections/FeaturesSection";
import { PortfolioSection } from "@/components/sections/PortfolioSection";
import { ApproachSection } from "@/components/sections/ApproachSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { PricingSection } from "@/components/sections/PricingSection";
import { BlogSection } from "@/components/sections/BlogSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { CtaSection } from "@/components/sections/CtaSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0D1017] text-white flex flex-col selection:bg-[#5A9FFF]/30 selection:text-[#5DDCF6]">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <IntegrationsSection />
        <ServicesSection />
        <FeaturesSection />
        <PortfolioSection />
        <ApproachSection />
        <TestimonialsSection />
        <PricingSection />
        <BlogSection />
        <FaqSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
}
