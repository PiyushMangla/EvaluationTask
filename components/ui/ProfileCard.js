import Image from "next/image"
import { TextAnimate } from "../magicui/text-animate"
import { BlurFade } from "../magicui/blur-fade"

const ProfileCard = ({
    desc,
    profileImg,
    name,
    key,
    position
}) => {
    return (
        <div className="card-gradient h-full rounded-xl flex justify-between flex-col px-8 py-6 gap-8">
            <TextAnimate delay={0.125*key} animation="scaleDown" once  className="font-manrope text-lg text-[#FFFFFF99] w-4/5">
                {desc}
            </TextAnimate>
            <BlurFade delay={0.15*key} direction="left" className="flex items-center gap-2">
                <Image alt="profile" className="rounded-full w-16 h-16" src={profileImg} />
                <div className="flex flex-col">
                    <p className="font-manrope font-semibold text-lg text-white">{name}</p>
                    <p className="font-manrope text-sm text-[#FFFFFF99]">{position}</p>
                </div>
            </BlurFade>
        </div>
    )
}

export default ProfileCard