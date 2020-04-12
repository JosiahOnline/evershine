import React from 'react';
import {Container, Row, Col, Image} from 'react-bootstrap';

const Alloy = () => {
    return (
        <Container className="category">
            <h4 className="cTitle">Alloy Castings</h4>
            <Row className="productList">
                <Col><Image
                    className="imageItem"
                    src="https://res.cloudinary.com/trippleninja/image/upload/v1586013501/supreme/pic3.jpg"
                    />
                    <h5>Vavles</h5>
                </Col>
                <Col><Image
                    className="imageItem"
                    src="https://res.cloudinary.com/trippleninja/image/upload/v1586013501/supreme/pic3.jpg"
                    />
                    <h5>Vavles</h5>
                </Col>
                <Col><Image
                    className="imageItem"
                    src="https://res.cloudinary.com/trippleninja/image/upload/v1586013501/supreme/pic3.jpg"
                    />
                    <h5>Vavles</h5>
                </Col>

                <Col><Image
                    className="imageItem"
                    src="https://res.cloudinary.com/trippleninja/image/upload/v1586013501/supreme/pic3.jpg"
                    />
                    <h5>Vavles</h5>
                </Col>

                <Col><Image
                    className="imageItem"
                    src="https://res.cloudinary.com/trippleninja/image/upload/v1586013501/supreme/pic3.jpg"
                    />
                    <h5>Vavles</h5>
                </Col>

                <Col><Image
                    className="imageItem"
                    src="https://res.cloudinary.com/trippleninja/image/upload/v1586013501/supreme/pic3.jpg"
                    />
                    <h5>Vavles</h5>
                </Col>
            </Row>
        </Container>
    );
}

export default Alloy