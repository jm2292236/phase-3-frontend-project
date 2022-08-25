import React, { useState } from 'react'

function NewVehicleForm({onAddVehicle}) {
    const [make, setMake] = useState("");
    const [model, setModel] = useState("");
    const [year, setYear] = useState(2022);
    const [license_plate, setLicense_Plate] = useState("");
  
    function handleSubmit(e) {
        e.preventDefault();
        fetch("http://localhost:9292/vehicles", {
            method: "POST",
            headers: {
            "Content-Type": "application/json",
            },
            body: JSON.stringify({make: make, model: model, year: year, license_plate: license_plate}),
        })
        .then((r) => r.json())
        .then((newVehicle) => {
            onAddVehicle(newVehicle)
            setMake("")
            setModel("")
            setYear(2022)
            setLicense_Plate("")
        });
    }
  
    return (
        <div className="new-record-form">
            <h2>New Vehicle</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="make"
                    placeholder="Make"
                    value={make}
                    onChange={(e) => setMake(e.target.value)}
                />
                <input
                    type="text"
                    name="model"
                    placeholder="Model"
                    value={model}
                    onChange={(e) => setModel(e.target.value)}
                />
                <input
                    type="number"
                    name="year"
                    placeholder="Year"
                    value={year}
                    onChange={(e) => setYear(e.target.value)}
                />
                <input
                    type="text"
                    name="license_plate"
                    placeholder="License plates"
                    value={license_plate}
                    onChange={(e) => setLicense_Plate(e.target.value)}
                />
                <button type="submit">Add Vehicle</button>
            </form>
        </div>
    );
  }

  export default NewVehicleForm;
