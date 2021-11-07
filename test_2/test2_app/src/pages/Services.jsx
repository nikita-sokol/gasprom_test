import React from 'react';
import ServiceList from "../components/ServiceList";

function Services() {
    return (
        <div style={{textAlign: 'left', paddingLeft: '20px'}}>
            <h1>Список услуг</h1>
            <ServiceList />
        </div>
    );
}

export default Services;
