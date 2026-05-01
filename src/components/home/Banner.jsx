const Banner = () => {
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content text-center flex flex-col">
                <div className="border rounded-full px-4 font-medium py-1">
                    <p>New arrivals every week</p>
                </div>
                <div className="">
                    <h1 className="lg:text-7xl md:text-6xl text-5xl font-bold"><span className="">Discover your </span>
                    <br />
                        <span className="opacity-80">perfect aesthetic.</span></h1>
                    <p className="py-6 text-lg font-medium">
                        Explore a curated collection of premium tiles for every space, style, and vision.
                    </p>
                    <button className="btn btn-outline">Browse now</button>
                    
                </div>
            </div>
        </div>
    );
};

export default Banner;