import React from 'react';
import { Card, Button } from 'react-bootstrap';
import "./Service.css"

const ServicesCard = ({ service }) => {
    return (
        <Card style={{ width: '18rem' }} className="m-2 p-3 rounded shadow  border-0">
            <Card.Img variant="top" src={service.picture} className="servicePhoto" />
            <Card.Body>
                <Card.Title>{service.service}</Card.Title>
                <Card.Text>{service.description} </Card.Text>
                <Button variant="success" className="rounded-pill">Go somewhere</Button>
            </Card.Body>
        </Card>
    );
};

export default ServicesCard;