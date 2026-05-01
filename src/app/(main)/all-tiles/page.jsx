import TilesCard from "@/components/shared/TilesCard";
import { getAllTilesData } from "@/lib/data";
import { Label, SearchField } from "@heroui/react";

const AllTilesPage = async () => {
    const allTiles = await getAllTilesData();

    return (
        <div className="min-h-screen bg-white">

            <div className="border-b border-stone-100 px-6 md:px-16 py-10">
                <div className="max-w-7xl mx-auto">
                    <div className="animate__animated animate__fadeInLeft">
                        <p className="text-xs font-medium tracking-widest uppercase text-stone-400 mb-2">
                            Gallery
                        </p>
                        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
                            <h1 className="text-3xl md:text-4xl font-medium text-stone-900 tracking-tight">
                                All tiles
                            </h1>
                            <p className="text-sm text-stone-400">
                                <span className="text-stone-700 font-medium">{allTiles.length}</span> tiles in collection
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="px-6 md:px-16 py-6 border-b border-stone-100 sticky top-0 bg-white/80 backdrop-blur-md z-10">
                <div className="max-w-7xl mx-auto">
                    <div className="animate__animated animate__fadeInLeft">
                        <SearchField name="search" className="w-full max-w-md">
                            <Label className="sr-only">Search tiles</Label>
                            <SearchField.Group className="flex items-center gap-2 border border-stone-200 rounded-full px-4 py-2.5 bg-stone-50 focus-within:bg-white focus-within:border-stone-400 transition-all">
                                <SearchField.SearchIcon className="text-stone-400 w-4 h-4 shrink-0" />
                                <SearchField.Input
                                    className="flex-1 bg-transparent text-sm text-stone-700 placeholder:text-stone-400 outline-none"
                                    placeholder="Search by tile name..."
                                />
                                <SearchField.ClearButton className="text-stone-400 hover:text-stone-600 transition-colors" />
                            </SearchField.Group>
                        </SearchField>
                    </div>
                </div>
            </div>

            <div className="px-6 md:px-16 py-12">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 animate__animated animate__fadeInUp">
                        {allTiles.map(tile => (
                            <TilesCard key={tile.id} tile={tile} />
                        ))}
                    </div>

                    {allTiles.length === 0 && (
                        <div className="flex flex-col items-center justify-center py-32 text-center">
                            <div className="w-16 h-16 rounded-2xl bg-stone-100 flex items-center justify-center mb-4">
                                <svg className="w-7 h-7 text-stone-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                            </div>
                            <p className="text-sm font-medium text-stone-700 mb-1">No tiles found</p>
                            <p className="text-xs text-stone-400">Try a different search term</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default AllTilesPage;