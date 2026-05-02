/* eslint-disable react/no-unescaped-entities */
'use client';

import { useState } from 'react';
import TilesCard from '@/components/shared/TilesCard';
import { Label, SearchField } from '@heroui/react';

const TilesGrid = ({ allTiles }) => {
    const [query, setQuery] = useState('');

    const filtered = allTiles.filter(tile =>
        tile.title.toLowerCase().includes(query.toLowerCase()) ||
        tile.category.toLowerCase().includes(query.toLowerCase())
    );

    return (
        <>

            <div className="px-6 md:px-16 py-6 border-b border-stone-100 sticky top-14 bg-white/80 backdrop-blur-md z-10 animate__animated animate__fadeInLeft">
                <div className="max-w-7xl mx-auto">
                    <SearchField
                        name="search"
                        className="w-full max-w-md"
                        value={query}
                        onChange={setQuery}
                    >
                        <Label className="sr-only">Search tiles</Label>
                        <SearchField.Group className="flex items-center gap-2 border border-stone-200 rounded-full px-4 py-2.5 bg-stone-50 focus-within:bg-white focus-within:border-stone-400 transition-all">
                            <SearchField.SearchIcon className="text-stone-400 w-4 h-4 shrink-0" />
                            <SearchField.Input
                                className="flex-1 bg-transparent text-sm text-stone-700 placeholder:text-stone-400 outline-none"
                                placeholder="Search by name or category..."
                            />
                            <SearchField.ClearButton className="text-stone-400 hover:text-stone-600 transition-colors" />
                        </SearchField.Group>
                    </SearchField>
                </div>
            </div>

            <div className="px-6 md:px-16 py-12">
                <div className="max-w-7xl mx-auto">

                    {query && (
                        <p className="text-xs text-stone-400 mb-6">
                            {filtered.length > 0
                                ? <><span className="text-stone-700 font-medium">{filtered.length}</span> result{filtered.length !== 1 ? 's' : ''} for "<span className="text-stone-700">{query}</span>"</>
                                : <>No results for <span className="text-stone-700">{query}</span>"</>
                            }
                        </p>
                    )}

                    {filtered.length > 0 ? (
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12 animate__animated animate__fadeInUp">
                            {filtered.map(tile => (
                                <TilesCard key={tile.id} tile={tile} />
                            ))}
                        </div>
                    ) : (
                        <div className="flex flex-col items-center justify-center py-32 text-center">
                            <div className="w-16 h-16 rounded-2xl bg-stone-100 flex items-center justify-center mb-4">
                                <svg className="w-7 h-7 text-stone-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                            </div>
                            <p className="text-sm font-medium text-stone-700 mb-1">No tiles found</p>
                            <p className="text-xs text-stone-400">Try a different name or category</p>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default TilesGrid;