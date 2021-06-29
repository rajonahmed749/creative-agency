import React from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import logo from "../../../images/logo.PNG";
import "./Menubar.css"

const Menubar = () => {
    return (
        <Navbar bg="light" expand="lg" >
            <img src={logo} alt="" id="logo" className="ml-5" />
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="m-auto">
                    <Nav.Link href="#home" className="mr-4">Why Allies?</Nav.Link>
                    <Nav.Link href="#features" className="mr-4">Features</Nav.Link>
                    <Nav.Link href="#pricing" className="mr-4">Pricing</Nav.Link>
                    <Nav.Link href="#contact" className="mr-4">Contact</Nav.Link>
                    <Nav.Link href="#login" className="mr-5"><Button variant="success" className="ml-5 rounded-pill">Login</Button></Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Menubar;