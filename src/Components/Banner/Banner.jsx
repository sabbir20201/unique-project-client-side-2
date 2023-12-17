

const Banner = () => {
    return (
        <div>
            <div className="hero h-[600px]" style={{ backgroundImage: 'url(https://i.ibb.co/RNjQHHf/istockphoto-1423179087-1024x1024.jpg)' }}>
                <div className="hero"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">CRYPTO CURRENCY</h1>
                        <p className="mb-5">Exploring the World of Cryptocurrency: Insights, Trends, and Investment Opportunities in the Digital Asset Landscape.</p>
                        <button className="btn bg-sky-500">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;