import React from 'react';
import { Button } from 'react-bootstrap';
import picture from "../../../images/Okay.PNG";
import "./Header.css"

const Header = () => {
    return (
        <main className="row d-flex align-items-center justify-content-center headerMain">
            <div className="col-md-4 offset-md-1">
                <h1>Smart Ideas <br /> For Your  Brand <br /> Are Here</h1>
                <p className="text-secondary">Our motto is to fulfill customer demand by making <br /> them satisfied with growing their business</p>
                <Button variant="success" className="mt-2 rounded-pill">Get Started</Button>
                <Button variant="link" className="ml-3 mt-2 rounded-pill">Watch Video</Button>
            </div>
            <div className="col-md-6">
                <img src={picture} alt="headerPicture" className="img-fluid headerPicture" />
            </div>
        </main>
    );
};

export default Header;