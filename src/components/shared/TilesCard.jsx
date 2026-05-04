import Image from "next/image";
import Link from "next/link";

const TilesCard = ({tile}) => {
    return (
        <div className=' border-base-500 shadow-xl p-5  items-center bg-10 w-full max-w-75 space-y-4 hover:cursor-pointer hover:shadow-2xl'>
                <figure className="h-65">
                    <Image src={tile.image} alt={tile.title} width={400} height={200}></Image>
                </figure>
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
                    <Link href={`/all-tiles/${tile.id}`}><button className="btn btn-xs sm:btn-sm md:btn-md">Details</button></Link>
                    </div>
                </div>
            </div>
    );
};

export default TilesCard;