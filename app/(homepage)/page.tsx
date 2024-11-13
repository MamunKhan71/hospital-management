import { Navbar } from "@/components/Navbar";
import { HeroSection } from "./_components/HeroSection";
import Doctors from "./_components/Doctors";
import Departments from "./_components/Departments";
import HomepageBanner from "./_components/HomepageBanner";
import OurServices from "./_components/OurServices";
import Articles from "./_components/Articles";
import Testimonials from "./_components/Testimonials";
import CorporatPartner from "./_components/CorporatPartner";
import QuickService from "./_components/QuickService";

export default function Home() {
  return (
    <div className="space-y-4">
      <div className="h-full md:h-screen">
        <HeroSection />
      </div>
      <div className="space-y-28 pt-20">
        <QuickService />
        <Doctors />
        <Departments />
        <HomepageBanner />
        <OurServices />
        <Articles />
        <Testimonials />
        <CorporatPartner />
      </div>
    </div>
  );
}
