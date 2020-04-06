import React from 'react';
import {Card, CardDeck, Container, Button} from 'react-bootstrap';

const FirstFive = () => {
    return (
      <Container className="setPadding">
        <h1>Our Products</h1>
        <CardDeck>
            <Card>
                <Card.Img variant="top" src="https://res.cloudinary.com/trippleninja/image/upload/v1586013501/supreme/pic2.jpg"/>
                <Card.Body>
                    <Card.Title>Shaft</Card.Title>
                    <Button>Details</Button>
                </Card.Body>
            </Card>
            <Card>
                <Card.Img variant="top" src="https://res.cloudinary.com/trippleninja/image/upload/v1586013501/supreme/pic2.jpg"/>
                <Card.Body>
                    <Card.Title>Worm Screw</Card.Title>
                    <Button>Details</Button>
                </Card.Body>
            </Card>
            <Card>
                <Card.Img variant="top" src="https://res.cloudinary.com/trippleninja/image/upload/v1586013501/supreme/pic2.jpg"/>
                <Card.Body>
                    <Card.Title>Press Cage</Card.Title>
                    <Button>Details</Button>
                </Card.Body>
            </Card>
            <Card>
                <Card.Img variant="top" src="https://res.cloudinary.com/trippleninja/image/upload/v1586013501/supreme/pic2.jpg"/>
                <Card.Body>
                    <Card.Title>Card title</Card.Title>
                    <Button>Details</Button>
                </Card.Body>
            </Card>
            <Card>
                <Card.Img variant="top" src="https://res.cloudinary.com/trippleninja/image/upload/v1586013501/supreme/pic2.jpg"/>
                <Card.Body>
                    <Card.Title>Card title</Card.Title>
                    <Button>Details</Button>
                </Card.Body>
            </Card>
        </CardDeck>
        <Button className="moreProducts">More Products</Button>
      </Container>
    );
}

export default FirstFive;