import Image from "next/image"

const ProfileCard = ({
    desc,
    profileImg,
    name,
    position
}) => {
    return (
        <div className="card-gradient h-full rounded-xl flex justify-between flex-col px-8 py-6 gap-8">
            <p className="font-manrope text-lg text-[#FFFFFF99] w-4/5">
                {desc}
            </p>
            <div className="flex items-center gap-2">
                <Image alt="profile" className="rounded-full w-16 h-16" src={profileImg} />
                <div className="flex flex-col">
                    <p className="font-manrope font-semibold text-lg text-white">{name}</p>
                    <p className="font-manrope text-sm text-[#FFFFFF99]">{position}</p>
                </div>
            </div>
        </div>
    )
}

export default ProfileCard