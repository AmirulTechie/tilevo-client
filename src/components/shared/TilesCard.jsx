import Image from "next/image";

const TilesCard = ({tile}) => {
    return (
        <div className=' border-base-500 shadow-xl p-5  items-center bg-10 w-75 space-y-4 hover:cursor-pointer hover:shadow-2xl'>
                <div className="">
                    <Image src={tile.image} alt={tile.title} width={400} height={200}></Image>
                </div>
                <div className="text-left">
                <h2 className='uppercase font-bold'>
                    {tile.title}
                </h2>
                <p className='uppercase'>{tile.dimensions} · {tile.category}</p>
                </div>
                <div className='flex justify-between items-center gap-4 mt-3'>
                    <div className='font-bold'>
                        ${tile.price}
                    </div>
                    <div>
                    <button className="btn btn-xs sm:btn-sm md:btn-md">Details</button>
                    </div>
                </div>
            </div>
    );
};

export default TilesCard;