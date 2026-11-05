import { AnimatedHero } from "@/components/ui/animated-hero-section-1";
import HeroSection from "../components/HeroSection";
import PopularDestinations from "../components/PopularDestinations";
import SpecialOffers from "../components/SpecialOffers";
import TravelGallery from "../components/TravelGallery";
import CarouselCards from "../components/ui/carousel-cards";
import Marquee from "../components/ui/marquee";
import WhyChooseUs from "../components/WhyChooseUs";

export default function Home() {
  return (
    <main>
      <AnimatedHero />
      <PopularDestinations />

      <WhyChooseUs />


      <SpecialOffers />
      <TravelGallery />

      <CarouselCards />

      <Marquee />

    </main>
  );
}