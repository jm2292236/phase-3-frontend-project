import React, { useState, useEffect } from 'react'
import NewServiceForm from './NewServiceForm';
import ServiceList from './ServiceList';

export default function Service() {
    const [services, setServices] = useState([]);
  
    useEffect(() => {
        fetch("http://localhost:9292/services")
            .then((r) => r.json())
            .then((servicesArray) => {setServices(servicesArray);}
        );
    }, []);
  
    function handleAddService(newService) {
      const updatedServicesArray = [...services, newService];
      setServices(updatedServicesArray);
    }
  
    function handleDeleteService(deletedServiceId) {
        const updatedServicesArray = services.filter(service => service.id !== deletedServiceId);
        setServices(updatedServicesArray);
    }
        
    return (
        <main>
            <NewServiceForm onAddService={handleAddService} />
            <ServiceList services={services} onDeleteService={handleDeleteService} />
        </main>
    );
}
