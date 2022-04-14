import Image from "next/image"
import {
    SearchIcon,
    GlobeAltIcon,
    UserCircleIcon,
    MenuIcon,
    UsersIcon
} from '@heroicons/react/solid'
import { useState } from 'react'
import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'
import { DateRangePicker } from 'react-date-range';
import { useRouter } from "next/dist/client/router"


function Header({placeHolder}) {

    const [searchInput, setSearchInput] = useState('');
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [noOfGuests, setNoOfGuests] = useState(1);

    const router = useRouter();

    const selectionRanges = {
        key: 'selection',
        startDate: startDate,
        endDate: endDate
    }

    const handleChanges = (ranges) => {

        setStartDate(ranges.selection.startDate);
        setEndDate(ranges.selection.endDate);
    }

    const resetInput = () => {

        setSearchInput("");
    }

const search = ()=>{

    router.push({
        pathname:'/search',
        query:{
            startDate:startDate.toISOString(),
            endDate : endDate.toISOString(),
            noOfGuests : noOfGuests,
            location : searchInput
        }
    })
}

    return (
        <header className="bg-white shadow-md py-5 px-5 grid grid-cols-3 z-50 sticky top-0">
            <div onClick={()=>router.push('/')} className="relative flex items-center
              h-10 cursor-pointer">
                <Image
                    src="https://links.papareact.com/qd3"
                    layout="fill"
                    objectFit="contain"
                    objectPosition="left"
                />
            </div>
            <div className="flex py-2 shadow-sm rounded-full md:border-2">
                <input
                    value={searchInput}
                    onChange={(e) => setSearchInput(e.target.value)}
                    type='text' 
                    placeholder={placeHolder || "start your search" }
                    className="
             outline-none flex-grow bg-transparent pl-4 "/>
                <SearchIcon className="hidden md:inline-flex h-8 bg-red-500 md:mr-4 rounded-full p-2 text-white" />
            </div>
            <div className="cursor-pointer flex text-gray-500 justify-end items-center
         space-x-2">
                <p className="hidden md:inline">become a host</p>
                <GlobeAltIcon className="h-6" />
                <div className="flex items-center border-2 p-2 rounded-full space-x-1">
                    <MenuIcon className="h-6" />
                    <UserCircleIcon className="h-6" />
                </div>
            </div>
            {searchInput &&
                <div className="flex flex-col col-span-3 mx-auto">
                    <DateRangePicker
                        ranges={[selectionRanges]}
                        rangeColors={['#FD5B61']}
                        minDate={new Date()}
                        onChange={handleChanges}
                    />

                    <div className="flex border-b mb-4">
                        <p className="text-2xl font-semibold flex-grow">Number of Guests</p>
                        <UsersIcon className="h-8" />
                        <input
                            type='number'
                            value={noOfGuests}
                            min={1}
                            onChange={e => setNoOfGuests(e.target.value)}
                            className='outline-none pl-2 w-12 text-red-400 text-lg font-semibold'
                        />
                    </div>
                    <div className="flex">
                        <button onClick={resetInput} className="flex-grow text-gray-900 text-lg">cancel</button>
                        <button onClick={search} className="flex-grow text-red-400 text-lg">search</button>
                    </div>

                </div>
            }

        </header>
    )
}

export default Header;
