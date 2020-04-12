import React from 'react';
import {Row, Container, Image, Col, Button} from 'react-bootstrap';

const OurClients = () => {
    return (
        <Container id="browseClients" className="setPadding ourClients">
            <h3 className="h3Title">Our Clients</h3>
            <p className="pDescription">Whom we are proud to serve:</p>
            <Row className="clientsProfile">
                <Col className="centerImage" xs={4}>
                    <Image
                        className="imageSize"
                        src="https://res.cloudinary.com/trippleninja/image/upload/v1586013501/supreme/pic3.jpg"
                        roundedCircle/>
                </Col>
                <Col className="centerImage" xs={4}>
                    <Image
                        className="imageSize"
                        src="https://res.cloudinary.com/trippleninja/image/upload/v1586013501/supreme/pic3.jpg"
                        roundedCircle/>
                </Col>
                <Col className="centerImage" xs={4}>
                    <Image
                        className="imageSize"
                        src="https://res.cloudinary.com/trippleninja/image/upload/v1586013501/supreme/pic3.jpg"
                        roundedCircle/>
                </Col>
                <Col className="centerImage" xs={4}>
                    <Image
                        className="imageSize"
                        src="https://res.cloudinary.com/trippleninja/image/upload/v1586013501/supreme/pic3.jpg"
                        roundedCircle/>
                </Col>
                <Col className="centerImage" xs={4}>
                    <Image
                        className="imageSize"
                        src="https://res.cloudinary.com/trippleninja/image/upload/v1586013501/supreme/pic3.jpg"
                        roundedCircle/>
                </Col>
                <Col className="centerImage" xs={4}>
                    <Image
                        className="imageSize"
                        src="https://res.cloudinary.com/trippleninja/image/upload/v1586013501/supreme/pic3.jpg"
                        roundedCircle/>
                </Col>
                <Col className="centerImage" xs={4}>
                    <Image
                        className="imageSize"
                        src="https://res.cloudinary.com/trippleninja/image/upload/v1586013501/supreme/pic3.jpg"
                        roundedCircle/>
                </Col>
                <Col className="centerImage" xs={4}>
                    <Image
                        className="imageSize"
                        src="https://res.cloudinary.com/trippleninja/image/upload/v1586013501/supreme/pic3.jpg"
                        roundedCircle/>
                </Col>
                <Col className="centerImage" xs={4}>
                    <Image
                        className="imageSize"
                        src="https://res.cloudinary.com/trippleninja/image/upload/v1586013501/supreme/pic3.jpg"
                        roundedCircle/>
                </Col>
            </Row>
            <div className="cardText">
                <p className="pDescription">“A BIG THANK YOU for trusting us and being an important
                    part of our journey.” - Alex Fong</p>
            </div>

            <Button className="actionBtn">ENQUIRY</Button>
        </Container>
    );
}

export default OurClients;