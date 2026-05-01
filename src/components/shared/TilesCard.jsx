import Image from "next/image";

const TilesCard = ({tile}) => {
    return (
        <div className=' border-base-500 shadow-sm p-2  items-center bg-10'>
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
                        <button className='btn btn-outline'>Details</button>
                    </div>
                </div>
            </div>
    );
};

export default TilesCard;