import React from 'react';
import {Container} from 'react-bootstrap';
import CarouselSlide from './homepage/CarouselSlide';
import FirstFive from './homepage/FirstFive';
import OurServices from './homepage/OurServices';
import OurClients from './homepage/OurClients';
import OurCompany from './homepage/OurCompany';
import Location from './homepage/Location';
import Recruitment from './homepage/Recruitment';

const Home = () => {
    return (
      <Container>
        <Recruitment />
        <CarouselSlide />
        <FirstFive />
        <OurServices />
        <OurClients />
        <OurCompany />
        <Location />
      </Container>
    );
}

export default Home