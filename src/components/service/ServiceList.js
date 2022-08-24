import React from 'react'
import ServiceCard from './ServiceCard';

function ServiceList({services, onDeleteService}) {
    return (
        <ul className="cards">
            {services.map((service) => {
                return <ServiceCard key={service.id} service={service} onDeleteService={onDeleteService} />
            })}
        </ul>
    )
}

export default ServiceList;
