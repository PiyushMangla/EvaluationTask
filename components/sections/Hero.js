import DemoButtons from "../ui/DemoButtons";

const Hero = () => {
    return (
        <section className="text-center py-24 relative overflow-hidden">
            <div className="relative z-10 max-w-4xl mx-auto px-8">
                <div className="mb-6">
                    <span className="text-[#E5E4E9] text-[22px] font-semibold">In Minutes, Not Months.</span>
                </div>
                <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                    Turn Discovery Hell Into {""}
                    <span className="text-[#059AF4]">Discovery Done.</span>
                </h1>
                <p className="text-xl text-[#E5E4E9] mb-10 max-w-2xl mx-auto leading-relaxed">
                    LitDraft's AI drafts jurisdiction-perfect discovery requests, responses, and objections 50x faster — while your competitors are still copying and pasting.
                </p>
                <div className="flex justify-center">
                    <DemoButtons />
                </div>
            </div>
        </section>
    );
};

export default Hero;