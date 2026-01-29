import HeroSlider from "@/components/HeroSlider";
import NewsTicker from "@/components/NewsTicker";
import UdyamiStories from "@/components/UdyamiStories";
import RecentHappenings from "@/components/RecentHappenings";
import Frameworks from "@/components/Frameworks";
import Testimonials from "@/components/Testimonials";
import TogetherWeRise from "@/components/TogetherWeRise";
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

      {/* Recent Happenings Section */}
      <RecentHappenings />

      {/* Frameworks Section */}
      <Frameworks />

      {/* Testimonials Section */}
      <Testimonials />

      {/* Together We Rise - Social Media */}
      <TogetherWeRise />

      {/* Partners Section */}
      <Partners />
    </>
  );
}
