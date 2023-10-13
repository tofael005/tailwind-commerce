

const HeroSection = () => {
    return (
        <div className="mt-6">
            <div className="max-w-[1240px] md:flex gap-6 mx-auto px-3">
                <div className="md:w-[800px] mb-6 relative">
                    <img className="md:w-full rounded-md h-[600px] object-cover" src="/src/assets/product/ideogram (11).jpeg" alt="" />
                    <button className="absolute top-[500px] md:left-80 left-24 bg-sky-400 font-semibold hover:text-white rounded-md hover:shadow-black/30 hover:shadow-md duration-300 p-3">Click the food details.</button>
                </div>
                <div className="md:w-[400px]">
                    <img className="w-full h-[270px] rounded-md md:mb-14 mb-6" src="/src/assets/product/ideogram (12).jpeg" alt="" />
                    <img className="w-full h-[270px] rounded-md md:mt-3" src="/src/assets/product/ideogram (13).jpeg" alt="" />
                </div>
            </div>
        </div>
    );
};

export default HeroSection;