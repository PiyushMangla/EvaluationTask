import BgGroup from "@/assets/images/bg-group-1.png"
import DraftGradient from "@/assets/images/draft-gradient.png"
import Globe from "@/assets/images/globe.png"
import CostCard1 from "@/assets/images/cost-card1.png"
import CostCard2 from "@/assets/images/cost-card2.png"
import CostCard3 from "@/assets/images/cost-card3.png"
import CostCard4 from "@/assets/images/cost-card4.png"
import CostCard5 from "@/assets/images/cost-card5.png"
import Image from "next/image"

const DraftingCost = () => {
    const problems = [
        { icon: CostCard1, text: "40+ billable hours per case on repetitive drafting" },
        { icon: CostCard2, text: "$15,000 in opportunity cost from senior attorneys doing junior work" },
        { icon: CostCard3, text: "20% of objectionable requests that slip through review" },
        { icon: CostCard4, text: "2-3 weeks of delays from manual back-and-forth" },
        { icon: CostCard5, text: "Critical document gaps that surface at the worst possible moment" },
    ];
    return (
        <div className="pb-12 relative bg-no-repeat bg-top px-20 z-100" style={{ backgroundImage: `url(${BgGroup.src})` }}>
            <div className="py-12 text-center text-gray-primary">
                <p className="text-6xl font-medium leading-[120%]">Still Drafting Discovery <br />
                    Like <span className="text-[#059AF4]">It's 1995? </span></p>
                <p className="text-xl font-inter text-[#B8B7BA] mt-4">Every discovery cycle costs your firm:</p>
            </div>
            <div className="mx-24 flex flex-wrap justify-center items-stretch">
                {
                    problems.map((problem, index) => (
                        <div key={index} className="w-1/3 shrink-0 bg-[#04090C80] border border-[#1E1F24] rounded-[20px] p-8 relative flex flex-col justify-between">
                            <Image alt="" src={problem.icon} className="object-cover mt-4 mb-8" />
                            <p className="text-[#C4C1C8] text-2xl">{problem.text}</p>
                        </div>
                    ))
                }
            </div>
            <div className="mt-10 mx-24 relative overflow-hidden rounded-2xl border border-[#1E1F24] bg-[rgba(4,9,12,0.5)] px-10 flex items-center justify-between">
                <div className="relative z-10 max-w-2xl">
                    <h3 className="text-5xl font-medium text-[#F6F4FA] mb-6">The Real Cost</h3>
                    <p className="text-[#C4C1C8] text-2xl mb-6">
                        While you're reformatting boilerplate objections at 11 PM, your
                        competitors are taking on 3x more cases with half the staff.
                    </p>
                    <p className="text-[#F7F7F7] font-bold text-3xl">
                        There's a better way.
                    </p>
                </div>

                <Image
                    src={Globe}
                    alt="globe"
                    aria-hidden
                    className=" opacity-80 object-cover"
                />
            </div>
            {/* <Image src={DraftGradient} className="absolute object-cover top-1/4 left-0 h-1/2 w-full" alt="drift-gradient" /> */}
        </div>
    )
}

export default DraftingCost