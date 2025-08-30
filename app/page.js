import CallToAction from "@/components/sections/CallToAction";
import Footer from "@/components/layouts/Footer";
import AboutUs from "@/components/sections/AboutUs";
import ROIMeter from "@/components/sections/ROIMeter";
import BeforeAfterDraft from "@/components/sections/BeforeAfterDraft";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Discovery from "@/components/sections/Discovery";
import DraftingCost from "@/components/sections/DraftingCost";
import HeroArea from "@/components/sections/HeroArea";

export default function Home() {
  return (
    <div className="relative bg-[#040D13]">
      <HeroArea />
      <div className="px-4 md:px-10 lg:px-20">
        <DraftingCost />
        <Discovery />
        <WhyChooseUs />
      </div>
      <BeforeAfterDraft />
      <div className="px-4 md:px-10 lg:px-20">
        <ROIMeter />
        <AboutUs />
        <CallToAction />
        <Footer />
      </div>
    </div>
  );
}
