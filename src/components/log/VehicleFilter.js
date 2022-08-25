import React, { useEffect, useState } from 'react'

function VehicleFilter() {
    const [vehicles, setVehicles] = useState([]);
    const [value, setValue] = useState(-1);
    const [vehicleLogs, setVehicleLogs] = useState([]);

    useEffect(() => {
        fetch("http://localhost:9292/vehicles")
        .then(response => response.json())
        .then(vehicleData => {
            setVehicles(vehicleData)
        })
    }, []);

    useEffect(() => {
        fetch("`http://localhost:9292/vehicle_logs/${value}`")
        .then(response => response.json())
        .then(vehicleLogs => {
            setVehicleLogs(vehicleLogs)
        })
    }, []);

    function handleOnChange(e) {
        setValue(e.target.value)
    }

    return (
        <div className="new-record-form">
            <h2>Select Vehicle</h2>
            <p>{value}</p>
            <select value={value} onChange={handleOnChange}>
                {vehicles.map(vehicle => (
                    <option value={vehicle.id}>
                        {`${vehicle.make} (${vehicle.model}) ${vehicle.year} - ${vehicle.license_plate}`}
                    </option>
                ))}
            </select>
        </div>
    );
  }

  export default VehicleFilter;
