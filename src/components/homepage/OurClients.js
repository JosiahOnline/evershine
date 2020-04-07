import React from 'react';
import { Row, Container, Image, Col, Button } from 'react-bootstrap';

const OurClients = () => {
  return ( 
    <Container className="setPadding">
      <h3 className="h3Title">Our Clients</h3>
      <p className="pDescription">Whom we are proud to serve</p>
      <Row>
        <Col className="centerImage">
          <Image className="roundImage, imageXs" src="https://res.cloudinary.com/trippleninja/image/upload/v1586013501/supreme/pic3.jpg" roundedCircle />
        </Col>
        <Col className="centerImage">
          <Image className="roundImage imageXs" src="https://res.cloudinary.com/trippleninja/image/upload/v1586013501/supreme/pic3.jpg" roundedCircle />
        </Col>
        <Col className="centerImage">
          <Image className="roundImage imageXs" src="https://res.cloudinary.com/trippleninja/image/upload/v1586013501/supreme/pic3.jpg" roundedCircle />
        </Col>
      </Row>
      <Row>
        <Col className="centerImage">
          <Image className="roundImage imageXs" src="https://res.cloudinary.com/trippleninja/image/upload/v1586013501/supreme/pic3.jpg" roundedCircle />
        </Col>
        <Col className="centerImage">
          <Image className="roundImage imageXs" src="https://res.cloudinary.com/trippleninja/image/upload/v1586013501/supreme/pic3.jpg" roundedCircle />
        </Col>
        <Col className="centerImage">
          <Image className="roundImage imageXs" src="https://res.cloudinary.com/trippleninja/image/upload/v1586013501/supreme/pic3.jpg" roundedCircle />
        </Col>
      </Row>
      <Row>
        <Col className="centerImage">
          <Image className="roundImage imageXs" src="https://res.cloudinary.com/trippleninja/image/upload/v1586013501/supreme/pic3.jpg" roundedCircle />
        </Col>
        <Col className="centerImage">
          <Image className="roundImage imageXs" src="https://res.cloudinary.com/trippleninja/image/upload/v1586013501/supreme/pic3.jpg" roundedCircle />
        </Col>
        <Col className="centerImage">
          <Image className="roundImage imageXs" src="https://res.cloudinary.com/trippleninja/image/upload/v1586013501/supreme/pic3.jpg" roundedCircle />
        </Col>
      </Row>
      <p className="pDescription">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <Button className="actionBtn">ENQUIRY</Button>
    </Container>
   );
}
 
export default OurClients;