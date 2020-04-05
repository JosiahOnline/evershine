import React from 'react';
import {Col, Row, Container, Image} from 'react-bootstrap';

const Location = () => {
    return (
        <Container>
        <Row>
        <Col><h3>Location Map</h3></Col>
            
          </Row>
          <Row>
            <Col><h3>Contact</h3></Col>
          </Row>
          <Row className="setFlex">
            <Col><Image src="../../pictures/contact/location.png" fluid /><p>90000, Jalan Lintas Sibuga, lintas indsutrial park, 90000 Sandakan, Sabah</p></Col>
            <Col><Image src="../../pictures/contact/phone.png" fluid /><p>Phone: +6013-883-0602<br></br>Fax: +6089-xxx-xxx</p></Col>
            <Col><Image src="../../pictures/contact/mail.png" fluid /><p>sales-supreme-evershine@gmail.com</p></Col>
          </Row>
        </Container>
    );
}

export default Location;