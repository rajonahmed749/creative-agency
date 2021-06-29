import React from 'react';
import { Card } from 'react-bootstrap';
import Quttetion from "../../../images/quote.png";
import "./Testimonilal.css"

const TestimonialCard = (props) => {
    const { quote, name, img, position } = props.testimonial;
    return (
        <Card style={{ width: '17rem' }} className="m-2 p-3 rounded shadow  border-0">
            <Card.Img variant="top" src={Quttetion} className="qute" />
            <Card.Body>
                <Card.Text>{quote} </Card.Text>
            </Card.Body>
            <Card.Img variant="top" src={img} className="testimonialPhoto" />
            <Card.Title>{name}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">{position}</Card.Subtitle>
        </Card>
    );
};

export default TestimonialCard;