import TilesGrid from "@/components/shared/TilesGrid";
import { getAllTilesData } from "@/lib/data";

export const metadata = {
    title: 'All Tiles'
}

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
                                <span className="text-stone-700 font-medium"></span> tiles in collection
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            
            <TilesGrid allTiles={allTiles} />

        </div>
    );
};

export default AllTilesPage;