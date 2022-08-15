import React, { useState, useEffect } from 'react'

export default function Location() {
    const [location, setLocation] = useState([]);

    useEffect(() => {
        fetch("http://localhost:9292/locations")
        .then(response => response.json())
        .then(locationData => setLocation(locationData))
    }, []);

    const locationsToDisplay = 
        location.map(location => {
            return (
                <p>{location.name}</p>
            )
    });

    return (
        <div>
            {locationsToDisplay}
        </div>
    )
}
