import Image from "next/image";

const SocialIcon = ({ src, alt }) => {
    return (
        <div className="h-8 w-8 shadow-blue-inset rounded-full flex justify-center items-center p-2">
            <Image src={src} alt={alt} className="object-cover" />
        </div>
    )
}

export default SocialIcon;