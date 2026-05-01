import { getTilesData } from '@/lib/data';

import React from 'react';
import TilesCard from '../shared/TilesCard';
import { FaArrowRightLong } from 'react-icons/fa6';
import Link from 'next/link';



const Fetaured = async() => {
    const tilesData = await getTilesData();
    console.log(tilesData);
    return (
        <div className='bg-base-200 min-h-screen p-10'>
            <div className='space-y-1 mt-20'>
                <h2 className='font-semibold text-3xl'>Featured Tiles</h2>
                <div className='flex justify-between'>
                <p>Handpicked from our latest collection</p>
                </div>
            </div>
            <div className='flex flex-wrap text-center mt-10 gap-10 justify-around md:px-25'>
                {
                    tilesData.map(tile => <TilesCard key={tile.id} tile={tile}></TilesCard>)
                }
            </div>
            <div className='text-center mt-30'>
                <button className="btn btn-wide btn-outline btn-info text-md font-bold"><Link href="/all-tiles">Browse All</Link> <FaArrowRightLong></FaArrowRightLong></button>
            </div>
        </div>
    );
};

export default Fetaured;