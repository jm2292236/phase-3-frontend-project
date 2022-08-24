import React from 'react'

function ServiceCard({service, onDeleteService}) {
    const {id, description} = service;

    function handleDelete(id) {
        fetch(`http://localhost:9292/services/${id}`, {
            method: "DELETE"
        })
        .then((r) => r.json())
        .then((service) => onDeleteService(service.id));
    }

    return (
        <li className="card">
            <h4>{description}</h4>
            <button className="primary" onClick={() => handleDelete(id)}>Delete</button>
      </li>
      )
}

export default ServiceCard;
