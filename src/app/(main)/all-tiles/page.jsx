import TilesCard from "@/components/shared/TilesCard";
import { getAllTilesData } from "@/lib/data";
import { Label, SearchField } from "@heroui/react";

const AllTilesPage = async() => {
    const allTiles = await getAllTilesData();
    console.log(allTiles)
    
    return (
        <div className="min-h-screen bg-base-200 p-10">
            <div className="animate__animated animate__fadeInLeft">
           <h2 className="text-2xl font-bold">All Tiles</h2>
           <p><span>{allTiles.length}</span> tiles in collection</p>
            </div>
            <div className="max-w-7xl mx-auto mt-10">
                <div className="animate__animated animate__fadeInLeft">
            <SearchField name="search">
                <Label>Search tiles</Label>
                <SearchField.Group>
                    <SearchField.SearchIcon />
                    <SearchField.Input className="w-70" placeholder="Search..." />
                    <SearchField.ClearButton />
                </SearchField.Group>
            </SearchField>
            </div>
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10 mt-10 animate__animated animate__fadeInUp">
                {
                    allTiles.map(tile=><TilesCard key={tile.id} tile={tile}></TilesCard>)
                }
           </div>
        </div>
        </div>
    );
};

export default AllTilesPage;