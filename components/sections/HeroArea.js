import Hero from "./Hero";
import Statistics from "./Statistics";
import Header from "@/components/layouts/Header";
import BackgroundEffects from "../ui/BackgroundEffects";
import Bigearth from "@/assets/images/bigearth.png";
import Image from "next/image";

const HeroArea = () => {
    return (
        <section className="relative overflow-hidden px-4 md:px-10 lg:px-20">
            <BackgroundEffects />
            <Header />
            <Hero />
            <Statistics />
            <Image
                src={Bigearth}
                alt=""
                aria-hidden
                width={1314}
                height={1254}
                className="absolute top-[768px] left-1/2 -translate-x-1/2 w-[1314px] h-[1254px] max-w-none hidden md:block opacity-70 [mask-image:linear-gradient(to_bottom,black_85%,transparent_100%)] [mask-repeat:no-repeat] [mask-size:100%]"
            />
        </section>
    );
};

export default HeroArea;