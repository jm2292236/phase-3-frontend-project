import React, { useState, useEffect } from 'react'

import NewVehicleForm from './NewVehicleForm';
import VehicleList from './VehicleList';

function Vehicle() {
    const [vehicles, setVehicles] = useState([]);

    useEffect(() => {
        fetch("http://localhost:9292/vehicles")
        .then(response => response.json())
        .then(vehicleData => setVehicles(vehicleData))
    }, []);

    function handleAddVehicle(newVehicle) {
        const updatedVehiclesArray = [...vehicles, newVehicle];
        setVehicles(updatedVehiclesArray);
    }
        
    function handleDeleteVehicle(deletedVehicleId) {
        const updatedVehiclesArray = vehicles.filter(vehicle => vehicle.id !== deletedVehicleId);
        setVehicles(updatedVehiclesArray);
    }
        
    return (
        <div>
            <NewVehicleForm onAddVehicle={handleAddVehicle} />
            <VehicleList vehicles={vehicles} onDeleteVehicle={handleDeleteVehicle}/>
        </div>
    )
}

export default Vehicle;
