import DraftGradient from "@/assets/images/draft-gradient.png"
import DraftCard from "@/assets/images/draft-card.png"
import Image from "next/image"


const BeforeAfterDraft = () => {
    return (
        <div className="w-full pb-8 bg-no-repeat bg-cover px-20 relative">
            <Image src={DraftGradient} className="absolute object-cover left-0 top-0 w-full" alt="drift-gradient" />
            <div className="text-center pt-32 pb-8">
                <p className="font-semibold text-5xl leading-[135%] text-[#F6F4FA]">The Math Is Undeniable</p>
                <p className="text-[#C4C1C8] text-lg pt-6">For a 10-attorney firm handling 200 cases/year:</p>
            </div>
            <div className="grid grid-cols-2 gap-8">
                <div className="rounded-2xl relative draft-card">
                    <Image src={DraftCard} alt="before-drift" className="object-cover w-full" />
                    <div className="w-full h-full absolute top-0 py-16 flex flex-col justify-between px-20">
                        <p className="font-manrope font-extrabold text-4xl text-white">Before LitDraft</p>
                        <div className="flex gap-12">
                            <div>
                                <p className="text-[#FFFFFF99] font-manrope leading-[180%] tracking-wide">Hours/year on discovery</p>
                                <p className="font-manrope text-4xl font-extrabold text-white mt-[14px]">8,000</p>
                            </div>
                            <div>
                                <p className="text-[#FFFFFF99] font-manrope leading-[180%] tracking-wide">Annual discovery cost</p>
                                <p className="font-manrope text-4xl font-extrabold text-white mt-[14px]">$2.4M</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="rounded-2xl relative draft-card">
                    <Image src={DraftCard} alt="before-drift" className="object-cover w-full" />
                    <div className="w-full h-full absolute top-0 py-16 flex flex-col justify-between px-20">
                        <p className="font-manrope font-extrabold text-4xl text-white">After LitDraft</p>
                        <div className="flex gap-12">
                            <div>
                                <p className="text-[#FFFFFF99] font-manrope leading-[180%] tracking-wide">Hours/year on discovery</p>
                                <p className="font-manrope text-4xl font-extrabold text-white mt-[14px]">400</p>
                            </div>
                            <div>
                                <p className="text-[#FFFFFF99] font-manrope leading-[180%] tracking-wide">Recovered for revenue work</p>
                                <p className="font-manrope text-4xl font-extrabold text-white mt-[14px]">$2.28M</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BeforeAfterDraft