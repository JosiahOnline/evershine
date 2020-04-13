import React from 'react';
import {Container, Row, Col, Image} from 'react-bootstrap';

const Hydraulic = () => {
    return (
        <Container className="category">
            <h4 className="cTitle">Hydraulic System</h4>
            <Row className="productList">
                <Col><a href="./products"><Image
                    className="imageItem"
                    src="https://res.cloudinary.com/trippleninja/image/upload/v1586013501/supreme/pic3.jpg"
                    />
                    <h5>Hydraulic</h5>
                    </a>
                </Col>
                <Col><a href="./products"><Image
                    className="imageItem"
                    src="https://res.cloudinary.com/trippleninja/image/upload/v1586013501/supreme/pic3.jpg"
                    />
                    <h5>Hydraulic</h5>
                    </a>
                </Col>
                <Col><a href="./products"><Image
                    className="imageItem"
                    src="https://res.cloudinary.com/trippleninja/image/upload/v1586013501/supreme/pic3.jpg"
                    />
                    <h5>Hydraulic</h5>
                    </a>
                </Col>

                <Col><a href="./products"><Image
                    className="imageItem"
                    src="https://res.cloudinary.com/trippleninja/image/upload/v1586013501/supreme/pic3.jpg"
                    />
                    <h5>Hydraulic</h5>
                    </a>
                </Col>

                <Col><a href="./products"><Image
                    className="imageItem"
                    src="https://res.cloudinary.com/trippleninja/image/upload/v1586013501/supreme/pic3.jpg"
                    />
                    <h5>Hydraulic</h5>
                    </a>
                </Col>

                <Col><a href="./products"><Image
                    className="imageItem"
                    src="https://res.cloudinary.com/trippleninja/image/upload/v1586013501/supreme/pic3.jpg"
                    />
                    <h5>Hydraulic</h5>
                    </a>
                </Col>
            </Row>
        </Container>
    );
}

export default Hydraulic