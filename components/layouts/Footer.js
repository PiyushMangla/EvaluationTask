import Image from "next/image";
import Logo from "@/assets/images/logo.png"
import FacebookIcon from "@/assets/images/facebook-icon.png"
import InstagramIcon from "@/assets/images/instagram.png"
import TwitterIcon from "@/assets/images/twitter-icon.png"
import LinkedinIcon from "@/assets/images/linkedin-icon.png"
import SocialIcon from "../ui/SocialIcon";
import { TextAnimate } from "../magicui/text-animate";
import { BlurFade } from "../magicui/blur-fade";

const Footer = () => {
    const icons = [
        { img: FacebookIcon, alt: "facebook-icon" },
        { img: InstagramIcon, alt: "instagram-icon" },
        { img: TwitterIcon, alt: "twitter-icon" },
        { img: LinkedinIcon, alt: "linkedin-icon" },
    ]
    return (
        <div className="mt-6 md:mt-8 lg:mt-14 pb-5">
            <div className="flex flex-col md:flex-row justify-between md:items-center md:text-center">
                <BlurFade inView>
                    <Image src={Logo} alt="logo" className="object-cover" />
                </BlurFade>
                <div className="flex items-center text-center gap-10">
                    <TextAnimate once animation="slideLeft" delay={0.25} className="m-0 text-gray-light font-sora">Privacy Policy</TextAnimate>
                    <TextAnimate once animation="slideLeft" delay={0.5} className="m-0 text-gray-light font-sora">Terms Of Service</TextAnimate>
                </div>
            </div>
            <div className="h-[1px] bg-[#1C212B] w-full my-4"></div>
            <div className="flex flex-col md:flex-row justify-between gap-4 md:items-center md:text-center">
                <TextAnimate once delay={0.5} className="m-0 text-gray-light font-sora">© 2025 LitDraft. All rights reserved.</TextAnimate>
                <div className="flex items-center text-center gap-1">
                    {
                        icons.map((icon, index) => (
                            <BlurFade inView delay={0.5 + 0.25 * index + 1} key={index}>
                                <SocialIcon src={icon.img} alt={icon.alt} />
                            </BlurFade>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Footer