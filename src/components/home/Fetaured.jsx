import { getTilesData } from '@/lib/data';

import React from 'react';
import TilesCard from '../shared/TilesCard';



const Fetaured = async() => {
    const tilesData = await getTilesData();
    console.log(tilesData);
    return (
        <div className='bg-base-200 min-h-screen p-10'>
            <div className='space-y-1'>
                <h2 className='font-semibold text-3xl'>Featured Tiles</h2>
                <div className='flex justify-between'>
                <p>Handpicked from our latest collection</p>
                </div>
            </div>
            <div className='flex flex-wrap text-center mt-50 gap-10 justify-around'>
                {
                    tilesData.map(tile => <TilesCard key={tile.id} tile={tile}></TilesCard>)
                }
            </div>
        </div>
    );
};

export default Fetaured;