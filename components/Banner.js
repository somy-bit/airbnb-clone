import Image from "next/image"

function Banner(){

    return(
        <div className="relative h-[300px] sm:h-[400px] md:h-[500]
        xl:h-[600px] 2xl:h-[700px]">
            <Image 
            src='https://links.papareact.com/0fm'
            layout='fill'
            objectFit="cover"
            />
            <div className="absolute top-1/2 w-full text-center">
                <p className="text-sm md:text-lg ">dont you know where to go?</p>
                <button className="font-bold text-lg text-purple-500 
                bg-white py-4 px-10 rounded-full shadow-md hover:shadow-lg active:scale-90
                transition duration-200 my-2">I'm flexible</button>
            </div>
        </div>
    )
}

export default Banner