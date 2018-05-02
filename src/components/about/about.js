import React from 'react';
import { Col, Row } from 'reactstrap';

import "./about.css";
import gravatar from "../../images/gravatar.jpg";

export default class About extends React.Component {
    render() {
      return (
          <div className="aboutDiv">
            <h3 id="About">About</h3>
            <br />
            <Row>
              <Col md="12">
                <img className="image" src={gravatar} alt="Byron Griffith" />
              </Col>
              <Col className="paraDiv" md="12">
              <p>Full stack developer with a love for the front end. 
                  Creating an exciting and effective user experience 
                  is what I strive for. Always looking for new 
                  challenges and learning experiences.

                  Working in a team environment pushes me to achieve 
                  my goals. Forward thinking and looking for my 
                  next great opportunity.</p>
              </Col>
            </Row>
          </div>
      );
    }
  }