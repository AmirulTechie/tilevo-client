import 'animate.css';
import Link from 'next/link';

const Banner = () => {

    return (
        <section className="relative min-h-screen bg-white flex flex-col items-center justify-center overflow-hidden px-6">


            <div
                className="absolute inset-0 opacity-[0.03]"
                style={{
                    backgroundImage: `linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)`,
                    backgroundSize: '48px 48px',
                }}
            />


            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div
                    className="w-150 h-150 rounded-full"
                    style={{
                        background: 'radial-gradient(circle, rgba(214,211,209,0.4) 0%, transparent 70%)',
                    }}
                />
            </div>

            <div className="relative z-10 flex flex-col items-center text-center max-w-3xl mx-auto gap-6">

                <div className="animate__animated animate__fadeInDown animate__faster">
                    <span className="inline-flex items-center gap-2 border border-stone-200 rounded-full px-4 py-1.5 text-xs font-medium text-stone-500 tracking-wide bg-white shadow-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block"></span>
                        New arrivals every week
                    </span>
                </div>

                <div className="animate__animated animate__fadeInUp">
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-medium text-stone-900 tracking-tight leading-[1.08]">
                        Discover your
                        <br />
                        <span className="text-stone-400">perfect aesthetic.</span>
                    </h1>
                </div>

                <div className="animate__animated animate__fadeInUp" style={{ animationDelay: '0.1s' }}>
                    <p className="text-base md:text-lg text-stone-400 leading-relaxed max-w-md">
                        Explore a curated collection of premium tiles for every space, style, and vision.
                    </p>
                </div>

                <div
                    className="flex items-center gap-3 animate__animated animate__fadeInUp"
                    style={{ animationDelay: '0.2s' }}
                >
                    <Link
                        href="/all-tiles"
                        className="bg-stone-900 text-white text-sm font-medium px-7 py-3 rounded-full hover:bg-stone-700 transition-colors duration-200"
                    >
                        Browse now
                    </Link>
                    <Link
                        href="#featured"
                        className="border border-stone-200 text-stone-600 text-sm px-7 py-3 rounded-full hover:bg-stone-50 transition-colors duration-200"
                    >
                        View collections
                    </Link>
                </div>
            </div>

            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate__animated animate__fadeIn" style={{ animationDelay: '0.6s' }}>
                <span className="text-xs text-stone-300 tracking-widest uppercase">Scroll</span>
                <div className="w-px h-8 bg-linear-to-b from-stone-300 to-transparent" />
            </div>

        </section>
    );
};

export default Banner;