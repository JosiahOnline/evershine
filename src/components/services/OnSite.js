import React from 'react';
import {Container, ResponsiveEmbed} from 'react-bootstrap';

const OnSite = () => {
    return (
        <Container className="category">
            <h4 className="cTitle">On-Site Engineering</h4>
            <div className="cardLayout adjustLayout">
              <div className="youTube removePadding">
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
              <div className="bulletPoint"> 
                <ul>
                  <li>CNC Production & Machining</li>
                  <li>Mechanica Contracting</li>
                  <li>Lathe Machining Workshop</li>
                  <li>Fabrication Work</li>
                  <li>Gearbox Repair & Overhaul</li>
                  <li>Valve Reonditioning</li>
                  <li>Pumps Repair & Reconditioning</li>
                </ul>
              </div>
            </div>
        </Container>
    );
}

export default OnSite