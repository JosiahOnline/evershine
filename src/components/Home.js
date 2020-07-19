import React, {Component} from 'react';
import {Container, CardDeck, Button} from 'react-bootstrap';
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
        id: '1',
        title:'SEW Eurodrive Gear Reducer / Helical Gear',
        link:'../product/SEW Eurodrive Gear Reducer or Helical Gear',
        image:'https://res.cloudinary.com/trippleninja/image/upload/v1586434802/supreme/products/SEW_Eurodrive.png'
      },
      {
        id:'2',
        title:'ROTO Progressive Cavity Pumps',
        link:'../product/ROTO Progressive Cavity Pumps',
        image:'https://res.cloudinary.com/trippleninja/image/upload/v1586434801/supreme/products/ROTO.png'
      },
      {
        id:'3',
        title:'Motology / Elektrim Electric Motors',
        link:'../product/Motology or Elektrim Electric Motors',
        image:'https://res.cloudinary.com/trippleninja/image/upload/v1586434802/supreme/products/Motology.png'
      },
      {
        id:'4',
        title:'Refractory Castables',
        link:'../product/Refractory Castables',
        image:'https://res.cloudinary.com/trippleninja/image/upload/v1586434837/supreme/products/refractoryCastables.png'
      },
      {
        id:'5',
        title:'Main Shaft (In-House)',
        link:'../product/Main Shaft In-House Prouction',
        image:'https://res.cloudinary.com/trippleninja/image/upload/v1586431237/supreme/products/mainShaft.png'
      }]
    }
  
  
  
    render() {
        return (
            <Container>
                <Recruitment/>
                <CarouselSlide/>
                <div id="browseProducts" className="setPadding">
                    <h3 className="h3Title">Our Products</h3>
                    <div className="cardText">
                        <p className="pDescription">
                            Valves, Sensors, Industrial Gasket & Packings, Boiler Parts & Instruments, and
                            many more. Below is just some of our products.</p>
                    </div>
                    <CardDeck>
                    {this.state.products.map(product =>
                      <FirstFive key={product.id.toString()}title={product.title} link={product.link} image={product.image}/>
                    )}
                    </CardDeck>
                    <Button className="actionBtn" href='../products'>More Products</Button>
                </div>
                <OurServices/>
                <OurClients/>
                <OurCompany/>
                <Location/>
            </Container>
        );
    }
}

export default Home