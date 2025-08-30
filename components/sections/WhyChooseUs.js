"use client"
import WhyChooseGroup from "@/assets/images/why-group.png"
import Image from "next/image"
import { useState } from "react"
import { BlurFade } from "../magicui/blur-fade"
import { TextAnimate } from "../magicui/text-animate"

const WhyChooseUs = () => {
    const reasons = [
        "Built by litigators, for litigators — not generic tech people.",
        "AI that understands legal context — not just find-and-replace.",
        "State-specific precision — mapped to every jurisdiction's requirements.",
        "ClientQ advantage — your clients finally understand what you're asking.",
        "No setup chaos — import your templates, start drafting in minutes."
    ]
    const [selectedReason, setSelectedReason] = useState(0)
    return (
        <div>
            <BlurFade inView className="text-center pb-6 md:pb-8 lg:pb-14">
                <p className="font-medium text-3xl md:text-4xl lg:text-[50px] text-[#F6F4FA] leading-[135%]">Why Firms Choose LitDraft <br /> Over Everything Else</p>
            </BlurFade>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 md:gap-4 lg:gap-8">
                <div className="flex flex-col gap-2">
                    {
                        reasons.map((reason, index) => (
                            <div key={index}>
                                {
                                    index === selectedReason ?
                                        <div className="selected-reason-card rounded-xl pl-6 py-4 md:pl-8 md:py-6 cursor-pointer">
                                            <p className="text-5xl font-manrope font-semibold text-[#394045] pb-2 lg:pb-4 pt-2">0{index + 1}</p>
                                            <TextAnimate once animation="slideUp" delay={0.125} by="word" className="m-0 font-manrope font-bold text-lg md:text-2xl text-white w-[85%]">{reason}</TextAnimate>
                                        </div> : <div className="reason-card pl-6 py-4 md:pl-8 md:py-6 rounded-xl cursor-pointer">
                                            <TextAnimate once animation="fadeIn" delay={0.125 * index} className="m-0 font-manrope font-medium text-lg md:text-2xl text-[#B4B6B8] w-[85%]">{reason}</TextAnimate>
                                        </div>
                                }
                            </div>
                        ))
                    }
                </div>
                <div className="group-cover-card flex justify-center items-center h-full rounded-2xl">
                    <BlurFade inView direction="top" delay={1}>
                        <Image className="object-cover h-[90%]" src={WhyChooseGroup} alt="why-choose" />
                    </BlurFade>
                </div>
            </div>
        </div>
    )
}

export default WhyChooseUs