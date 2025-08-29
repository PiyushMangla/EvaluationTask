import RoiBG from "@/assets/images/roi-bg.png"
import Image from "next/image"
const ROIMeter = () => {
    return(
        <div className="roi-card rounded-3xl relative">
            <Image src={RoiBG} alt="roi-bg" className="object-cover w-full"/>
            <div className="w-full h-full absolute top-0 text-center pt-16">
                <div className="flex flex-col gap-3">
                    <p className="bg-gradient-to-r from-[#3578FF] to-[#4483FF] bg-clip-text text-transparent font-manrope font-medium text-[13px] tracking-[12%]">IN YEAR ONE</p>
                    <p className="font-extrabold font-manrope text-4xl text-white">11.4x ROI</p>
                    <p className="font-manrope text-[#FFFFFF99] text-lg font-extralight">Faster cases. Happier clients. More revenue.</p>
                </div>
            </div>
        </div>
    )
}

export default ROIMeter