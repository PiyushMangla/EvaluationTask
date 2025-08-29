const Statistics = () => {
    const stats = [
        { value: "47 Sec", description: "Average time spent completing document request." },
        { value: "600+", description: "Discovery requests completed." },
        { value: "99.7%", description: "Accuracy achieved." },
        { value: "$2.3M", description: "Delivered by our firms." },
    ];

    return (
        <section className="py-16 relative z-100">
            <div className=" w-[90%] mx-auto px-6">
                <div className="grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-white/10 p-8">
                    {stats.map((stat, index) => (
                        <div key={index} className="text-center px-4">
                            <div className="text-4xl md:text-5xl font-bold text-[#059AF4] mb-2">
                                {stat.value}
                            </div>
                            <p className="text-[#C4C1C8] text-sm leading-relaxed">
                                {stat.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Statistics;
