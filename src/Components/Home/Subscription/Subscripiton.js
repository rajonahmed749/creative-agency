import React from 'react';
import { InputGroup, FormControl } from 'react-bootstrap';
const Subscripiton = () => {
    return (
        <div className="row d-flex justify-content-center">
            <div className="col-md-6 text-center">
                <h6 className="text-success">OUR SUBSCRIBE</h6>
                <h1>Subscribe TO Get The Latest <br /> News About Us</h1>
                <p className="text-secondary">We recommended to subscribe to our newspaper, <br /> drop your email below to get daily update about us</p>
                <InputGroup className="mb-3">
                    <FormControl
                        placeholder="Enter Your Email Address"
                    />
                    <InputGroup.Prepend>
                        <InputGroup.Text id="basic-addon1" className="btn btn-success rounded">Subscribe</InputGroup.Text>
                    </InputGroup.Prepend>
                </InputGroup>
            </div>
        </div>
    );
};

export default Subscripiton;