import Image from "next/image"
import Discovery1 from "@/assets/images/discovery1.png"
import Discovery2 from "@/assets/images/discovery2.png"
import Discovery2Bg from "@/assets/images/discovery2-bg.png"
import ArrowRight from "@/assets/images/arrow-right.png"

const Discovery = () => {
    return (
        <div className="py-16">
            <div className="flex justify-between items-center pb-12">
                <p className="text-[#F6F4FA] font-medium text-[50px] w-1/2 leading-[130%]">Discovery Automation That Thinks Like Your Best Litigator</p>
                <div className="w-2/5 pl-8 pr-4">
                    <p className="text-xl text-[#C4C1C8] leading-[150%]">LitDraft is more than document automation — it's an AI legal brain that understands context, jurisdiction, and strategy. Drafts sound like your sharpest attorney wrote them, not a template.</p>
                </div>
            </div>
            <div className="relative">
                <div className="flex flex-nowrap overflow-hidden w-full gap-6">
                    <div className="shrink-0 w-[45%] discovery-card rounded-xl flex justify-between items-center">
                        <div className="pl-10">
                            <p className="text-3xl font-bold font-manrope text-white">Discovery Intake & Response Automation</p>
                            <p className="font-medium font-manrope leading-[160%] text-[#FFFFFF99] text-lg pt-3 w-3/4">Extract, analyze, and draft in seconds.</p>
                        </div>
                        <div className="w-3/5 flex justify-center">
                            <Image src={Discovery1} alt="discovery 1" className="object-cover" />
                        </div>
                    </div>
                    <div className="shrink-0 w-[45%] discovery-card rounded-xl flex justify-between items-center">
                        <div className="pl-10">
                            <p className="text-3xl font-bold font-manrope text-white">Propounded Discovery Generator</p>
                            <p className="font-medium font-manrope leading-[160%] text-[#FFFFFF99] text-lg pt-3 w-3/4">Generate targeted discovery from your complaint or petition.</p>
                        </div>
                        <div className="w-3/5 flex justify-center relative">
                            <Image src={Discovery2} alt="discovery 2" className="object-cover" />
                            <Image src={Discovery2Bg} alt="discovery 2 bg" className="object-cover absolute -top-6" />
                        </div>
                    </div>
                    <div className="shrink-0 w-[45%] discovery-card rounded-xl flex justify-between items-center">
                        <div className="pl-10">
                            <p className="text-3xl font-bold font-manrope text-white">Propounded Discovery Generator</p>
                            <p className="font-medium font-manrope leading-[160%] text-[#FFFFFF99] text-lg pt-3 w-3/4">Generate targeted discovery from your complaint or petition.</p>
                        </div>
                        <div className="w-3/5 flex justify-center">
                            <Image src={Discovery2} alt="discovery 3" className="object-cover" />
                        </div>
                    </div>
                </div>
                <div className="absolute slide-arrow w-16 h-16 rounded-full -right-8 top-1/2 -translate-y-1/2 cursor-pointer flex justify-center items-center">
                    <Image src={ArrowRight} alt="arrow-right" className="object-cover" />
                </div>
            </div>
            <div className="py-8 flex justify-center gap-1">
                {
                    [1, 2, 3, 4].map((dot) => (
                        <div key={dot}>
                            {
                                dot === 1 ?
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