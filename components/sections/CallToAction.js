import Image from "next/image"
import CryptoYield from "@/assets/images/Crypto Yield.png"
import DemoButtons from "../ui/DemoButtons"
import { TextAnimate } from "../magicui/text-animate"
import { BlurFade } from "../magicui/blur-fade"

const CallToAction = () => {
    return (
        <div>
            <div className="py-6 md:py-8 lg:py-14 text-center text-gray-primary">
                <TextAnimate once className="text-3xl md:text-4xl lg:text-5xl font-medium">500+ Firms. Zero Regrets.</TextAnimate>
            </div>
            <BlurFade delay={0.5} inView className="bg-[#FFFFFF08] rounded-2xl lg:rounded-4xl flex flex-col md:flex-row justify-between items-center action-card">
                <div className="flex flex-col p-4 lg:pl-20 md:max-w-1/2 lg:max-w-3/5 justify-between gap-4 lg:gap-8">
                    <TextAnimate once delay={0.75} animation="slideRight" className="m-0 font-medium text-2xl lg:text-5xl text-gray-primary leading-[120%]">Ready to Reclaim Your Nights and Weekends?</TextAnimate>
                    <TextAnimate once delay={1} animation="slideRight" className="m-0 font-normal text-lg lg:text-2xl text-[#C4C1C8] leading-[150%] w-10/12">
                        {"Forward-thinking firms have already switched. Don't let competitors outpace you."}
                    </TextAnimate>
                    <DemoButtons />
                </div>
                <div>
                    <Image src={CryptoYield} alt="crypto-yield" className="object-cover" />
                </div>
            </BlurFade>
        </div>
    )
}

export default CallToAction