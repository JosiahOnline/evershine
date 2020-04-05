import React from 'react';
import { Row, Container, Image, Col, Button } from 'react-bootstrap';

const OurClients = () => {
  return ( 
    <Container>
      <h3>Our Clients</h3>
      <p>Whom we are proud to serve</p>
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
      <Button className="getStarted">ENQUIRY</Button>
    </Container>
   );
}
 
export default OurClients;