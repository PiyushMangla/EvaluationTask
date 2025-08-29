import Image from "next/image"
import CryptoYield from "@/assets/images/Crypto Yield.png"
import DemoButtons from "../ui/DemoButtons"

const CallToAction = () => {
    return (
        <div className="bg-[#FFFFFF08] rounded-4xl flex justify-between items-center border border-red-400">
            <div className="flex flex-col pl-20 max-w-3/5 justify-between gap-8">
                <p className="m-0 font-medium text-[52px] text-gray-primary leading-[120%]">Ready to Reclaim Your Nights and Weekends?</p>
                <p className="m-0 font-normal text-2xl text-[#C4C1C8] leading-[150%] w-10/12">Forward-thinking firms have already switched. Don't let competitors outpace you.</p>
                <DemoButtons />
            </div>
            <div>
                <Image src={CryptoYield} alt="crypto-yield" className="object-cover" />
            </div>
        </div>
    )
}

export default CallToAction