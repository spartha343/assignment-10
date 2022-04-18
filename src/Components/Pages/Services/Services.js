import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Service from '../Service/Service'
const Services = () => {
    const [services, setservices] = useState([]);
    useEffect(() => {
        fetch('database.json')
            .then(res => res.json())
            .then(data => setservices(data))
    }, [])
    return (
        <Row>
            {
                services.map(service => <Service key={service.id} service={service}></Service>)
            }
        </Row>
    );
};

export default Services;