import React, {Component} from 'react';
import {Container} from 'react-bootstrap';
import CarouselSlide from './homepage/CarouselSlide';
import FirstFive from './homepage/FirstFive';
import OurServices from './homepage/OurServices';
import OurClients from './homepage/OurClients';
import OurCompany from './homepage/OurCompany';
import Location from './homepage/Location';
import Recruitment from './homepage/Recruitment';

class Home extends Component {
    state = {
        products: [
            {
                id: 1,
                title: 'SEW Eurodrive Gear Reducer / Helical Gear',
                link: '../product/1',
                url: 'https://res.cloudinary.com/trippleninja/image/upload/v1586434802/supreme/products/SEW_Eurodrive.png'
            }, {
                id: 2,
                title: 'ROTO Progressive Cavity Pumps',
                link: '../product/2',
                url: 'https://res.cloudinary.com/trippleninja/image/upload/v1586434801/supreme/products/ROTO.png'
            }, {
                id: 3,
                title: 'Motology / Elektrim Electric Motors',
                link: '../product/3',
                url: 'https://res.cloudinary.com/trippleninja/image/upload/v1586434802/supreme/products/Motology.png'
            }, {
                id: 4,
                title: 'Refractory Castables',
                link: '../product/4',
                url: 'https://res.cloudinary.com/trippleninja/image/upload/v1586434837/supreme/products/refractoryCastables.png'
            }, {
                id: 5,
                title: 'Main Shaft (In-House)',
                link: '../product/5',
                url: 'https://res.cloudinary.com/trippleninja/image/upload/v1586431237/supreme/products/mainShaft.png'
            }
        ]
    }
    render() {
        return (
            <Container>
                <Recruitment/>
                <CarouselSlide/>
                <FirstFive fiveProducts={this.state.products}/>
                <OurServices/>
                <OurClients/>
                <OurCompany/>
                <Location/>
            </Container>
        );
    }
}

export default Home