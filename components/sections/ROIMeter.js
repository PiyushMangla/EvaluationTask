import RoiBG from "@/assets/images/roi-bg.png"
import Image from "next/image"
import { BlurFade } from "../magicui/blur-fade"
const ROIMeter = () => {
    return(
        <BlurFade inView className="roi-card rounded-3xl relative mb-4 md:mb-0">
            <Image src={RoiBG} alt="roi-bg" className="object-cover w-full scale-y-125 md:scale-y-100"/>
            <div className="w-full h-full absolute top-0 text-center pt-0 md:pt-4 xl:pt-16">
                <div className="flex flex-col md:gap-2 lg:gap-3">
                    <p className="bg-gradient-to-r from-[rgb(53,120,255)] to-[#4483FF] bg-clip-text text-transparent font-manrope font-medium text-[13px] tracking-[12%]">IN YEAR ONE</p>
                    <p className="font-extrabold font-manrope md:text-xl lg:text-4xl text-white">11.4x ROI</p>
                    <p className="font-manrope text-[#FFFFFF99] text-xs md:text-sm lg:text-lg tracking-wide font-extralight">Faster cases. Happier clients. More revenue.</p>
                </div>
            </div>
        </BlurFade>
    )
}

export default ROIMeter