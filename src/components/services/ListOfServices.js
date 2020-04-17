import React from 'react';
import {Container, Row, Col, Image} from 'react-bootstrap';
import InHouse from './InHouse';
import OnSite from './OnSite';

const ListOfServices = () => {
  return ( 
    <Container className="products">
            <Row className="setRow">
                <Col>
                  <h2 className="h2Title">Our Services</h2>
                  <Image
                    src="https://res.cloudinary.com/trippleninja/image/upload/v1586693374/supreme/pic6.jpg"
                    fluid/>
                </Col>
            </Row>
            <Row className="setRow">
                <Col><h2 className="title1">Quality Reassurance</h2></Col>
                <Col><p className="parag1">Through years of skills and experience acquired in
                    this field, here are the services we offered without compromise!</p></Col>
            </Row>
            <InHouse />
            <OnSite />
    </Container>
   );
}
 
export default ListOfServices;