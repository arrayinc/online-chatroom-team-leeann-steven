import React from "react";
import "./about-page.css";

import LeeAnn from "./images/LeeAnn.jpg";
import Steven from "./images/Steven.png";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Jumbotron from "react-bootstrap/Jumbotron";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
import Button from "react-bootstrap/Button";

export default class AboutPage extends React.Component {
  render() {
    return (
      <div>
        <Jumbotron>
          <center>
            {" "}
            <h1> About Us! </h1>
          </center>
          <p>
            {" "}
            <center>
              Here's where we will tell you all about the creators of this
              chatroom.{" "}
            </center>{" "}
          </p>
        </Jumbotron>

        <div>
          <center>
            {" "}
            <CardDeck>
              <Card
                style={{
                  width: "18rem",
                }}
              >
                <Card.Img variant="top" src={LeeAnn} />{" "}
                <Card.Body className="about-card-body">
                  <Card.Title> LeeAnn </Card.Title>
                  <Card.Text>Here 's some info about LeeAnn! </Card.Text>
                </Card.Body>{" "}
              </Card>{" "}
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={Steven} />{" "}
                <Card.Body className="about-card-body">
                  <Card.Title> Steven </Card.Title>{" "}
                  <Card.Text>Here 's some info about Steven! </Card.Text>
                </Card.Body>{" "}
              </Card>{" "}
            </CardDeck>
          </center>
        </div>
      </div>
    );
  }
}
