import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import MapPreview from "@/components/MapPreview";
import ServicesGrid from "@/components/ServicesGrid";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <MapPreview />
      <ServicesGrid />
      <Footer />
    </div>
  );
};

export default Index;
