

const HeroSection = () => {
    return (
        <div className="mt-6">
            <div className="grid md:grid-cols-2 gap-6">
                <div>
                    <img className="w-[800px] h-[600px] object-cover" src="/src/assets/product/ideogram (11).jpeg" alt="" />
                </div>
                <div className="w-[400px] grid grid-cols-2 gap-6">
                    <img src="/src/assets/product/ideogram (12).jpeg" alt="" />
                    <img src="/src/assets/product/ideogram (13).jpeg" alt="" />
                </div>
            </div>
        </div>
    );
};

export default HeroSection;