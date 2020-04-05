import React from 'react';
import { Row, Container, Image, Col, Button } from 'react-bootstrap';

const OurServices = () => {
  return ( 
    <Container>
      <Row>
        <Col className="centerImage extraPadding">
          <h3>Services</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <h6>Welding</h6>
          <Image className="roundImage" src="https://res.cloudinary.com/trippleninja/image/upload/v1586013501/supreme/pic3.jpg" roundedCircle />
        </Col>
        <Col className="centerImage extraPadding">
          <h3>We take care!</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <h6>Welding</h6>
          <Image className="roundImage" src="https://res.cloudinary.com/trippleninja/image/upload/v1586013501/supreme/pic3.jpg" roundedCircle />
        </Col>
        <Col className="centerImage extraPadding">
          <h3>Save Time & Efficiency</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <h6>Welding</h6>
          <Image className="roundImage" src="https://res.cloudinary.com/trippleninja/image/upload/v1586013501/supreme/pic3.jpg" roundedCircle />
        </Col>
      </Row>
      <Button className="getStarted">Get Started</Button>
    </Container>
   );
}
 
export default OurServices;