import React from 'react'
import LocationCard from './LocationCard';

function LocationList({locations, onDeleteLocation}) {
    return (
        <ul className="cards">
            {locations.map((location) => {
                return <LocationCard key={location.id} location={location} onDeleteLocation={onDeleteLocation} />;
            })}
        </ul>
    )
}

export default LocationList;
