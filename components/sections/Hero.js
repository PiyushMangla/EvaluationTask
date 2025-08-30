import { BlurFade } from "../magicui/blur-fade";
import { TextAnimate } from "../magicui/text-animate";
import DemoButtons from "../ui/DemoButtons";

const Hero = () => {
    return (
        <section className="text-center py-10 md:py:16 lg:py-24 relative overflow-hidden">
            <div className="relative z-10 max-w-4xl mx-auto px-8">
                <div className="mb-3 lg:mb-6">
                    <TextAnimate once animation="blurIn" className="text-[#E5E4E9] text-[22px] font-semibold">In Minutes, Not Months.</TextAnimate>
                </div>
                <BlurFade inView delay={0.5} >
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3 lg:mb-6 leading-tight">
                        Turn Discovery Hell Into {""}
                        <span className="text-[#059AF4]">Discovery Done.</span>
                    </h1>
                </BlurFade>
                <TextAnimate once delay={0.75} animation="blurIn" className="md:text-xl text-[#E5E4E9] mb-10 max-w-2xl mx-auto leading-relaxed">
                    {"LitDraft's AI drafts jurisdiction-perfect discovery requests, responses, and objections 50x faster — while your competitors are still copying and pasting."}
                </TextAnimate>
                <BlurFade inView delay={1} className="flex justify-center items-center">
                    <DemoButtons />
                </BlurFade>
            </div>
        </section>
    );
};

export default Hero;