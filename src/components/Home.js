import React from 'react';
import {Carousel, Button} from 'react-bootstrap';

const Home = () => {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://res.cloudinary.com/trippleninja/image/upload/v1585388615/News%20Images/C_YNoGathering-ENG.jpg"
                    alt="First slide"/>
                <Carousel.Caption>
                    <h3>Our Products</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua.</p>
                    <Button variant="primary">Browse</Button>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://res.cloudinary.com/trippleninja/image/upload/v1585388928/News%20Images/ServicesNoGathering-ENG.jpg"
                    alt="Third slide"/>

                <Carousel.Caption>
                    <h3>Our Services</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua.</p>
                    <Button variant="primary">Browse</Button>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://res.cloudinary.com/trippleninja/image/upload/v1582368219/News%20Images/Elle-ENG.jpg"
                    alt="Third slide"/>

                <Carousel.Caption>
                    <h3>Our Clients</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua.</p>
                    <Button variant="primary">Browse</Button>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default Home