import React from 'react';
import {Row, Container, Col, Button, ResponsiveEmbed} from 'react-bootstrap';

const OurCompany = () => {
    return (
        <Container className="setPadding">
            <h3>Our Company</h3>
            <p>100% Satisfaction Guaranteed</p>
            <Row>
                <Col>Reliable</Col>
                <Col className="extraBorder">Efficiecy</Col>
                <Col>Innovaive</Col>
            </Row>
            <Row className="youTube">
                <div
                    style={{
                    width: '100%',
                    height: 'auto'
                }}>
                    <ResponsiveEmbed aspectRatio="16by9">
                        <embed type="image/svg+xml" src="https://www.youtube.com/embed/SKfXCCDdrqM"/>
                    </ResponsiveEmbed>
                </div>
            </Row>
            <Row>
              <Col className="centerText">Together we help, we grow and we prosper!<br></br>Are you ready to work with us?</Col>
            </Row>
            <Button className="getStarted">LET'S GO</Button>
        </Container>
    );
}

export default OurCompany;