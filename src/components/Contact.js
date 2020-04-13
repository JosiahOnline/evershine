import React from 'react';
import {Container, Form, Button} from 'react-bootstrap';

const Contact = () => {
    return (
        <Container className="contactForm">
            <Form>
                <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control type="name" placeholder="Example: Mr Donald Trump"/>
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control type="email" placeholder="name@example.com"/>
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>Contact Number</Form.Label>
                    <Form.Control type="phone" placeholder="012-3456789"/>
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlSelect1">
                    <Form.Label>Your Enquiry:</Form.Label>
                    <Form.Control as="select">
                        <option>Our Products</option>
                        <option>In-House Services</option>
                        <option>On-Site Engineering</option>
                    </Form.Control>
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Additional Info</Form.Label>
                    <Form.Control
                        as="textarea"
                        rows="3"
                        placeholder="Company's website or any information that would help us 
                        understand you better."/>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </Container>
    );
}

export default Contact;