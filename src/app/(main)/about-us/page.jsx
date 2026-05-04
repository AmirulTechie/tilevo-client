/* eslint-disable react/no-unescaped-entities */
import Link from 'next/link';

const AboutPage = () => {
    return (
        <div className="min-h-screen bg-white">

            {/* Page header */}
            <div className="border-b border-stone-100 px-6 md:px-16 py-10">
                <div className="max-w-6xl mx-auto animate__animated animate__fadeInLeft">
                    <p className="text-xs font-medium tracking-widest uppercase text-stone-400 mb-2">
                        Our story
                    </p>
                    <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
                        <h1 className="text-3xl md:text-4xl font-medium text-stone-900 tracking-tight">
                            About Tilevo
                        </h1>
                        <p className="text-sm text-stone-400">
                            Crafting spaces since 2018
                        </p>
                    </div>
                </div>
            </div>

            {/* Hero statement */}
            <div className="relative px-6 md:px-16 py-24 overflow-hidden">
                {/* Background grid */}
                <div
                    className="absolute inset-0 opacity-[0.025]"
                    style={{
                        backgroundImage: `linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)`,
                        backgroundSize: '48px 48px',
                    }}
                />
                {/* Radial glow */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div
                        className="w-175 h-175 rounded-full"
                        style={{
                            background: 'radial-gradient(circle, rgba(214,211,209,0.35) 0%, transparent 70%)',
                        }}
                    />
                </div>

                <div className="relative z-10 max-w-3xl mx-auto text-center animate__animated animate__fadeInUp">
                    <h2 className="text-4xl md:text-5xl font-medium text-stone-900 tracking-tight leading-[1.1] mb-6">
                        We believe every surface
                        <br />
                        <span className="text-stone-400">tells a story.</span>
                    </h2>
                    <p className="text-base text-stone-400 leading-relaxed max-w-xl mx-auto">
                        Tilevo was built for people who care deeply about the spaces they live and work in — who understand that the right tile isn't just a material choice, it's a design decision.
                    </p>
                </div>
            </div>

            {/* Stats row */}
            <div className="border-y border-stone-100 px-6 md:px-16 py-10">
                <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
                    {[
                        { value: '500+', label: 'Tiles in catalogue' },
                        { value: '12k+', label: 'Happy customers' },
                        { value: '6', label: 'Years in business' },
                        { value: '4.9★', label: 'Average rating' },
                    ].map((stat, i) => (
                        <div key={i} className="text-center">
                            <p className="text-3xl font-medium text-stone-900 tracking-tight mb-1">{stat.value}</p>
                            <p className="text-xs text-stone-400 uppercase tracking-widest">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Mission section */}
            <div className="px-6 md:px-16 py-20">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Tile mosaic visual */}
                    <div className="grid grid-cols-3 gap-3 max-w-sm mx-auto lg:mx-0">
                        {[
                            { color: 'bg-stone-200', size: 'col-span-2 row-span-2' },
                            { color: 'bg-stone-100', size: '' },
                            { color: 'bg-stone-300', size: '' },
                            { color: 'bg-stone-300', size: '' },
                            { color: 'bg-stone-100', size: '' },
                            { color: 'bg-stone-200', size: 'col-span-2' },
                        ].map((tile, i) => (
                            <div
                                key={i}
                                className={`${tile.color} ${tile.size} rounded-2xl aspect-square shadow-sm border border-white/60`}
                            />
                        ))}
                    </div>

                    {/* Mission text */}
                    <div className="animate__animated animate__fadeInRight">
                        <p className="text-xs font-medium tracking-widest uppercase text-stone-400 mb-4">
                            Our mission
                        </p>
                        <h2 className="text-2xl md:text-3xl font-medium text-stone-900 tracking-tight mb-6 leading-snug">
                            Making premium tile discovery effortless for everyone
                        </h2>
                        <p className="text-sm text-stone-500 leading-relaxed mb-6">
                            We started Tilevo because finding the perfect tile was harder than it needed to be. Showrooms were overwhelming. Online catalogues were outdated. We wanted to build something better — a curated, searchable gallery that puts the right tile in front of the right person.
                        </p>
                        <p className="text-sm text-stone-500 leading-relaxed">
                            Every tile in our catalogue is hand-reviewed by our team. We only list what we'd use ourselves.
                        </p>
                    </div>
                </div>
            </div>

            {/* Values section */}
            <div className="bg-stone-50 border-y border-stone-100 px-6 md:px-16 py-20">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-14">
                        <p className="text-xs font-medium tracking-widest uppercase text-stone-400 mb-3">
                            What we stand for
                        </p>
                        <h2 className="text-2xl md:text-3xl font-medium text-stone-900 tracking-tight">
                            Our values
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            {
                                title: 'Curation over quantity',
                                description: `We'd rather show you 10 perfect tiles than 1,000 mediocre ones. Every listing is intentional.`,
                                icon: (
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3l14 9-14 9V3z" />
                                    </svg>
                                )
                            },
                            {
                                title: 'Honesty in detail',
                                description: 'Real dimensions, real materials, real prices. No surprises when your order arrives.',
                                icon: (
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                )
                            },
                            {
                                title: 'Design for everyone',
                                description: `Whether you're an architect or a first-time homeowner, Tilevo is built to be approachable.`,
                                icon: (
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                )
                            },
                        ].map((value, i) => (
                            <div key={i} className="bg-white border border-stone-100 rounded-2xl p-7">
                                <div className="w-10 h-10 rounded-xl bg-stone-50 border border-stone-200 flex items-center justify-center text-stone-400 mb-5">
                                    {value.icon}
                                </div>
                                <h3 className="text-sm font-medium text-stone-900 mb-2">{value.title}</h3>
                                <p className="text-xs text-stone-400 leading-relaxed">{value.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Team section */}
            <div className="px-6 md:px-16 py-20">
                <div className="max-w-6xl mx-auto">
                    <div className="mb-14">
                        <p className="text-xs font-medium tracking-widest uppercase text-stone-400 mb-3">
                            The people
                        </p>
                        <h2 className="text-2xl md:text-3xl font-medium text-stone-900 tracking-tight">
                            Meet the team
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { name: 'Amirul Islam', role: 'Founder & CEO', initial: 'A' },
                            { name: 'Sara Chen', role: 'Head of Design', initial: 'S' },
                            { name: 'James Malik', role: 'Lead Developer', initial: 'J' },
                            { name: 'Nadia Rahman', role: 'Tile Curator', initial: 'N' },
                        ].map((member, i) => (
                            <div key={i} className="flex flex-col items-center text-center p-6 border border-stone-100 rounded-2xl hover:border-stone-200 transition-colors">
                                <div className="w-16 h-16 rounded-full bg-stone-100 border border-stone-200 flex items-center justify-center mb-4">
                                    <span className="text-xl font-medium text-stone-500">{member.initial}</span>
                                </div>
                                <p className="text-sm font-medium text-stone-900 mb-1">{member.name}</p>
                                <p className="text-xs text-stone-400">{member.role}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* CTA section */}
            <div className="border-t border-stone-100 px-6 md:px-16 py-20">
                <div className="max-w-2xl mx-auto text-center">
                    <h2 className="text-2xl md:text-3xl font-medium text-stone-900 tracking-tight mb-4">
                        Ready to find your perfect tile?
                    </h2>
                    <p className="text-sm text-stone-400 mb-8 leading-relaxed">
                        Browse our full catalogue or reach out to our team — we're always happy to help.
                    </p>
                    <div className="flex items-center justify-center gap-3">
                        <Link
                            href="/all-tiles"
                            className="bg-stone-900 text-white text-sm font-medium px-7 py-3 rounded-full hover:bg-stone-700 transition-colors"
                        >
                            Browse tiles
                        </Link>
                        <Link
                            href="/contact-us"
                            className="border border-stone-200 text-stone-600 text-sm px-7 py-3 rounded-full hover:bg-stone-50 transition-colors"
                        >
                            Contact us
                        </Link>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default AboutPage;