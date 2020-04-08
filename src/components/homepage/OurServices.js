import React from 'react';
import { Row, Container, Col, Button, ResponsiveEmbed } from 'react-bootstrap';

const OurServices = () => {
  return ( 
    <Container className="setPadding, ourServices">
      <h3 className="h3Title">Our Services</h3>
      <p className="pDescription">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <Row className="setRow">
      <Col className="cardLayout">
          <h4 className="h4Title">Welding Process</h4>
          <p className="pDescription">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
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
        <Col className="cardLayout">
          <h4 className="h4Title">Enginering</h4>
          <p className="pDescription">We Take Care! Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
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
        <Col className="cardLayout">
          <h4 className="h4Title">On-Site Engineering</h4>
          <p className="pDescription">Save Time & Efficiency! Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          
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
      <div className="cardLayout">
        <p className="pDescription">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>    
      </div>
      <Button className="actionBtn">Get Started</Button>
    </Container>
   );
}
 
export default OurServices;