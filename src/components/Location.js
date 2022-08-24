import React, { useState, useEffect } from 'react'
import LocationCard from './LocationCard';

import LocationList from './LocationList';
import NewLocationForm from './NewLocationForm';

export default function Location() {
    const [locations, setLocations] = useState([]);

    useEffect(() => {
        fetch("http://localhost:9292/locations")
        .then((r) => r.json())
        .then(locationData => {setLocations(locationData)})
    }, []);

    function handleAddLocation(newLocation) {
        const updatedLocationsArray = [...locations, newLocation];
        setLocations(updatedLocationsArray);
    }
        
    function handleDeleteLocation() {
        const updatedLocationsArray = [...locations];
        setLocations(updatedLocationsArray);
    }
        
    const locationsToDisplay =
        locations.map(location => {
            return (
                <ul className="cards">
                    {<LocationCard key={location.id} location={location} onDeleteLocation={handleDeleteLocation}/>}
                </ul>
            )
        }
    );

    return (
        <div>
            {console.log("Location", locations)}
            <NewLocationForm onAddLocation={handleAddLocation} />
            {/* <LocationList locations={locations} /> */}
            {locationsToDisplay}
        </div>
    )
}
