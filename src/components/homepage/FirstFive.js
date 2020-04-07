import React from 'react';
import {Card, CardDeck, Container, Button} from 'react-bootstrap';

const FirstFive = () => {
    return (
      <Container className="setPadding">
        <h3 className="h3Title">Our Products</h3>
        <p className="pDescription">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor.</p>
        <CardDeck>
            <Card>
                <Card.Img variant="top" src="https://res.cloudinary.com/trippleninja/image/upload/v1586013501/supreme/pic2.jpg"/>
                <Card.Body>
                    <Card.Title className="cardTitle">Shaft</Card.Title>
                    <Button className="normalBtn">Details</Button>
                </Card.Body>
            </Card>
            <Card>
                <Card.Img variant="top" src="https://res.cloudinary.com/trippleninja/image/upload/v1586013501/supreme/pic2.jpg"/>
                <Card.Body>
                    <Card.Title className="cardTitle">Worm Screw</Card.Title>
                    <Button className="normalBtn">Details</Button>
                </Card.Body>
            </Card>
            <Card>
                <Card.Img variant="top" src="https://res.cloudinary.com/trippleninja/image/upload/v1586013501/supreme/pic2.jpg"/>
                <Card.Body>
                    <Card.Title className="cardTitle">Press Cage</Card.Title>
                    <Button className="normalBtn">Details</Button>
                </Card.Body>
            </Card>
            <Card>
                <Card.Img variant="top" src="https://res.cloudinary.com/trippleninja/image/upload/v1586013501/supreme/pic2.jpg"/>
                <Card.Body>
                    <Card.Title className="cardTitle">Card title</Card.Title>
                    <Button>Details</Button>
                </Card.Body>
            </Card>
            <Card>
                <Card.Img variant="top" src="https://res.cloudinary.com/trippleninja/image/upload/v1586013501/supreme/pic2.jpg"/>
                <Card.Body>
                    <Card.Title className="cardTitle">Card title</Card.Title>
                    <Button className="normalBtn">Details</Button>
                </Card.Body>
            </Card>
        </CardDeck>
        <Button className="actionBtn">More Products</Button>
      </Container>
    );
}

export default FirstFive;