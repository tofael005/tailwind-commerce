

const HeroSection = () => {
    return (
        <div className="mt-6">
            <div className="max-w-[1240px] md:flex gap-6 mx-auto px-3">
                <div className="md:w-[800px] mb-6 relative">
                    <img className="md:w-full h-[600px] object-cover" src="/src/assets/product/ideogram (11).jpeg" alt="" />
                    <button className="absolute top-[500px] left-32 bg-orange-400 p-3">Click Details the food</button>
                </div>
                <div className="md:w-[400px]">
                    <img className="w-full h-[270px] md:mb-14 mb-6" src="/src/assets/product/ideogram (12).jpeg" alt="" />
                    <img className="w-full h-[270px] md:mt-3" src="/src/assets/product/ideogram (13).jpeg" alt="" />
                    <h1>hello</h1>
                    <h1>hello</h1>
                    <h1>hello</h1>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;