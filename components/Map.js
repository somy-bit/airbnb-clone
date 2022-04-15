import ReactMapGl, { Popup, Marker } from 'react-map-gl'
import { useState } from 'react'
import getCenter from 'geolib/es/getCenter'
import { LocationMarkerIcon } from '@heroicons/react/solid'

export default function Map({ results }) {

    const [selectedLoc, setSelectedLoc] = useState({})

    const coordinates = results?.map((result) => ({
        longitude: result.long,
        latitude: result.lat
    }))

    console.log(coordinates)
    const center = getCenter(coordinates);

    const [viewPort, setViewPort] = useState({
        width: '100%',
        height: '100%',
        longitude: center.longitude || 30,
        latitude: center.latitude || -28,
        zoom: 10
    })


    return (
        <ReactMapGl
            mapStyle='mapbox://styles/somy1/cl20b300r000214moz7oju30q'
            mapboxAccessToken={process.env.map_token}
            {...viewPort}
            onMove={(e) => setViewPort(e.viewState)}
        >
            {results?.map(result => (
                <div>
                    <Marker
                        latitude={result.lat}
                        longitude={result.long}
                        
                    >
                        <LocationMarkerIcon
                        onClick={() => setSelectedLoc(result)}
                        className='bg-transparent cursor-pointer text-red-400 animate-bounce h-5' />
                    </Marker>
                    {selectedLoc.long === result.long ? (
                        <Popup
                        latitude={result.lat}
                        longitude={result.long}
                        onClose={()=>setSelectedLoc({})}
                        closeOnClick={true}
                        >
                            {result.title}
                        </Popup>
                    ): null}
                </div>

            ))}
         

        </ReactMapGl>
    )
}