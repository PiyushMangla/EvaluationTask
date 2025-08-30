import { NumberTicker } from "../magicui/number-ticker";
import { TextAnimate } from "../magicui/text-animate";

const Statistics = () => {
    const stats = [
        { value: 47, post: "sec", description: "Average time spent completing document request." },
        { value: "600", post: "+", description: "Discovery requests completed." },
        { value: "99.7", post: "%", description: "Accuracy achieved." },
        { value: 2.3, post: "M", description: "Delivered by our firms." },
    ];

    return (
        <section className="py-0 md:py-8 lg:py-16 relative z-100">
            <div className="">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 divide-y md:divide-y-0 md:divide-x divide-white/10 px-8">
                    {stats.map((stat, index) => (
                        <div key={index} className="text-center px-4">
                            <div className="flex justify-center">
                                <NumberTicker
                                    value={stat.value}
                                    className="text-4xl md:text-5xl font-bold text-[#059AF4] mb-2"
                                />
                                <div className="text-4xl md:text-5xl font-bold text-[#059AF4] mb-2">
                                    {stat.post}
                                </div>
                            </div>
                            <TextAnimate once className="text-[#C4C1C8] text-sm leading-relaxed pb-4">
                                {stat.description}
                            </TextAnimate>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Statistics;
