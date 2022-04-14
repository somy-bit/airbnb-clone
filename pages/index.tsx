import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/Header'
import Banner from '../components/Banner'
import SmallCard from '../components/SmallCard'
import MediumCard from '../components/MediumCard'
import LargeCard from '../components/LargeCard'
import Footer from '../components/Footer'

interface myProps{
  img:string,
  title:string,
  description:string,
  buttonText : string ,
  result:any,
  mediumCardData : any
}
export default function Home(props : myProps) {
  console.log(props.mediumCardData)
  return (
    <div >
      <Head>
        <title>airbnb clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <Header placeHolder={null}/>

      <Banner />
      <main className='max-w-7xl px-5 sm:px-10 mx-auto'>
        <section>
          <h1 className='text-4xl font-semibold  p-6'>Exploring nearby</h1>
          <div className='grid space-y-3 sm:grid-cols-2 md:grid-cols-3
        xl:grid-cols-4'>

            {
              props.result?.map(({ img, location, distance }: { img: any, location: any, distance: any }) =>

              (<SmallCard
                key={img}
                img={img}
                location={location}
                distance={distance}
              />)
              )

            }
          </div>
        </section>
        <section>
          <h2 className='p-6 font-semibold text-4xl'>Live Anywhere</h2>
          <div className='flex overflow-scroll space-x-3 scrollbar-hide'>
            {props.mediumCardData?.map((item:any)=>(
                <MediumCard 
                  key={item.img}
                  img={item.img}
                  title={item.title}
                />
            ))}
          </div>
        </section>

        <LargeCard 
         img='https://links.papareact.com/4cj'
         title='The greates outdoors'
         description='wishlists created by airbnb'
         buttontext='get inspired'

        />
      </main>

      <Footer />




    </div>
  )
}



export async function getStaticProps() {

  let result = await fetch("https://links.papareact.com/pyp")
    .then(res => res.json())

    let mediumCardData = await fetch("https://links.papareact.com/zp1")
    .then(res=>res.json())

  return {
    props: {
      result,
      mediumCardData
    }
  }
}
