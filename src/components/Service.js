import React, { useState, useEffect } from 'react'

export default function Service() {
    const [service, setService] = useState([]);

    useEffect(() => {
        fetch("http://localhost:9292/services")
        .then(response => response.json())
        .then(serviceData => setService(serviceData))
    }, []);

    const servicesToDisplay = 
        service.map(service => {
            return (
                <p>{service.description}</p>
                // <ServiceForm
                //     key={service.id} 
                //     name={services.description} 
                // />
        )
    });

    return (
        <div>
            {servicesToDisplay}
        </div>
    )
}
