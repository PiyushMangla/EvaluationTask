import BgGroup from "@/assets/images/bg-group-1.png"
import Globe from "@/assets/images/globe.png"
import CostCard1 from "@/assets/images/cost-card1.png"
import CostCard2 from "@/assets/images/cost-card2.png"
import CostCard3 from "@/assets/images/cost-card3.png"
import CostCard4 from "@/assets/images/cost-card4.png"
import CostCard5 from "@/assets/images/cost-card5.png"
import Image from "next/image"
import { BlurFade } from "@/components/magicui/blur-fade";
import { TextAnimate } from "@/components/magicui/text-animate";

const DraftingCost = () => {
    const problems = [
        { icon: CostCard1, text: "40+ billable hours per case on repetitive drafting" },
        { icon: CostCard2, text: "$15,000 in opportunity cost from senior attorneys doing junior work" },
        { icon: CostCard3, text: "20% of objectionable requests that slip through review" },
        { icon: CostCard4, text: "2-3 weeks of delays from manual back-and-forth" },
        { icon: CostCard5, text: "Critical document gaps that surface at the worst possible moment" },
    ];
    return (

        <div className="pb-6 md:pb-8 lg:pb-14 relative bg-no-repeat bg-top z-100 bg-contain lg:bg-auto" style={{ backgroundImage: `url(${BgGroup.src})` }}>
            <div className="py-6 md:py-8 lg:py-14 text-center text-gray-primary">
                <BlurFade inView>
                    <p className="text-3xl md:text-4xl lg:text-6xl font-medium leading-[120%]">Still Drafting Discovery <br />
                        Like <span className="text-[#059AF4]">{"It's 1995?"} </span></p>
                </BlurFade>
                <BlurFade delay={0.25 * 1} inView>
                    <p className="text-xl font-inter text-[#B8B7BA] mt-2 lg:mt-4">Every discovery cycle costs your firm:</p>
                </BlurFade>
            </div>
            {/* <BlurFade delay={0.25 * 2} inView> */}
            <div className="flex flex-wrap justify-center gap-y-2 md:gap-y-0 items-stretch">
                {
                    problems.map((problem, index) => (
                        <BlurFade inView delay={0.25 * index + 1} key={index} className="w-full md:w-1/2 lg:w-1/3 shrink-0 bg-[#04090C80] border border-[#1E1F24] rounded-xl lg:rounded-[20px] p-4 lg:p-6 xl:p-8 relative flex flex-col justify-between">
                            <Image alt="" src={problem.icon} className="object-cover scale-75 lg:scale-100 mt-1 lg:mt-2 xl:mt-4 mb-4 lg:mb-6 xl:mb-8" />
                            <TextAnimate delay={0.25*index} once className="text-[#C4C1C8] text-lg md:text-xl xl:text-2xl">{problem.text}</TextAnimate>
                        </BlurFade>
                    ))
                }
            </div>
            {/* </BlurFade> */}
            <BlurFade delay={0.5} inView direction="left">
                <div className="mt-6 md:mt-10 relative overflow-hidden rounded-2xl border border-[#1E1F24] bg-[rgba(4,9,12,0.5)] px-4 lg:px-10 flex flex-col md:flex-row md:items-center justify-between">
                    <div className="relative z-10 lg:max-w-2xl py-4">
                        <TextAnimate once animation="slideRight" className="text-3xl md:text-4xl lg:text-5xl font-medium text-[#F6F4FA] mb-3 lg:mb-6">The Real Cost</TextAnimate>
                        <TextAnimate once animation="slideRight" delay={0.25} className="text-[#C4C1C8] text-lg lg:text-2xl mb-3 lg:mb-6">
                            {"While you're reformatting boilerplate objections at 11 PM, your competitors are taking on 3x more cases with half the staff."}
                        </TextAnimate>
                        <TextAnimate once animation="slideRight" delay={0.5} className="text-[#F7F7F7] font-bold text-xl lg:text-3xl">
                            {"There's a better way."}
                        </TextAnimate>
                    </div>
                    <Image
                        src={Globe}
                        alt="globe"
                        aria-hidden
                        className=" opacity-80 shrink-0 object-cover scale-75 lg:scale-100"
                    />
                </div>
            </BlurFade>
        </div>
    )
}

export default DraftingCost