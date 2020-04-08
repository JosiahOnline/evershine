import React from 'react';
import {Row, Container, Col, Button, ResponsiveEmbed} from 'react-bootstrap';

const OurCompany = () => {
    return (
        <Container className="setPadding ourCompany">
            
              <h3 className="h3Title">Our Company</h3>
              <p className="pDescription">100% Satisfaction Guaranteed</p>
              <Row>
                <Col className="pDescription">Reliable</Col>
                <Col className="pDescription extraBorder">Efficiecy</Col>
                <Col className="pDescription">Innovaive</Col>
              </Row>
              <div className="cardLayout">
              <div className="youTube">
                <div
                    style={{
                    width: '100%',
                    height: 'auto'
                }}>
                    <ResponsiveEmbed aspectRatio="16by9">
                        <embed type="image/svg+xml" src="https://www.youtube.com/embed/SKfXCCDdrqM"/>
                    </ResponsiveEmbed>
                </div>
              </div>
              <p className="pDescription">Together we help, we grow and we prosper! Are you ready to work with us?</p>
            </div>
            <Button className="actionBtn">LET'S GO</Button>
        </Container>
    );
}

export default OurCompany;