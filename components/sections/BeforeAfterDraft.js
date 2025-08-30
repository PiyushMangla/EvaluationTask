import DraftGradient from "@/assets/images/draft-gradient.png"
import DraftCard from "@/assets/images/draft-card.png"
import Image from "next/image"
import { NumberTicker } from "@/components/magicui/number-ticker";
import { TextAnimate } from "../magicui/text-animate";
import { BlurFade } from "../magicui/blur-fade";


const BeforeAfterDraft = () => {
    return (
        <div className="w-full pb-8 bg-no-repeat bg-cover px-4 md:px-10 lg:px-20 relative">
            <Image src={DraftGradient} className="absolute object-cover left-0 top-0 w-full" alt="drift-gradient" />
            <div className="text-center pt-8 md:pt-12 lg:pt-24 pb-4 lg:pb-8">
                <TextAnimate once animation="blurInDown" className="font-semibold text-3xl md:text-4xl lg:text-5xl leading-[135%] text-[#F6F4FA]">The Math Is Undeniable</TextAnimate>
                <TextAnimate once animation="blurInDown" delay={0.5} className="text-[#C4C1C8] md:text-lg pt-3 lg:pt-5">For a 10-attorney firm handling 200 cases/year:</TextAnimate>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
                <BlurFade inView direction="down" delay={0.5} className="rounded-2xl relative draft-card">
                    <Image src={DraftCard} alt="before-drift" className="object-cover w-full" />
                    <div className="w-full h-full absolute top-0 py-6 xl:py-16 flex flex-col justify-between px-4 xl:px-20">
                        <p className="font-manrope font-extrabold text-4xl text-white">Before LitDraft</p>
                        <div className="flex gap-6 xl:gap-12">
                            <div>
                                <p className="text-[#FFFFFF99] font-manrope leading-[180%] tracking-wide">Hours/year on discovery</p>
                                <NumberTicker
                                    value={8000}
                                    className="whitespace-pre-wrap font-manrope text-4xl font-extrabold text-white mt-[14px]"
                                />
                                {/* <p className="font-manrope text-4xl font-extrabold text-white mt-[14px]">8,000</p> */}
                            </div>
                            <div>
                                <p className="text-[#FFFFFF99] font-manrope leading-[180%] tracking-wide">Annual discovery cost</p>
                                <p className="font-manrope text-4xl font-extrabold text-white mt-[14px]">$2.4M</p>
                            </div>
                        </div>
                    </div>
                </BlurFade>
                <BlurFade inView direction="down" delay={0.75} className="rounded-2xl relative draft-card">
                    <Image src={DraftCard} alt="before-drift" className="object-cover w-full" />
                    <div className="w-full h-full absolute top-0 py-6 xl:py-16 flex flex-col justify-between px-4 xl:px-20">
                        <p className="font-manrope font-extrabold text-4xl text-white">After LitDraft</p>
                        <div className="flex gap-6 xl:gap-12">
                            <div>
                                <p className="text-[#FFFFFF99] font-manrope leading-[180%] tracking-wide">Hours/year on discovery</p>
                                <NumberTicker
                                    value={400}
                                    className="whitespace-pre-wrap font-manrope text-4xl font-extrabold text-white mt-[14px]"
                                />
                                {/* <p className="font-manrope text-4xl font-extrabold text-white mt-[14px]">400</p> */}
                            </div>
                            <div>
                                <p className="text-[#FFFFFF99] font-manrope leading-[180%] tracking-wide">Recovered for revenue work</p>
                                <p className="font-manrope text-4xl font-extrabold text-white mt-[14px]">$2.28M</p>
                            </div>
                        </div>
                    </div>
                </BlurFade>
            </div>
        </div>
    )
}

export default BeforeAfterDraft