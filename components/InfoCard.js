import Image from 'next/image'
import {
    StarIcon
} from '@heroicons/react/solid'

export default function InfoCard({ img, title, description, star, price, total, location }) {

    return (
        <div className='flex px-5 py-5 md:p-10 bg-white border-b
        hover:opacity-80 hover:shadow-lg transition duration-200 ease-out
        first:border-t cursor-pointer shadow-sm rounded-md'>
            <div className='relative w-40 h-24 md:h-52 md:w-80 flex-shrink-0'>
                <Image
                    src={img}
                    layout='fill'
                    objectFit='cover'
                    className='rounded-xl'
                />
            </div>

            <div className='flex flex-grow flex-col'>

                <div className='pl-4 space-y-4 md:space-y-8 flex-grow'>
                    <p className='text-sm text-gray-600'>{location}</p>
                    <h3 className='text-lg font-semibold '>{title}</h3>
                    <p className='pl-5 text-gray-600 text-sm sm:text-md'>{description}</p>
                </div>

                <div className='flex  flex-grow justify-between items-end py-4 px-4 '>

                    <div className='flex items-center'>
                        <StarIcon className='h-6  text-red-400' />
                        <p>{star}</p>
                    </div>

                    <div className='flex  flex-col items-end'>
                        <p className='text-lg lg:text-2xl font-semibold'>{price}</p>
                        <p className='text-sm'>{total}</p>
                    </div>

                </div>


            </div>

        </div>
    )
}