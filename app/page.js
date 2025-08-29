import Image from "next/image";
import Logo from "@/assets/images/logo.png"
import FacebookIcon from "@/assets/images/facebook-icon.png"
import InstagramIcon from "@/assets/images/instagram.png"
import TwitterIcon from "@/assets/images/twitter-icon.png"
import LinkedinIcon from "@/assets/images/linkedin-icon.png"
import Footer from "@/components/layouts/Footer";
import CallToAction from "@/components/sections/CallToAction";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#040D13] px-18">
      <div className="pt-10"></div>
      <CallToAction />
      <Footer />
    </div>
  );
}
