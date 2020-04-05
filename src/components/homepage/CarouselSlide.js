import React from 'react';
import {Carousel, Button} from 'react-bootstrap';

const CarouselSlide = () => {
  return ( 
    <Carousel>
            <Carousel.Item>
                <div className="triangleBg sam1">
                </div>
                <img
                    className="d-block w-100"
                    src="https://res.cloudinary.com/trippleninja/image/upload/v1586013502/supreme/pic4.jpg"
                    alt="Our Products"/>
                <Carousel.Caption>
                    <h3>Our Products</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua.</p>
                    <Button variant="primary">Browse</Button>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <div className="triangleBg sam2">
                </div>
                <img
                    className="d-block w-100"
                    src="https://res.cloudinary.com/trippleninja/image/upload/v1586013502/supreme/pic1.jpg"
                    alt="Our Services"/>

                <Carousel.Caption>
                    <h3>Our Services</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua.</p>
                    <Button variant="primary">Browse</Button>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <div className="triangleBg sam1">
                </div>
                <img
                    className="d-block w-100"
                    src="https://res.cloudinary.com/trippleninja/image/upload/v1586013506/supreme/pic5.jpg"
                    alt="Our Clients"/>

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
 
export default CarouselSlide;