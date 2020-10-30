import React, { useState } from "react";
import "../../index.css";
import "./about-page.css";

import Steven from "./images/steven.png";
import LeeAnn from "./images/leeann.jpg";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Jumbotron from "react-bootstrap/Jumbotron";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
import Accordion from "react-bootstrap/Accordion";
import Button from "react-bootstrap/Button";
import Collapse from "react-bootstrap/Collapse";

export default class AboutPage extends React.Component {
  render() {
    return (
      <div>
        <Jumbotron className="jumbo">
          <h1>ABOUT US</h1>
        </Jumbotron>
        <Container fluid>
          <center><h3>We're a small team with big aspirations.</h3></center>
          <Row className="d-flex justify-content-center">
            <CardDeck className="d-flex justify-content-center">
              <Accordion>
                <Card className="text-center card-about">
                  <Card.Img variant="top" src={LeeAnn} />
                  <Card.Title>
                    <h2>LeeAnn</h2>
                  </Card.Title>
                  <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="0">
                      <h5>Click here to meet her</h5>
                    </Accordion.Toggle>
                  </Card.Header>
                  <Accordion.Collapse eventKey="0">
                    <Card.Body>
                      <p>LeeAnn is a longtime community organizer who loves to help people find their power through voting. Originally from Casper, she is a new transplant to Cheyenne, WY. When not sneakily sliding questions about your voter registration status into conversation, she will happily discuss politics, books, and travel plans with you over coffee at any time of day. </p>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
              </Accordion>
              <Accordion>
                <Card className="text-center card-about">
                  <Card.Img variant="top" src={Steven} />
                  <Card.Title>
                    <h2>Steven</h2>
                  </Card.Title>
                  <Card.Header>
                    <Accordion.Toggle as={Button} eventKey="1">
                      <p>Click here to meet him</p>
                    </Accordion.Toggle>
                  </Card.Header>
                  <Accordion.Collapse eventKey="1">
                    <Card.Body>
                      <p>Steven is a man of many talents and interests who can't pass up a thought-provoking conversation about current events. He is passionate about his community and empowering people through knowledge, as he has worked as an educator, a storyteller, and a problem-solver during the coronavirus pandemic in Wyoming. Steven lives in Casper with his wife and has three children. </p>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
              </Accordion>
            </CardDeck>
          </Row>
        </Container>
      </div>
    );
  }
}
