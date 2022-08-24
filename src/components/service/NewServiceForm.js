import React, { useState } from 'react'

function NewServiceForm({onAddService}) {
    const [description, setDescription] = useState("");
  
    function handleSubmit(e) {
        e.preventDefault();
        fetch("http://localhost:9292/services", {
            method: "POST",
            headers: {
            "Content-Type": "application/json",
            },
            body: JSON.stringify({description: description}),
        })
        .then((r) => r.json())
        .then((newService) => {
            onAddService(newService)
            setDescription("")
        });
    }
  
    return (
        <div className="new-record-form">
            <h2>New Service</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="description"
                    placeholder="Service description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
                <button type="submit">Add Service</button>
            </form>
        </div>
    );
}

export default NewServiceForm;
