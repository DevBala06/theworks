import AboutSection from "./components/AboutSection";
import BlogSection from "./components/BlogSection";
import HeroSection from "./components/HeroSection";
import Navigation from "./components/Navigation";
import PortfolioSection from "./components/PortfolioSection";
import ServicesSection from "./components/ServicesSection";
import TeamSection from "./components/TeamSection";

export default function Home() {
  return (
    <div className="bg-[#F5F5F5] overflow-hidden">
      <nav>
        <Navigation />
      </nav>

      <section id="home"><HeroSection /></section>
      <section id="about"><AboutSection /></section>
      <section id="portfolio"><PortfolioSection /></section>
      <section id="service"><ServicesSection /></section>
      <section id="team"><TeamSection /></section>
      <section id="blog"><BlogSection /></section>
    </div>
  );
}
