import Image from 'next/image'

export default function LargeCard({ img, title, description, buttontext }) {

    return (<section className='relative cursor-pointer'>
        <div className='relative h-96 min-w-[300px] my-16'>
            <Image
                src={img}
                layout='fill'
                objectFit='cover'
                className='rounded-2xl'
            />
        </div>
        <div className='absolute top-24 left-14'>
            <h2 className='text-4xl w-26'>{title}</h2>
            <p className='my-3 text-md'>{description}</p>
            <button className='bg-gray-900 py-2 px-4 text-white rounded-lg'>{buttontext}</button>
        </div>

    </section>);
}