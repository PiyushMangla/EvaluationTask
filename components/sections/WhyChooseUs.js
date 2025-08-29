"use client"
import WhyChooseGroup from "@/assets/images/why-group.png"
import Image from "next/image"
import { useState } from "react"

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
            <div className="text-center py-10">
                <p className="font-medium text-5xl text-[#F6F4FA] leading-[135%]">Why Firms Choose LitDraft <br /> Over Everything Else</p>
            </div>
            <div className="grid grid-cols-2 gap-8">
                <div className="flex flex-col gap-2">
                    {
                        reasons.map((reason, index) => (
                            <div key={index}>
                                {
                                    index === selectedReason ?
                                        <div className="selected-reason-card rounded-xl pl-8 py-6 cursor-pointer">
                                            <p className="text-5xl font-manrope font-semibold text-[#394045] pb-4 pt-2">0{index + 1}</p>
                                            <p className="m-0 font-manrope font-bold text-2xl text-white w-4/5">{reason}</p>
                                        </div> : <div className="reason-card pl-8 py-6 rounded-xl cursor-pointer">
                                            <p className="m-0 font-manrope font-medium text-2xl text-[#B4B6B8] w-4/5">{reason}</p>
                                        </div>
                                }
                            </div>
                        ))
                    }
                </div>
                <div className="group-cover-card flex justify-center items-center h-full rounded-2xl">
                    <Image className="object-cover h-[90%]" src={WhyChooseGroup} alt="why-choose" />
                </div>
            </div>
        </div>
    )
}

export default WhyChooseUs