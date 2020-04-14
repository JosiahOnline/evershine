import React from 'react';
import {Container, Row, Col, Image} from 'react-bootstrap';
import Valves from './Valves';
import Instrumentation from './Instrumentation';
import Gasket from './Gasket';
import Alloy from './Alloy';
import Boiler from './Boiler';
import Pipes from './Pipes';
import Tubes from './Tubes';
import AutoControl from './AutoControl';
import Hydraulic from './Hydraulic';

const Categories = () => {
    return (
        <Container className="products">
            <Row className="setRow">
                <Col>
                  <h2 className="h2Title">Our Products</h2>
                  <Image
                    src="https://res.cloudinary.com/trippleninja/image/upload/v1586013502/supreme/pic4.jpg"
                    fluid/>
                </Col>
            </Row>
            <Row className="setRow">
                <Col><h2 className="title1">Wide Range of Products</h2></Col>
                <Col><p className="parag1">Valves, Sensors, Industrial Gasket & Packings,
                Boiler Parts & Instruments, and many more.</p></Col>
            </Row>
            <Valves />
            <Instrumentation />
            <Gasket />
            <Pipes />
            <Alloy />
            <Boiler />
            <Tubes />
            <AutoControl />
            <Hydraulic />
        </Container>
    );
}

export default Categories;