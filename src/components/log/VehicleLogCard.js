import React from 'react'

function VehicleLogCard({log}) {
    const {
        log_type, log_date, odometer, miles_driven, quantity, price_per_gallon, total_cost, notes, service_id, location_id} 
    = log;

    const FILL_UP = 1;
    const SERVICE = 2;
    const EXPENSE = 3;

    let type = "";
    switch (log_type) {
        case FILL_UP: 
            type = "Fill-up"; 
            break
        case SERVICE: 
            type = "Service"; 
            break
        default: 
            type = "Expense"
    }

    return (
        <li className="card">
            <h4>{type}</h4>
            <h4>Date: {log_date}</h4>
            <h4>Odometer: {odometer}</h4>
            <h4>Miles driven: {miles_driven}</h4>
            <h4>{log_type === FILL_UP ? `Quantity: ${quantity}` : null}</h4>
            <h4>{log_type === FILL_UP ? `Price: ${price_per_gallon}` : null}</h4>
            <h4>Total cost: ${total_cost}</h4>
            <h4>Notes: {notes}</h4>
            <h4>Service: {log_type === SERVICE ? service_id : null}</h4>
            <h4>Location: {location_id}</h4>

            {/* <button className="primary" onClick={() => handleDelete(id)}>Delete</button> */}
            <button className="primary">Delete</button>
      </li>
      )
}

export default VehicleLogCard;
