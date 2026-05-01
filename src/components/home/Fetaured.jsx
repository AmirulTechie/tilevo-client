import Link from 'next/link';
import React from 'react';

const Fetaured = () => {
    return (
        <div className='bg-base-200 min-h-screen p-10'>
            <div className='space-y-1'>
                <h2 className='font-semibold text-3xl'>Featured Tiles</h2>
                <div className='flex justify-between'>
                <p>Handpicked from our latest collection</p>
                <Link href="/all-tiles"><p className='underline'>See All Tiles</p></Link>
                </div>
            </div>
        </div>
    );
};

export default Fetaured;