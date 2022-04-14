import Image from "next/image";

export default function SmallCard({ img, location, distance }) {

    return (
        <div className="flex items-center cursor-pointer
        space-x-4 rounded-lg hover:bg-gray-100 hover:scale-105
        transition duration-100 ease-out my-3">
            
            <div className="relative h-16 w-16">
                <Image
                    src={img}
                    layout='fill'
                    className="rounded-lg"
                />
            </div>

            <div>
                <p className="text-lg">{location}</p>
                <p className="text-gray-500">{distance}</p>
            </div>
        </div>
    )
}