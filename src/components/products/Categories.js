import React from 'react';
import {Container, Row, Col, Image} from 'react-bootstrap';

const Categories = ({products}) => {
    const list = products.length ? (
      (products.map(product => {
        return (
          <Col key={product.id}>
            <a href={product.link}>
              <Image className="imageItem" src={product.url} />
              <h5>{product.name}</h5>
            </a>
          </Col>
        )
    }))
    ) : (
      console.log ('No product')
    )
    return (
        <Container className="category">
            <Row className="productList">
               {list}  
            </Row>
        </Container>
    );
}

export default Categories