import React, { useState, useEffect } from 'react'

import VehicleForm from './VehicleForm';

function Vehicle() {
    const [vehicle, setVehicle] = useState([]);

    // Get the properties in the user's porfolio
    useEffect(() => {
        fetch("http://localhost:9292/vehicles")
        .then(response => response.json())
        .then(vehicleData => setVehicle(vehicleData))
    }, []);

    const vehiclesToDisplay = 
        vehicle.map(vehicle => {
            return (
                <VehicleForm
                    key={vehicle.id} 
                    make={vehicle.make} 
                    model={vehicle.model}
                    year={vehicle.year}
                    license_plate={vehicle.license_plate}
                />
        )
    });

    return (
        <div className="vehicle-view">
            <div className='cards'>
                {vehiclesToDisplay}
            </div>
        </div>
    )
}

export default Vehicle;
