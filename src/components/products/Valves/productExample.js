import React, {Component} from 'react';
import {Container, Row, Col, Image} from 'react-bootstrap';

class Categories extends Component {
  state = {
    id: null
  }
  componentDidMount() {
    let id = this.props.match.params.product_id;
    this.setState({
      id: id
    })
  }
    render() {
        return (
            <Container className="products">
                <Row className="setRow">
                    <Col>
                        <h2 className="h2Title">{this.state.id}</h2>
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
                            Parts & Instruments, and many more.</p>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Categories;