import React, { useState } from 'react'

export default function NewLocationForm(onAddLocation) {
    const [name, setName] = useState("");
  
    function handleSubmit(e) {
        e.preventDefault();
        fetch("http://localhost:9292/locations", {
            method: "POST",
            headers: {
            "Content-Type": "application/json",
            },
            body: JSON.stringify({name: name}),
        })
        .then((r) => r.json())
        .then((newLocation) => onAddLocation(newLocation));
    }
  
    return (
        <div className="new-location-form">
            <h2>New Location</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    placeholder="Location name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <button type="submit">Add Location</button>
            </form>
        </div>
    );
  }
