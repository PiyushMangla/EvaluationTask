import BrandLogo from "../ui/BrandLogo";

const Header = () => {
    return (
        <header className="relative overflow-hidden mt-5 rounded-2xl border border-white/10 bg-[#059AF433] backdrop-blur flex justify-between items-center px-6 py-4">
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

            <button className="bg-gradient-to-r from-[#2EA8FF] to-[#178AFF] text-white px-6 py-3 rounded-xl font-medium hover:from-[#1F9CF7] hover:to-[#0E85E6] transition-colors shadow-[0_8px_24px_rgba(5,154,244,0.25)] cursor-pointer">
                Start Free Trial
            </button>
        </header>
    );
};

export default Header;