import Header from '../components/Header'
import Footer from '../components/Footer'
import { useRouter } from 'next/router'
import { format } from 'date-fns'
import InfoCard from '../components/InfoCard'
import Map from '../components/Map'

export default function Search({ searchResults }) {

    const router = useRouter();
    console.log(searchResults);

    const { location, endDate, startDate, noOfGuests } = router.query;

    let formattedEndDate = format(new Date(endDate), 'dd MMMM yy');
    let formattedStartDate = format(new Date(startDate), 'dd MMMM yy');

    let range = `${formattedStartDate}  -  ${formattedEndDate}`
    let placeHolder = `${location} | ${formattedStartDate} - ${formattedEndDate} - ${noOfGuests} guests`
    return (<div>
        <Header placeHolder={placeHolder} />
        <main className='flex flex-col xl:flex-row'>
            <section className='px-5 md:px-7'>
                <p className='text-sm ml-3 my-3'>+300 - {range} - for {noOfGuests} guests {location}</p>
                <h1 className='text-4xl ml-4 font-semibold my-6'>Staying in {location}</h1>
                <div className=' hidden lg:inline-flex space-x-4 mb-5 justify-around '>
                    <p className='button '>cancelation flexability</p>
                    <p className='button'>type of place</p>
                    <p className='button'>price</p>
                    <p className='button'>rooms and beds</p>
                </div>

                <div className='flex flex-col'>
                    {searchResults?.map(({ img, description, location, title, star, price, total }, index) => (
                        <InfoCard
                            key={index}
                            img={img}
                            title={title}
                            description={description}
                            location={location}
                            star={star}
                            price={price}
                            total={total}
                        />
                    ))}
                </div>



            </section>

            <section className='hidden xl:inline-flex xl:min-w-[600px] '>
                <Map results={searchResults}/>
            </section>
        </main>

        <Footer />

    </div>);
}

export async function getServerSideProps(context) {

    let searchResults = await fetch('https://links.papareact.com/isz')
        .then(res => res.json())

    return {
        props: {
            searchResults
        }
    }
}