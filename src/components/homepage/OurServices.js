import React from 'react';
import { Row, Container, Col, Button, ResponsiveEmbed } from 'react-bootstrap';

const OurServices = () => {
  return ( 
    <Container className="setPadding">
      <Row className="setRow">
      <Col className="cardVideo">
          <h3 className="h3Title">Our Services</h3>
          <p className="pDescription">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <h4 className="h4Title">Welding Process</h4>
          <div className="youTube">
              <div
                  style={{
                  width: '100%',
                  height: 'auto'
              }}>
                  <ResponsiveEmbed aspectRatio="16by9">
                      <embed type="image/svg+xml" src="https://www.youtube.com/embed/SKfXCCDdrqM"/>
                  </ResponsiveEmbed>
              </div>
          </div>
        </Col>
        <Col className="cardVideo">
          <h3 className="h3Title">We Take Care!</h3>
          <p className="pDescription">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <h4 className="h4Title">Enginering</h4>
          <div className="youTube">
              <div
                  style={{
                  width: '100%',
                  height: 'auto'
              }}>
                  <ResponsiveEmbed aspectRatio="16by9">
                      <embed type="image/svg+xml" src="https://www.youtube.com/embed/SKfXCCDdrqM"/>
                  </ResponsiveEmbed>
              </div>
          </div>
        </Col>
        <Col className="cardVideo">
          <h3 className="h3Title">Save Time & Efficiency!</h3>
          <p className="pDescription">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <h4 className="h4Title">On-Site Engineering</h4>
          <div className="youTube">
              <div
                  style={{
                  width: '100%',
                  height: 'auto'
              }}>
                  <ResponsiveEmbed aspectRatio="16by9">
                      <embed type="image/svg+xml" src="https://www.youtube.com/embed/SKfXCCDdrqM"/>
                  </ResponsiveEmbed>
              </div>
          </div>
        </Col>
      </Row>
      <p className="pDescription">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <Button className="actionBtn">Get Started</Button>
    </Container>
   );
}
 
export default OurServices;