import ProfileCard from "../ui/ProfileCard"
import ProfileImg1 from "@/assets/images/profile1.png"
import ProfileImg2 from "@/assets/images/profile2.png"
import ProfileImg3 from "@/assets/images/profile3.png"
import BgGroup from "@/assets/images/bg-group-1.png"
import { TextAnimate } from "../magicui/text-animate"

const AboutUs = () => {
  const profiles = [
    { img: ProfileImg1, desc: "ClientQ saved us 20 hours per case. Clients get it now, and their answers make sense the first time.", name: "Sarah Chen", position: "Managing Partner, Chen & Associates" },
    { img: ProfileImg2, desc: "We haven't had a single discovery sanction since LitDraft.", name: "Marcus Thompson", position: "Litigation Director" },
    { img: ProfileImg3, desc: "It's like having a senior associate who never sleeps.", name: "Jennifer Martinez", position: "Partner" },
  ]
  return (
    <div className="pb-6 md:pb-8 lg:pb-14 pt-8 md:pt-12 lg:pt-20 relative bg-no-repeat bg-top bg-contain lg:bg-auto" style={{ backgroundImage: `url(${BgGroup.src})` }}>
      <div className="py-6 md:py-8 lg:py-14 text-center text-gray-primary">
        <TextAnimate once className="text-3xl md:text-4xl lg:text-5xl font-medium">500+ Firms. Zero Regrets.</TextAnimate>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-6">
        {
          profiles.map((profile, index) => (
            <ProfileCard
              desc={profile.desc}
              profileImg={profile.img}
              name={profile.name}
              position={profile.position}
              key={index}
            />
          ))
        }
      </div>
    </div>
  )
}

export default AboutUs