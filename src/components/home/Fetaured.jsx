import { getTilesData } from '@/lib/data';
import React from 'react';
import TilesCard from '../shared/TilesCard';
import { FaArrowRightLong } from 'react-icons/fa6';
import Link from 'next/link';

const Featured = async () => {
    const tilesData = await getTilesData();

    return (
        <section id="featured" className="bg-white py-24 px-6 md:px-16">
            <div className="max-w-7xl mx-auto">

                {/* Section header */}
                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12 animate__animated animate__fadeInLeft">
                    <div>
                        <p className="text-xs font-medium tracking-widest uppercase text-stone-400 mb-3">
                            Curated for you
                        </p>
                        <h2 className="text-3xl md:text-4xl font-medium text-stone-900 tracking-tight">
                            Featured tiles
                        </h2>
                        <p className="text-sm text-stone-400 mt-2">
                            Handpicked from our latest collection
                        </p>
                    </div>
                    <Link
                        href="/all-tiles"
                        className="hidden md:inline-flex items-center gap-2 text-sm text-stone-500 hover:text-stone-900 transition-colors group"
                    >
                        See all tiles
                        <FaArrowRightLong className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>

                {/* Tiles grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 animate__animated animate__fadeInUp">
                    {tilesData.map(tile => (
                        <TilesCard key={tile.id} tile={tile} />
                    ))}
                </div>

                {/* Mobile CTA */}
                <div className="mt-12 flex justify-center md:hidden">
                    <Link
                        href="/all-tiles"
                        className="inline-flex items-center gap-2 text-sm font-medium bg-stone-900 text-white px-8 py-3 rounded-full hover:bg-stone-700 transition-colors group"
                    >
                        Browse all tiles
                        <FaArrowRightLong className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>

                {/* Desktop bottom CTA — subtle */}
                <div className="mt-16 pt-10 border-t border-stone-100 hidden md:flex items-center justify-between">
                    <p className="text-sm text-stone-400">
                        Showing <span className="text-stone-700 font-medium">{tilesData.length}</span> featured tiles
                    </p>
                    <Link
                        href="/all-tiles"
                        className="inline-flex items-center gap-2 text-sm font-medium bg-stone-900 text-white px-8 py-3 rounded-full hover:bg-stone-700 transition-colors group"
                    >
                        Browse all tiles
                        <FaArrowRightLong className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>

            </div>
        </section>
    );
};

export default Featured;