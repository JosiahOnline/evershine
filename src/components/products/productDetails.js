import React, {Component} from 'react';
import {Container, Row, Col, Card, Tabs, Tab} from 'react-bootstrap';
import ContactForm from '../Form';

const Details = (props)=> {
  const {title} = props;
  return (
    <p>1{title}</p>
  )
}

class productDetails extends Component {
    state = {
        id: null
    }
    componentDidMount() {
        let id = this.props.match.params.product_id;
        this.setState({id: id})
    }
    render() {
        return (
            <Container className="itemContainer">
                <Row className="setRow">
                    <Col>
                        <h2 className="title2">{this.state.id}</h2>
                    </Col><Details />
                    <Col>
                        <Card >
                            <Card.Img
                                variant="top"
                                src="https://res.cloudinary.com/trippleninja/image/upload/v1586434802/supreme/products/SEW_Eurodrive.png"/>
                        </Card>
                    </Col>
                </Row>
                <Row>
                  <Col className="tab-col">
                    <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
                        <Tab eventKey="profile" title="DESCRIPTION">                            
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
                                exercitationem architecto numquam repudiandae sint velit fuga quae fugiat, eius,
                                illum incidunt illo laudantium cumque distinctio reiciendis? Saepe ducimus
                                expedita corporis.</p>
                        <h4 className="h5Title">Features & Benefit</h4>
                        <div className="bulletPoint"> 
                          <ul>
                            <li>Hydraulic Services & Repairs</li>
                            <li>Steam Audit & Steam Traps / Valves Service & Repairs</li>
                            <li>Autmation Control System</li>
                            <li>Calibration - Smoke Density Instrument & CEMS System</li>
                            <li>Flowmeter Calibration</li>
                            <li>Screw Press & Digester Repair and Reconditioning</li>
                            <li>Fan Repair and Reconditioning</li>
                          </ul>
                        </div>
                        </Tab>
                        <Tab eventKey="home" title="CONTACT US">
                          <ContactForm />
                        </Tab>
                    </Tabs>
                  </Col>
                </Row>
            </Container>
        );
    }
}

export default productDetails;