import React from 'react';
import { Col, Row } from 'reactstrap';

import "./footer.css";


const Footer = (props) => {
    return (
    <div>
        <footer className="page-footer" id="Connect">
            <Row>
                <Col className="connectDiv" md="12">
                <h5>Connect With Me</h5>
                </Col>
                <Col md="4">
                    <h6>Email: byrongriffith91@gmail.com</h6>
                </Col>
                <Col md="4">
                    <h6>Around the Web</h6>
                    <p id="contact"><a href="https://github.com/GRIFF91" className="fa fa-github"></a><a href="https://www.linkedin.com/in/byron-griffith/" className="fa fa-linkedin"></a></p>
                </Col>
                <Col md="4">
                    <h6>Location</h6>
                    <p>Raleigh-Durham, NC</p>
                </Col>
                <Col md="12">
                    <p>Copyright © Byron Griffith 2018</p>
                </Col>
            </Row>
        </footer>
    </div>
    ) 
};

export default Footer;