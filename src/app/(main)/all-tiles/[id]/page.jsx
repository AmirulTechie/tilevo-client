import { getAllTilesData } from '@/lib/data';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const TilesDetailsPage = async ({ params }) => {
    const { id } = await params;
    const allTilesInfo = await getAllTilesData();
    const singleTile = allTilesInfo.find(tile => tile.id === id);

    if (!singleTile) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-white">
                <div className="text-center">
                    <p className="text-sm text-stone-400 tracking-widest uppercase mb-3">404</p>
                    <h1 className="text-2xl font-medium text-stone-800 mb-6">Tile not found</h1>
                    <Link href="/all-tiles" className="text-sm text-stone-500 underline underline-offset-4">
                        Back to gallery
                    </Link>
                </div>
            </div>
        );
    }

    const {
        title,
        description,
        image,
        category,
        price,
        currency,
        dimensions,
        material,
        inStock,
    } = singleTile;

    const tags = singleTile.tags ?? ['Minimalist', 'Indoor', 'Premium'];

    return (
        <div className="min-h-screen bg-white">

            {/* Breadcrumb */}
            <div className="border-b border-stone-100 px-6 md:px-16 py-4">
                <div className="max-w-6xl mx-auto flex items-center gap-2 text-xs text-stone-400">
                    <Link href="/" className="hover:text-stone-700 transition-colors">Home</Link>
                    <span>/</span>
                    <Link href="/all-tiles" className="hover:text-stone-700 transition-colors">All tiles</Link>
                    <span>/</span>
                    <span className="text-stone-700">{title}</span>
                </div>
            </div>

            {/* Main content */}
            <div className="max-w-6xl mx-auto px-6 md:px-16 py-12 md:py-20">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start">

                    {/* Left — Image */}
                    <div className="relative">
                        <div className="aspect-square rounded-2xl overflow-hidden bg-stone-100 border border-stone-200">
                            {image ? (
                                <Image
                                    src={image}
                                    alt={title}
                                    fill
                                    className="object-cover"
                                />
                            ) : (
                                <div className="w-full h-full flex items-center justify-center text-stone-300">
                                    <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                </div>
                            )}
                        </div>

                        {/* Stock badge over image */}
                        <div className="absolute top-4 left-4">
                            {inStock ? (
                                <span className="inline-flex items-center gap-1.5 bg-white border border-stone-200 rounded-full px-3 py-1.5 text-xs font-medium text-emerald-700 shadow-sm">
                                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block"></span>
                                    In stock
                                </span>
                            ) : (
                                <span className="inline-flex items-center gap-1.5 bg-white border border-stone-200 rounded-full px-3 py-1.5 text-xs font-medium text-red-500 shadow-sm">
                                    <span className="w-1.5 h-1.5 rounded-full bg-red-400 inline-block"></span>
                                    Out of stock
                                </span>
                            )}
                        </div>
                    </div>

                    {/* Right — Details */}
                    <div className="flex flex-col gap-6 pt-2">

                        {/* Category */}
                        <p className="text-xs font-medium tracking-widest uppercase text-stone-400">
                            {category}
                        </p>

                        {/* Title */}
                        <h1 className="text-3xl md:text-4xl font-medium text-stone-900 leading-tight tracking-tight">
                            {title}
                        </h1>

                        {/* Price */}
                        <div className="flex items-baseline gap-2">
                            <span className="text-2xl font-medium text-stone-900">
                                {currency === 'USD' ? '$' : currency}{price}
                            </span>
                            <span className="text-sm text-stone-400">/ unit</span>
                        </div>

                        {/* Divider */}
                        <div className="border-t border-stone-100" />

                        {/* Description */}
                        <p className="text-sm text-stone-500 leading-relaxed">
                            {description}
                        </p>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2">
                            {tags.map((tag, i) => (
                                <span
                                    key={i}
                                    className="text-xs text-stone-500 border border-stone-200 rounded-full px-3 py-1"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>

                        {/* Divider */}
                        <div className="border-t border-stone-100" />

                        {/* Specs grid */}
                        <div className="grid grid-cols-2 gap-3">
                            <div className="bg-stone-50 rounded-xl p-4">
                                <p className="text-xs text-stone-400 uppercase tracking-widest mb-1">Dimensions</p>
                                <p className="text-sm font-medium text-stone-800">{dimensions}</p>
                            </div>
                            <div className="bg-stone-50 rounded-xl p-4">
                                <p className="text-xs text-stone-400 uppercase tracking-widest mb-1">Material</p>
                                <p className="text-sm font-medium text-stone-800">{material}</p>
                            </div>
                            <div className="bg-stone-50 rounded-xl p-4">
                                <p className="text-xs text-stone-400 uppercase tracking-widest mb-1">Category</p>
                                <p className="text-sm font-medium text-stone-800 capitalize">{category}</p>
                            </div>
                            <div className="bg-stone-50 rounded-xl p-4">
                                <p className="text-xs text-stone-400 uppercase tracking-widest mb-1">Currency</p>
                                <p className="text-sm font-medium text-stone-800">{currency}</p>
                            </div>
                        </div>

                        {/* CTA */}
                        <div className="flex gap-3 pt-2">
                            <button
                                className="flex-1 bg-stone-900 text-white text-sm font-medium py-3 rounded-full hover:bg-stone-700 transition-colors"
                                disabled={!inStock}
                            >
                                Add to enquiry
                            </button>
                            <Link
                                href="/all-tiles"
                                className="px-6 py-3 border border-stone-200 text-stone-600 text-sm rounded-full hover:bg-stone-50 transition-colors"
                            >
                                Back
                            </Link>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default TilesDetailsPage;