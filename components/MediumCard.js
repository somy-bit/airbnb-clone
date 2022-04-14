import Image from "next/image";


export default function MediumCard({img,title}){

    return(

        <div>
            <div className="relative h-80 w-80 p-3 hover:scale-105
            transition transform duration-100 ease-out">
                <Image 
                    src={img}
                    layout='fill'
                    className="rounded-xl"
                /> 
               
            </div>
            <p className="mt-3 font-semibold text-md">{title}</p>
             
        </div>
    )
}