import React from 'react';
import { Nav, Navbar} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import supreme from '../pictures/Supreme Logo.png'

const NavigationBar = () => {
  return (
      <Navbar fixed="top" className="colorNav" expand="lg">
        <Navbar.Brand href="/">
          <img
          src={supreme}
          width="30"
          height="30"
          className="d-inline-block align-top"
          alt="React Bootstrap logo"
        />SUPREME EVERSHINE
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="navContainer">
            <Link to="/">Home</Link>
            <Link to="/products">Products</Link>
            <Link to="services">Services</Link>
            <Link to="contact">Contact</Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
  );
}
 
export default NavigationBar;