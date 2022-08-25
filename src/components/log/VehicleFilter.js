import React, { useEffect, useState } from 'react'
import VehicleLogList from './VehicleLogList';

function VehicleFilter() {
    const [vehicles, setVehicles] = useState([]);
    const [value, setValue] = useState(1);
    const [vehicleLogs, setVehicleLogs] = useState([]);

    useEffect(() => {
        fetch("http://localhost:9292/vehicles")
        .then(response => response.json())
        .then(vehiclesArray => {
            setVehicles(vehiclesArray)
            handleChange(1)
        })
    }, []);

    function handleChange(id) {
        console.log("Logs for vehicle id = ", id)
        fetch(`http://localhost:9292/vehicle_logs/${id}`)
        .then(response => response.json())
        .then(logs => {
            setVehicleLogs(logs)
        })
        setValue(id)
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
            <p>{value}</p>

            {console.log("VehicleFilter", vehicleLogs)}
            <VehicleLogList vehicleLogs={vehicleLogs}/>
        </div>
    );
  }

  export default VehicleFilter;
