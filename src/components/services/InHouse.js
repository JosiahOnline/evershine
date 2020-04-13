import React from 'react';
import {Container, ResponsiveEmbed} from 'react-bootstrap';

const InHouse = () => {
    return (
        <Container className="category">
            <h4 className="cTitle">In-House Services</h4>
            <div className="cardLayout adjustLayout">
              <div className="youTube removePadding">
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
            </div>
        </Container>
    );
}

export default InHouse