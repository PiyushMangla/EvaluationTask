import CallToAction from "@/components/sections/CallToAction";
import Footer from "@/components/layouts/Footer";
import AboutUs from "@/components/sections/AboutUs";
import ROIMeter from "@/components/sections/ROIMeter";
import BeforeAfterDraft from "@/components/sections/BeforeAfterDraft";
import WhyChooseUs from "@/components/sections/WhyChooseUs";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#040D13]">
      <div className="py-20"></div>
      <div className="px-20">
        <WhyChooseUs />
      </div>
      <BeforeAfterDraft />
      <div className="px-20">
        <ROIMeter />
        <AboutUs />
        <CallToAction />
        <Footer />
      </div>
    </div>
  );
}
