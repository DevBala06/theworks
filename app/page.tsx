import HeroSection from "@/app/components/HeroSection";
import AboutSection from "./components/AboutSection";
import PortfolioSection from "./components/PortfolioSection";
import BlogSection from "./components/BlogSection";
import TeamSection from "./components/TeamSection";
import ServicesSection from "./components/ServicesSection";

export default function Home() {
  return (
    <div className="bg-[#F5F5F5] overflow-hidden">
      <HeroSection />
      <AboutSection />
      <PortfolioSection />
      <ServicesSection />
      <TeamSection />
      <BlogSection />
    </div>
  );
}