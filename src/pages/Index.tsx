import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { LandmarkSection } from "@/components/LandmarkSection";
import { ResidentialSection } from "@/components/ResidentialSection";
import { LeadershipSection } from "@/components/LeadershipSection";
import { VisionSection } from "@/components/VisionSection";
import { WhyChooseSection } from "@/components/WhyChooseSection";
import { CSRSection } from "@/components/CSRSection";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";
import { EnquireSidebar } from "@/components/EnquireSidebar";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <EnquireSidebar />
      <main className="pt-10">
        {/* <HeroSection /> */}
        <AboutSection />
        <LandmarkSection />
        <LeadershipSection />
        {/* <VisionSection />
        <WhyChooseSection />
        <CSRSection /> */}
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
