import React from 'react';
import {Carousel, Button} from 'react-bootstrap';

import pic1 from '../../pictures/carousel/pic1.jpg'
import pic2 from '../../pictures/carousel/pic2.jpg'
import pic3 from '../../pictures/carousel/pic3.jpg'


const CarouselSlide = () => {
  
  return ( 
    <Carousel>
            <Carousel.Item>
                {/* <div className="triangleBg sam1">
                </div> */}
                <img
                    className="d-block w-100"
                    src={pic1}
                    alt="Our Products"/>
                <Carousel.Caption>
                    <h3 className="h3Title">Our Products</h3>
                    <p className="pDescription">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor.</p>
                    <Button className="normalBtn" variant="primary" href="#browseProducts">Browse</Button>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                {/* <div className="triangleBg sam2">
                </div> */}
                <img
                    className="d-block w-100"
                    src={pic2}
                    alt="Our Services"/>

                <Carousel.Caption>
                    <h3 className="h3Title">Our Services</h3>
                    <p className="pDescription">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor.</p>
                    <Button className="normalBtn" variant="primary" href="#browseServices">Browse</Button>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                {/* <div className="triangleBg sam1">
                </div> */}
                <img
                    className="d-block w-100"
                    src={pic3}
                    alt="Our Clients"/>

                <Carousel.Caption>
                    <h3 className="h3Title">Our Clients</h3>
                    <p className="pDescription">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor.</p>
                    <Button className="normalBtn" variant="primary" href="#browseClients">Browse</Button>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
   );
}
 
export default CarouselSlide;