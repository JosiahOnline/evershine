import React from 'react';
import {Col, Row, Container, Image} from 'react-bootstrap';
import location from '../../pictures/contact/location.png';
import phone from '../../pictures/contact/phone.png';
import mail from '../../pictures/contact/mail.png';
import Iframe from 'react-iframe';
const Location = () => {
    return (
        <Container className="setPadding locationMap">
            <Row className="setFlex">
                <Col>
                    <h3 className="h3Title">Location Map</h3>
                </Col>
                <Col className="myMap">
                  <Iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3969.0004402953036!2d118.04529621476725!3d5.855558695757395!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3238dbb5b8fff7d1%3A0x280fc07af7809cb9!2sVision%20Primary%20School%20Sandakan!5e0!3m2!1sen!2smy!4v1586177290736!5m2!1sen!2smy"
                      width="100%"
                      height="100%"
                      frameborder="0"
                      allowfullscreen=""
                      aria-hidden="false"
                      tabindex="0"></Iframe>
                </Col>
            </Row>
            <Row>
                <Col>
                    <h3 className="h3Title">Contact Us</h3>
                </Col>
            </Row>
            <Row className="setRow">
                <Col className="setCol"><Image className="setThumnail" src={location}/>
                    <p className="contactP">90000, Jalan Lintas Sibuga, lintas indsutrial park, 90000 Sandakan, Sabah</p>
                </Col>
                <Col className="setCol"><Image className="setThumnail" src={phone}/>
                    <p className="contactP">Phone: +6013-883-0602<br></br>Fax: +6089-xxx-xxx</p>
                </Col>
                <Col className="setCol"><Image className="setThumnail" src={mail}/>
                    <p className="contactP">sales-supreme-evershine@gmail.com</p>
                </Col>
            </Row>
        </Container>
    );
}

export default Location;