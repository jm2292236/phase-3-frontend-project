import React from 'react'

function LocationCard({location, onDeleteLocation}) {
    const {id, name} = location;

    function handleDelete(id) {
        fetch(`http://localhost:9292/locations/${id}`, {
            method: "DELETE"
        })
        .then((r) => r.json())
        .then((location) => onDeleteLocation(location.id));
    }

    return (
        <li className="card">
            <h4>{name}</h4>
            <button className="primary" onClick={() => handleDelete(id)}>Delete</button>
      </li>
      )
}

export default LocationCard;
