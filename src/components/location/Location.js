import React, { useState, useEffect } from 'react'

import LocationList from './LocationList';
import NewLocationForm from './NewLocationForm';

function Location() {
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
        
    function handleDeleteLocation(deletedLocationId) {
        const updatedLocationsArray = locations.filter(location => location.id !== deletedLocationId);
        setLocations(updatedLocationsArray);
    }
        
    return (
        <div>
            <NewLocationForm onAddLocation={handleAddLocation} />
            <LocationList locations={locations} onDeleteLocation={handleDeleteLocation}/>
        </div>
    )
}

export default Location;
