import React from 'react';
import { Col, Row, Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';

import "./portfolio.css";

import rocket from "../../images/rocket.png";
import maker from "../../images/maker.png";
import train from "../../images/train.png";

const Portfolio = (props) => {
  return (
    <Row>

      <Col md="12">
        <div className="h2Div">
          <h2 id="Portfolio">Portfolio</h2>
        </div>
      </Col>

      <Col md="4">
        <div className="cardDiv">
          <Card className="Card">
            <CardImg top width="100%" src={rocket} alt="Card image cap" />
            <CardBody>
              <CardTitle>Where Dem Rockets At?</CardTitle>
              <CardText>This application lets the user locate upcoming 
                        rocket launches across the globe. The user can view where 
                        the rocket launches are taking place using Google Maps. 
                        The user can view a picture of the rocket, follow a link 
                        to a livestream of the launch, and view other important 
                        mission information.</CardText>
              <Button className="butDiv" color="info" href="https://griff91.github.io/WHERE-DEM-ROCKETS-AT-/">Go To Project</Button>
              <Button className="butDiv" color="info" href="https://github.com/GRIFF91/WHERE-DEM-ROCKETS-AT-">GitHub Repo</Button>
            </CardBody>
          </Card>
        </div>
      </Col>

      <Col md="4">
        <div className="cardDiv">
          <Card className="Card">
            <CardImg top width="100%" src={maker} alt="Card image cap" />
            <CardBody>
              <CardTitle>Maker.js</CardTitle>
              <CardText>Maker.js is a web app for makers to post and 
                        collaborate on projects. They can showcase to the world 
                        the various projects they are working on as well as they 
                        can work with other makers to bring their ideas to 
                        fruition. With Maker.js, makers now have a single place 
                        to work with other makers and to tell the world about 
                        their creations.</CardText>
              <Button className="butDiv" color="info" href="https://intense-hollows-42739.herokuapp.com/">Go To Project</Button>
              <Button className="butDiv" color="info" href="https://github.com/GRIFF91/MAKER.js">GitHub Repo</Button>
            </CardBody>
          </Card>
        </div>
      </Col>

      <Col md="4">
        <div className="cardDiv">
          <Card className="Card">
            <CardImg top width="100%" src={train} alt="Card image cap" />
            <CardBody>
              <CardTitle>Train-Scheduler</CardTitle>
              <CardText>This application lets the user schedule a train. 
                        The user can add a Train Name, the Destination, First Train 
                        time, and the Frequency the train runs. Once you add the 
                        train info, the application will output the Next Arrival 
                        and how many Minutes Away the train is.</CardText>
              <Button className="butDiv" color="info" href="https://griff91.github.io/Train-Scheduler/">Go To Project</Button>
              <Button className="butDiv" color="info" href="https://github.com/GRIFF91/Train-Scheduler">GitHub Repo</Button>
            </CardBody>
          </Card>
        </div>
      </Col>

    </Row>
  );
};

export default Portfolio;

