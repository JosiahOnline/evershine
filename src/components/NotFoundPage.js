import React from 'react';
import {Container, Row, Button} from 'react-bootstrap';

const NotFoundPage = () => {
    return (
      <Container className="notFound">
      <Row className="setRow setBackground">
        <h1 className="bigTitle">404</h1>
        <h2 className="bigParah">Page not found</h2>
        <Button className="backBtn" variant="primary" href='./'>Back to Home Page</Button>
      </Row>
        
      </Container>
    );
}

export default NotFoundPage;