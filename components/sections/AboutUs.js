import ProfileCard from "../ui/ProfileCard"
import ProfileImg1 from "@/assets/images/profile1.png"
import ProfileImg2 from "@/assets/images/profile2.png"
import ProfileImg3 from "@/assets/images/profile3.png"
import BgGroup from "@/assets/images/bg-group-1.png"

const AboutUs = () => {
  const profiles = [
    { img: ProfileImg1, desc: "ClientQ saved us 20 hours per case. Clients get it now, and their answers make sense the first time.", name: "Sarah Chen", position: "Managing Partner, Chen & Associates" },
    { img: ProfileImg2, desc: "We haven't had a single discovery sanction since LitDraft.", name: "Marcus Thompson", position: "Litigation Director" },
    { img: ProfileImg3, desc: "It's like having a senior associate who never sleeps.", name: "Jennifer Martinez", position: "Partner" },
  ]
  return (
    <div className="pb-12 pt-24 relative bg-no-repeat bg-top" style={{ backgroundImage: `url(${BgGroup.src})` }}>
      <div className="py-12 text-center text-gray-primary">
        <p className="text-5xl font-medium">500+ Firms. Zero Regrets.</p>
      </div>
      <div className="grid grid-cols-3 gap-6">
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