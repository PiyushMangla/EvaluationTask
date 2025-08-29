import CallToAction from "@/components/sections/CallToAction";
import Footer from "@/components/layouts/Footer";
import Image from "next/image";
import AboutUs from "@/components/sections/AboutUs";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#040D13] px-18">
      <div className="pt-20"></div>
      <AboutUs />
      <div className="py-14 text-center text-gray-primary">
        <p className="text-5xl font-medium">500+ Firms. Zero Regrets.</p>
      </div>
      <CallToAction />
      <Footer />
    </div>
  );
}
