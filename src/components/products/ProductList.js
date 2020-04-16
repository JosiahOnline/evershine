import React, {Component} from 'react';
import {Container, Row, Col, Image} from 'react-bootstrap';
import Categories from './Categories';

class ProductList extends Component {
    state = {
        valves: [
            {
                id: 1,
                name: 'Valves',
                link: '../product/valves/1',
                url: 'https://res.cloudinary.com/trippleninja/image/upload/v1586013501/supreme/pic3.jpg'
            },
            {
                id: 2,
                name: 'Valves',
                link: '../product/valves/2',
                url: 'https://res.cloudinary.com/trippleninja/image/upload/v1586013501/supreme/pic3.jpg'
            },
            {
                id: 3,
                name: 'Valves',
                link: '../product/valves/3',
                url: 'https://res.cloudinary.com/trippleninja/image/upload/v1586013501/supreme/pic3.jpg'
            },
            {
                id: 4,
                name: 'Valves',
                link: '../product/valves/4',
                url: 'https://res.cloudinary.com/trippleninja/image/upload/v1586013501/supreme/pic3.jpg'
            },
            {
                id: 5,
                name: 'Valves',
                link: '../product/valves/5',
                url: 'https://res.cloudinary.com/trippleninja/image/upload/v1586013501/supreme/pic3.jpg'
            },
            {
                id: 6,
                name: 'Valves',
                link: '../product/valves/6',
                url: 'https://res.cloudinary.com/trippleninja/image/upload/v1586013501/supreme/pic3.jpg'
            }
        ],
        instrumentation: [
            {
              id: 1,
              name: 'Instrumentation',
              link: '../product/instrumentation/1',
              url: 'https://res.cloudinary.com/trippleninja/image/upload/v1586013501/supreme/pic3.jpg'
            },
            {
              id: 2,
              name: 'Instrumentation',
              link: '../product/instrumentation/2',
              url: 'https://res.cloudinary.com/trippleninja/image/upload/v1586013501/supreme/pic3.jpg'
            },
            {
              id: 3,
              name: 'Instrumentation',
              link: '../product/instrumentation/3',
              url: 'https://res.cloudinary.com/trippleninja/image/upload/v1586013501/supreme/pic3.jpg'
            },
            {
              id: 4,
              name: 'Instrumentation',
              link: '../product/instrumentation/4',
              url: 'https://res.cloudinary.com/trippleninja/image/upload/v1586013501/supreme/pic3.jpg'
            },
            {
              id: 5,
              name: 'Instrumentation',
              link: '../product/instrumentation/5',
              url: 'https://res.cloudinary.com/trippleninja/image/upload/v1586013501/supreme/pic3.jpg'
            },
            {
              id: 6,
              name: 'Instrumentation',
              link: '../product/instrumentation/6',
              url: 'https://res.cloudinary.com/trippleninja/image/upload/v1586013501/supreme/pic3.jpg'
            }
        ],
        gasket: [
            {
              id: 1,
              name: 'Gasket',
              link: '../product/gasket/1',
              url: 'https://res.cloudinary.com/trippleninja/image/upload/v1586013501/supreme/pic3.jpg'
            },
            {
              id: 2,
              name: 'Gasket',
              link: '../product/gasket/2',
              url: 'https://res.cloudinary.com/trippleninja/image/upload/v1586013501/supreme/pic3.jpg'
            },
            {
              id: 3,
              name: 'Gasket',
              link: '../product/gasket/3',
              url: 'https://res.cloudinary.com/trippleninja/image/upload/v1586013501/supreme/pic3.jpg'
            },
            {
              id: 4,
              name: 'Gasket',
              link: '../product/gasket/4',
              url: 'https://res.cloudinary.com/trippleninja/image/upload/v1586013501/supreme/pic3.jpg'
            },
            {
              id: 5,
              name: 'Gasket',
              link: '../product/gasket/5',
              url: 'https://res.cloudinary.com/trippleninja/image/upload/v1586013501/supreme/pic3.jpg'
            },
            {
              id: 6,
              name: 'Gasket',
              link: '../product/gasket/6',
              url: 'https://res.cloudinary.com/trippleninja/image/upload/v1586013501/supreme/pic3.jpg'
            }
        ],
        pipes: [
          {
            id: 1,
            name: 'Pipes',
            link: '../product/pipes/1',
            url: 'https://res.cloudinary.com/trippleninja/image/upload/v1586013501/supreme/pic3.jpg'
          },
          {
            id: 2,
            name: 'Pipes',
            link: '../product/pipes/2',
            url: 'https://res.cloudinary.com/trippleninja/image/upload/v1586013501/supreme/pic3.jpg'
          },
          {
            id: 3,
            name: 'Pipes',
            link: '../product/pipes/3',
            url: 'https://res.cloudinary.com/trippleninja/image/upload/v1586013501/supreme/pic3.jpg'
          },
          {
            id: 4,
            name: 'Pipes',
            link: '../product/pipes/4',
            url: 'https://res.cloudinary.com/trippleninja/image/upload/v1586013501/supreme/pic3.jpg'
          },
          {
            id: 5,
            name: 'Pipes',
            link: '../product/pipes/5',
            url: 'https://res.cloudinary.com/trippleninja/image/upload/v1586013501/supreme/pic3.jpg'
          },
          {
            id: 6,
            name: 'Pipes',
            link: '../product/pipes/6',
            url: 'https://res.cloudinary.com/trippleninja/image/upload/v1586013501/supreme/pic3.jpg'
          }
      ],
      alloy: [
        {
          id: 1,
          name: 'Alloy',
          link: '../product/alloy/1',
          url: 'https://res.cloudinary.com/trippleninja/image/upload/v1586013501/supreme/pic3.jpg'
        },
        {
          id: 2,
          name: 'Alloy',
          link: '../product/alloy/2',
          url: 'https://res.cloudinary.com/trippleninja/image/upload/v1586013501/supreme/pic3.jpg'
        },
        {
          id: 3,
          name: 'Alloy',
          link: '../product/alloy/3',
          url: 'https://res.cloudinary.com/trippleninja/image/upload/v1586013501/supreme/pic3.jpg'
        },
        {
          id: 4,
          name: 'Alloy',
          link: '../product/alloy/4',
          url: 'https://res.cloudinary.com/trippleninja/image/upload/v1586013501/supreme/pic3.jpg'
        },
        {
          id: 5,
          name: 'Alloy',
          link: '../product/alloy/5',
          url: 'https://res.cloudinary.com/trippleninja/image/upload/v1586013501/supreme/pic3.jpg'
        },
        {
          id: 6,
          name: 'Alloy',
          link: '../product/alloy/6',
          url: 'https://res.cloudinary.com/trippleninja/image/upload/v1586013501/supreme/pic3.jpg'
        }
      ],
      boiler: [
        {
          id: 1,
          name: 'Boiler',
          link: '../product/boiler/1',
          url: 'https://res.cloudinary.com/trippleninja/image/upload/v1586013501/supreme/pic3.jpg'
        },
        {
          id: 2,
          name: 'Boiler',
          link: '../product/boiler/2',
          url: 'https://res.cloudinary.com/trippleninja/image/upload/v1586013501/supreme/pic3.jpg'
        },
        {
          id: 3,
          name: 'Boiler',
          link: '../product/boiler/3',
          url: 'https://res.cloudinary.com/trippleninja/image/upload/v1586013501/supreme/pic3.jpg'
        },
        {
          id: 4,
          name: 'Boiler',
          link: '../product/boiler/4',
          url: 'https://res.cloudinary.com/trippleninja/image/upload/v1586013501/supreme/pic3.jpg'
        },
        {
          id: 5,
          name: 'Boiler',
          link: '../product/boiler/5',
          url: 'https://res.cloudinary.com/trippleninja/image/upload/v1586013501/supreme/pic3.jpg'
        },
        {
          id: 6,
          name: 'Boiler',
          link: '../product/boiler/6',
          url: 'https://res.cloudinary.com/trippleninja/image/upload/v1586013501/supreme/pic3.jpg'
        }
      ],
      tubes: [
        {
          id: 1,
          name: 'Tubes',
          link: '../product/tubes/1',
          url: 'https://res.cloudinary.com/trippleninja/image/upload/v1586013501/supreme/pic3.jpg'
        },
        {
          id: 2,
          name: 'Tubes',
          link: '../product/tubes/2',
          url: 'https://res.cloudinary.com/trippleninja/image/upload/v1586013501/supreme/pic3.jpg'
        },
        {
          id: 3,
          name: 'Tubes',
          link: '../product/tubes/3',
          url: 'https://res.cloudinary.com/trippleninja/image/upload/v1586013501/supreme/pic3.jpg'
        },
        {
          id: 4,
          name: 'Tubes',
          link: '../product/tubes/4',
          url: 'https://res.cloudinary.com/trippleninja/image/upload/v1586013501/supreme/pic3.jpg'
        },
        {
          id: 5,
          name: 'Tubes',
          link: '../product/tubes/5',
          url: 'https://res.cloudinary.com/trippleninja/image/upload/v1586013501/supreme/pic3.jpg'
        },
        {
          id: 6,
          name: 'Tubes',
          link: '../product/tubes/6',
          url: 'https://res.cloudinary.com/trippleninja/image/upload/v1586013501/supreme/pic3.jpg'
        }
      ],
      autocontrol : [
        {
          id: 1,
          name: 'Auto Control',
          link: '../product/autocontrol/1',
          url: 'https://res.cloudinary.com/trippleninja/image/upload/v1586013501/supreme/pic3.jpg'
        },
        {
          id: 2,
          name: 'Auto Control',
          link: '../product/autocontrol/2',
          url: 'https://res.cloudinary.com/trippleninja/image/upload/v1586013501/supreme/pic3.jpg'
        },
        {
          id: 3,
          name: 'Auto Control',
          link: '../product/autocontrol/3',
          url: 'https://res.cloudinary.com/trippleninja/image/upload/v1586013501/supreme/pic3.jpg'
        },
        {
          id: 4,
          name: 'Auto Control',
          link: '../product/autocontrol/4',
          url: 'https://res.cloudinary.com/trippleninja/image/upload/v1586013501/supreme/pic3.jpg'
        },
        {
          id: 5,
          name: 'Auto Control',
          link: '../product/autocontrol/5',
          url: 'https://res.cloudinary.com/trippleninja/image/upload/v1586013501/supreme/pic3.jpg'
        },
        {
          id: 6,
          name: 'Auto Control',
          link: '../product/autocontrol/6',
          url: 'https://res.cloudinary.com/trippleninja/image/upload/v1586013501/supreme/pic3.jpg'
        }
      ],
      hydraulic : [
        {
          id: 1,
          name: 'Hydraulic System',
          link: '../product/hydraulic/1',
          url: 'https://res.cloudinary.com/trippleninja/image/upload/v1586013501/supreme/pic3.jpg'
        },
        {
          id: 2,
          name: 'Hydraulic System',
          link: '../product/hydraulic/2',
          url: 'https://res.cloudinary.com/trippleninja/image/upload/v1586013501/supreme/pic3.jpg'
        },
        {
          id: 3,
          name: 'Hydraulic System',
          link: '../product/hydraulic/3',
          url: 'https://res.cloudinary.com/trippleninja/image/upload/v1586013501/supreme/pic3.jpg'
        },
        {
          id: 4,
          name: 'Hydraulic System',
          link: '../product/hydraulic/4',
          url: 'https://res.cloudinary.com/trippleninja/image/upload/v1586013501/supreme/pic3.jpg'
        },
        {
          id: 5,
          name: 'Hydraulic System',
          link: '../product/hydraulic/5',
          url: 'https://res.cloudinary.com/trippleninja/image/upload/v1586013501/supreme/pic3.jpg'
        },
        {
          id: 6,
          name: 'Hydraulic System',
          link: '../product/hydraulic/6',
          url: 'https://res.cloudinary.com/trippleninja/image/upload/v1586013501/supreme/pic3.jpg'
        }
      ]
    }
    render() {
        return (
            <Container className="products">
                <Row className="setRow">
                    <Col>
                        <h2 className="h2Title">Our Products</h2>
                        <Image
                            src="https://res.cloudinary.com/trippleninja/image/upload/v1586013502/supreme/pic4.jpg"
                            fluid/>
                    </Col>
                </Row>
                <Row className="setRow">
                    <Col>
                        <h2 className="title1">Wide Range of Products</h2>
                    </Col>
                    <Col>
                        <p className="parag1">Valves, Sensors, Industrial Gasket & Packings, Boiler
                            Parts & Instrumentation, and many more.</p>
                    </Col>
                </Row>
                <h4 className="cTitle">Valves</h4>
                <Categories products={this.state.valves}/>
                <h4 className="cTitle">Industrial Instrumentation</h4>
                <Categories products={this.state.instrumentation}/>
                <h4 className="cTitle">Industrial Gasket & Packings</h4>
                <Categories products={this.state.gasket}/>
                <h4 className="cTitle">Stainless Steel & API Pipes & Fittings</h4>
                <Categories products={this.state.pipes}/>
                <h4 className="cTitle">Alloy Castings</h4>
                <Categories products={this.state.alloy}/>
                <h4 className="cTitle">Boiler Parts & Instruments</h4>
                <Categories products={this.state.boiler}/>
                <h4 className="cTitle">Self-Lubrcating Tubes & Rods/Bushing</h4>
                <Categories products={this.state.tubes}/>
                <h4 className="cTitle">Auto Control System</h4>
                <Categories products={this.state.autocontrol}/>
                <h4 className="cTitle">Hydraulic System</h4>
                <Categories products={this.state.hydraulic}/>
            </Container>
        );
    }
}

export default ProductList;