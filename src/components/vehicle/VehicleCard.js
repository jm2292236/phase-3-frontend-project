import React from 'react'

function VehicleCard({vehicle, onDeleteVehicle}) {
    const {id, make, model, year, license_plate} = vehicle;

    function handleDelete(id) {
        fetch(`http://localhost:9292/vehicles/${id}`, {
            method: "DELETE"
        })
        .then((r) => r.json())
        .then((vehicle) => onDeleteVehicle(vehicle.id));
    }

    return (
        <li className="card">
            <h4>{make}</h4>
            <h4>{model}</h4>
            <h4>{year}</h4>
            <h4>{license_plate}</h4>
            <button className="primary" onClick={() => handleDelete(id)}>Delete</button>
      </li>
      )
}

export default VehicleCard;
