import Image from "next/image";
import Logo from "@/assets/images/logo.png"
import FacebookIcon from "@/assets/images/facebook-icon.png"
import InstagramIcon from "@/assets/images/instagram.png"
import TwitterIcon from "@/assets/images/twitter-icon.png"
import LinkedinIcon from "@/assets/images/linkedin-icon.png"
import SocialIcon from "../ui/SocialIcon";

const Footer = () => {
    return (
        <div className="mt-16 pb-5">
            <div className="flex justify-between items-center text-center">
                <Image src={Logo} alt="logo" className="object-cover" />
                <div className="flex items-center text-center gap-10">
                    <p className="m-0 text-gray-light font-sora">Privacy Policy</p>
                    <p className="m-0 text-gray-light font-sora">Terms Of Service</p>
                </div>
            </div>
            <div className="h-[1px] bg-[#1C212B] w-full my-4"></div>
            <div className="flex justify-between items-center text-center">
                <p className="m-0 text-gray-light font-sora">© 2025 LitDraft. All rights reserved.</p>
                <div className="flex items-center text-center gap-1">
                    <SocialIcon src={FacebookIcon} alt="facebook-icon" />
                    <SocialIcon src={InstagramIcon} alt="instagram-icon" />
                    <SocialIcon src={TwitterIcon} alt="twitter-icon" />
                    <SocialIcon src={LinkedinIcon} alt="linkedin-icon" />
                </div>
            </div>
        </div>
    )
}

export default Footer