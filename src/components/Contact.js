import React from 'react';
import {Container} from 'react-bootstrap';
import ContactForm from './Form';
import Location from './homepage/Location';

const Contact = () => {
    return (
        <Container className="contactForm">
            <ContactForm />
            <Location />
        </Container>
    );
}

export default Contact;