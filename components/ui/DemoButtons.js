const DemoButtons = () => {
    return (
        <div className="flex flex-col lg:flex-row lg:items-center gap-3 lg:gap-5">
            <button className="w-fit py-3 lg:py-5 px-8 lg:px-12 text-lg cursor-pointer text-[#F9F7FD] font-medium font-inter leading-[150%] rounded-2xl bg-[#059AF4] border border-[#059AF4] transition duration-300 ease-in-out hover:scale-105 hover:shadow-lg hover:bg-[#0488d6]">
                Book your Demo
            </button>
            <button className="w-fit py-3 lg:py-5 px-8 lg:px-12 text-lg cursor-pointer text-[#F9F7FD] font-medium font-inter leading-[150%] rounded-2xl bg-[#059AF433] border border-[#FFFFFF1A] transition duration-300 ease-in-out hover:scale-105 hover:shadow-lg hover:bg-[#0488d699]">
                Start Free Trial
            </button>
        </div>
    )
}

export default DemoButtons