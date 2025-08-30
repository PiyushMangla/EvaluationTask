import { BlurFade } from "../magicui/blur-fade";
import BrandLogo from "../ui/BrandLogo";

const Header = () => {
    return (
        <BlurFade inView direction="left" className="relative overflow-hidden mt-5 rounded-2xl border border-white/10 bg-[#059AF433] backdrop-blur flex justify-between items-center px-6 py-4">
            <div className="relative flex items-center">
                <BrandLogo className="h-6 md:h-7 w-auto" />
            </div>

            <nav className="hidden md:flex items-center gap-8">
                <a
                    href="#"
                    className="text-[#C4C1C8] hover:text-white transition-colors font-medium"
                >
                    Features
                </a>
                <a
                    href="#"
                    className="text-[#C4C1C8] hover:text-white transition-colors font-medium"
                >
                    Pricing
                </a>
                <a
                    href="#"
                    className="text-[#C4C1C8] hover:text-white transition-colors font-medium"
                >
                    Testimonials
                </a>
                <a
                    href="#"
                    className="text-[#C4C1C8] hover:text-white transition-colors font-medium"
                >
                    Contact
                </a>
            </nav>

            <button className="bg-gradient-to-r from-[#2EA8FF] to-[#178AFF] text-white px-6 py-3 rounded-xl font-medium transition duration-300 ease-in-out hover:scale-105 hover:shadow-lg hover:bg-[#0488d6] shadow-[0_8px_24px_rgba(5,154,244,0.25)] cursor-pointer">
                Start Free Trial
            </button>
        </BlurFade>
    );
};

export default Header;