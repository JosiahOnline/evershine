import React from 'react';
import { Nav, Navbar} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import supreme from '../pictures/Supreme Logo.png'

const NavigationBar = () => {
  return (
      <Navbar fixed="top" className="colorNav" expand="lg" collapseOnSelect >
        <Navbar.Brand href="/">
          <img
          src={supreme}
          width="30"
          height="30"
          className="d-inline-block align-top"
          alt="React Bootstrap logo"
        />SUPREME EVERSHINE
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto navContainer">
            <Nav.Link eventKey="1" as={Link} to="/">Home</Nav.Link>
            <Nav.Link eventKey="2" as={Link} to="/products">Products</Nav.Link>
            <Nav.Link eventKey="3" as={Link} to="services">Services</Nav.Link>
            <Nav.Link eventKey="4" as={Link} to="contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
  );
}
 
export default NavigationBar;