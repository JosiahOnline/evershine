import React from 'react';
import {Card, CardDeck, Container, Button} from 'react-bootstrap';

const FirstFive = ({fiveProducts}) => {
    const productList = fiveProducts.length
        ? (fiveProducts.map(product => {
            return (
                <Card key={product.id}>
                    <Card.Img
                        variant="top"
                        src={product.url}/>
                    <Card.Body>
                        <Card.Title className="cardTitle">{product.title}</Card.Title>
                        <Button href={product.link}>Details</Button>
                    </Card.Body>
                </Card>
            )
        }))
        : (
            console.log("No products")
        )
    return (
        <Container id="browseProducts" className="setPadding">
            <h3 className="h3Title">Our Products</h3>
            <div className="cardText">
                <p className="pDescription">
                    Valves, Sensors, Industrial Gasket & Packings, Boiler Parts & Instruments, and
                    many more. Below is just some of our products.</p>
            </div>
            <CardDeck>
                {productList}
            </CardDeck>
            <Button className="actionBtn" href='../products'>More Products</Button>
        </Container>
    );
}

export default FirstFive;