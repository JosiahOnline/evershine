import React from 'react';
import {Container} from 'react-bootstrap';
import CarouselSlide from './homepage/CarouselSlide';
import FirstFive from './homepage/FirstFive';
import OurServices from './homepage/OurServices';
import OurClients from './homepage/OurClients';
import OurCompany from './homepage/OurCompany';
import Location from './homepage/Location';
import Footer from './homepage/Footer';

const Home = () => {
    return (
      <Container>
      <CarouselSlide />
      <FirstFive />
      <OurServices />
      <OurClients />
      <OurCompany />
      <Location />
      <Footer />
      </Container>
    );
}

export default Home