import React from 'react';
import { Nav, Navbar} from 'react-bootstrap';

const NavigationBar = () => {
  return (
      <Navbar fixed="top" className="colorNav" expand="lg">
        <Navbar.Brand href="/">SUPREME EVERSHINE</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/products">Products</Nav.Link>
            <Nav.Link href="services">Services</Nav.Link>
            <Nav.Link href="contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
  );
}
 
export default NavigationBar;