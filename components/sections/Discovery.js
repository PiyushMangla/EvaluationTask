import Image from "next/image"
import Discovery1 from "@/assets/images/discovery1.png"
import Discovery2 from "@/assets/images/discovery2.png"
import Discovery2Bg from "@/assets/images/discovery2-bg.png"
import ArrowRight from "@/assets/images/arrow-right.png"
import { TextAnimate } from "@/components/magicui/text-animate";
import { BlurFade } from "@/components/magicui/blur-fade";

const Discovery = () => {
    const discoveries = [
        { title: "Discovery Intake & Response Automation", desc: "Extract, analyze, and draft in seconds.", img: Discovery1 },
        { title: "Propounded Discovery Generator", desc: "Generate targeted discovery from your complaint or petition.", img: Discovery2, gradient: Discovery2Bg },
        { title: "Discovery Intake & Response Automation", desc: "Extract, analyze, and draft in seconds.", img: Discovery1 },
        { title: "Discovery Intake & Response Automation", desc: "Extract, analyze, and draft in seconds.", img: Discovery1 },
    ]
    return (
        <div className="py-6 md:py-8 lg:py-14">
            <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left pb-6 md:pb-8 lg:pb-14">
                <TextAnimate once animation="slideUp" by="word" className="text-[#F6F4FA] font-medium text-3xl md:text-4xl lg:text-5xl md:w-1/2 leading-[130%]">Discovery Automation That Thinks Like Your Best Litigator</TextAnimate>
                <div className="md:w-1/2 lg:w-2/5 lg:pl-8 pt-2 md:pt-0 md:text-left">
                    <TextAnimate once animation="slideUp" by="word" className="text-sm md:text-lg lg:text-xl text-[#C4C1C8] leading-[150%]">{"LitDraft is more than document automation — it's an AI legal brain that understands context, jurisdiction, and strategy. Drafts sound like your sharpest attorney wrote them, not a template."}</TextAnimate>
                </div>
            </div>
            <div className="relative">
                <div className="flex flex-nowrap overflow-hidden w-full gap-6">
                    {
                        discoveries.map((discovery, index) => (
                            <BlurFade inView delay={0.25 * index} direction="bottom" key={index} className="shrink-0 w-[90%] md:w-[60%] lg:w-[45%] discovery-card rounded-xl flex justify-between items-center">
                                <div className="pl-4 lg:pl-10">
                                    <p className="text-xl md:text-2xl lg:text-3xl font-bold font-manrope text-white">{discovery.title}</p>
                                    <p className="font-medium font-manrope leading-[160%] text-[#FFFFFF99] md:text-lg pt-3 w-3/4">{discovery.desc}</p>
                                </div>
                                <div className="w-3/5 flex justify-center relative">
                                    <Image src={discovery.img} alt="discovery 1" className="object-cover" />
                                    {
                                        discovery.gradient && <Image src={Discovery2Bg} alt="discovery 2 bg" className="object-cover absolute -top-6" />

                                    }
                                </div>
                            </BlurFade>
                        ))
                    }
                </div>
                <div className="absolute slide-arrow w-10 h-10 lg:w-16 lg:h-16 rounded-full -right-2 lg:-right-8 top-1/2 -translate-y-1/2 cursor-pointer flex justify-center items-center">
                    <Image src={ArrowRight} alt="arrow-right" className="object-cover" />
                </div>
            </div>
            <div className="py-4 md:py-6 lg:py-8 flex justify-center gap-1">
                {
                    discoveries.map((dot, index) => (
                        <div key={index}>
                            {
                                index === 0 ?
                                    <div className="slider-dot-selected w-3 h-3 rounded-full"></div>
                                    : <div className="bg-black h-3 w-3 rounded-full slider-dots"></div>
                            }
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Discovery