import React, { useState, useEffect } from 'react'

import VehicleForm from './VehicleForm';

function Vehicle() {
    const [vehicle, setVehicle] = useState([]);

    useEffect(() => {
        fetch("http://localhost:9292/vehicles")
        .then(response => response.json())
        .then(vehicleData => setVehicle(vehicleData))
    }, []);

    const vehiclesToDisplay = 
        vehicle.map(vehicle => {
            return (
                <>
                    <h3>
                        {vehicle.make}
                        , {vehicle.model}
                        , {vehicle.year}
                        - Plates: {vehicle.license_plate}
                    </h3>
                </>
            )
    });

    return (
        <div className='cards'>
            {vehiclesToDisplay}
        </div>
    )
}

export default Vehicle;
