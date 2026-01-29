import HeroSlider from "@/components/HeroSlider";
import NewsTicker from "@/components/NewsTicker";
import UdyamiStories from "@/components/UdyamiStories";
import Frameworks from "@/components/Frameworks";
import Testimonials from "@/components/Testimonials";
import Partners from "@/components/Partners";

export default function Home() {
  return (
    <>
      {/* Hero Section with Slider */}
      <HeroSlider />

      {/* News Ticker */}
      <NewsTicker />

      {/* Udyami Stories Section */}
      <UdyamiStories />

      {/* Frameworks Section */}
      <Frameworks />

      {/* Testimonials Section */}
      <Testimonials />

      {/* Partners Section */}
      <Partners />
    </>
  );
}
