import React from 'react';
import {Row, Container, Col, Button, ResponsiveEmbed} from 'react-bootstrap';

const OurServices = () => {
    return (
        <Container className="setPadding, ourServices">
            <h3 className="h3Title">Our Services</h3>
            <p className="pDescription">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <Row className="setRow">
                <Col className="cardLayout">
                    <h4 className="h4Title">In-House Services</h4>
                    <p className="pDescription">We take care of your needs by providing repair and reconditioning services</p>
                    <div className="youTube">
                        <div
                            style={{
                            width: '100%',
                            height: 'auto'
                        }}>
                            <ResponsiveEmbed aspectRatio="16by9">
                                <embed type="image/svg+xml" src="https://www.youtube.com/embed/CoHVA7nr82A"/>
                            </ResponsiveEmbed>
                        </div>
                    </div>
                </Col>
                <Col className="cardLayout">
                    <h4 className="h4Title">On-Site Engineering</h4>
                    <p className="pDescription">Quality reasurrance without compromise your cost and time.</p>

                    <div className="youTube">
                        <div
                            style={{
                            width: '100%',
                            height: 'auto'
                        }}>
                            <ResponsiveEmbed aspectRatio="16by9">
                                <embed type="image/svg+xml" src="https://www.youtube.com/embed/CoTayjj_2X4"/>
                            </ResponsiveEmbed>
                        </div>
                    </div>
                </Col>
            </Row>
            <div className="cardLayout removePadding">
                <p className="pDescription">
                    “If I had nine hours to chop down a tree, I’d spend the first six sharpening my
                    axe.” <br></br>– Abraham Lincoln</p>
            </div>
            <Button className="actionBtn">Get Started</Button>
        </Container>
    );
}

export default OurServices;