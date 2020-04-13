import React from 'react';
import {Card, CardDeck, Container, Button} from 'react-bootstrap';

const FirstFive = () => {
    return (
        <Container id="browseProducts" className="setPadding">
            <h3 className="h3Title">Our Products</h3>
            <div className="cardText">
                <p className="pDescription">
                Valves, Sensors, Industrial Gasket & Packings,
                Boiler Parts & Instruments, and many more. Below is just some of our products.</p>
            </div>
            <CardDeck>
                <Card>
                    <Card.Img
                        variant="top"
                        src="https://res.cloudinary.com/trippleninja/image/upload/v1586434802/supreme/products/SEW_Eurodrive.png"/>
                    <Card.Body>
                        <Card.Title className="cardTitle">SEW Eurodrive Gear Reducer / Helical Gear</Card.Title>
                        <Button>Details</Button>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Img
                        variant="top"
                        src="https://res.cloudinary.com/trippleninja/image/upload/v1586434801/supreme/products/ROTO.png"/>
                    <Card.Body>
                        <Card.Title className="cardTitle">ROTO Progressive Cavity Pumps</Card.Title>
                        <Button className="normalBtn">Details</Button>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Img
                        variant="top"
                        src="https://res.cloudinary.com/trippleninja/image/upload/v1586434802/supreme/products/Motology.png"/>
                    <Card.Body>
                        <Card.Title className="cardTitle">Motology / Elektrim Electric Motors</Card.Title>
                        <Button className="normalBtn">Details</Button>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Img
                        variant="top"
                        src="https://res.cloudinary.com/trippleninja/image/upload/v1586434837/supreme/products/refractoryCastables.png"/>
                    <Card.Body>
                        <Card.Title className="cardTitle">Refractory Castables</Card.Title>
                        <Button className="normalBtn">Details</Button>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Img
                        variant="top"
                        src="https://res.cloudinary.com/trippleninja/image/upload/v1586431237/supreme/products/mainShaft.png"/>
                    <Card.Body>
                        <Card.Title className="cardTitle">Main Shaft<br></br>(In-House Production)</Card.Title>
                        <Button className="normalBtn">Details</Button>
                    </Card.Body>
                </Card>
            </CardDeck>
            <Button className="actionBtn" href='../products'>More Products</Button>
        </Container>
    );
}

export default FirstFive;