import React, { useEffect, useState } from 'react'
import VehicleLogList from './VehicleLogList';

function VehicleFilter() {
    const [vehicles, setVehicles] = useState([]);
    const [value, setValue] = useState(1);
    const [vehicleLogs, setVehicleLogs] = useState([]);
    const [vehicleMpg, setVehicleMpg] = useState(0.0);

    useEffect(() => {
        fetch("http://localhost:9292/vehicles")
        .then(response => response.json())
        .then(vehiclesArray => {
            setVehicles(vehiclesArray)
            handleChange(1)
        })
    }, []);

    function handleChange(id) {
        fetch(`http://localhost:9292/vehicle_logs/${id}`)
        .then(response => response.json())
        .then(logs => {
            setVehicleLogs(logs)
        })
        setValue(id)

        fetch(`http://localhost:9292/vehicle_logs/average_mpg/${id}`)
        .then(response => response.json())
        .then(value => {
            setVehicleMpg(value)
        })
    };

    return (
        <div className="new-record-form">
            <h2>Select Vehicle</h2>
            <select value={value} onChange={(e) => handleChange(e.target.value)}>
                {vehicles.map(vehicle => (
                    <option value={vehicle.id} key={vehicle.id}>
                        {`${vehicle.make} (${vehicle.model}) ${vehicle.year} - ${vehicle.license_plate}`}
                    </option>
                ))}
            </select>
            <p>Average MPG: {vehicleMpg !== null ? parseFloat(vehicleMpg).toFixed(2) : "Undetermined"}</p>

            <VehicleLogList vehicleLogs={vehicleLogs}/>
        </div>
    );
  }

  export default VehicleFilter;
