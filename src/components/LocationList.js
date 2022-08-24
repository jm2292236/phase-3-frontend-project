import React from 'react'
import LocationCard from './LocationCard';

export default function LocationList(locations) {
    return (
        <ul className="cards">
            {locations.map((location) => {
                return <LocationCard key={location.id} location={location} />;
            })}
        </ul>
    )
}
