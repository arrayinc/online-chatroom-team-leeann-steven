import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Jumbotron, Card, Button } from "react-bootstrap";

import "./home-page.css";

export default class HomePage extends React.Component {
  render() {
    return (
      <div>
        <Jumbotron className="jumbo">
          <h1>WELCOME TO THE CONVERSATION</h1>
        </Jumbotron>
        <Container fluid>
          <Row className="d-flex justify-content-center text-center">
            <Col md="8" lg="6">
              <div className="text-container">
                <h2>
                  The 2020 election <br />
                  is just days away.
                </h2>
                <h5>
                  There's a lot to discuss - from <i>who's </i>on the ballot, to
                  <i>what's </i>on the ballot, to how it all connects to the
                  future we share. </h5>
                  <br />
                  <h3>
                  Click below to join The Conversation.
                  </h3>
              </div>
            </Col>
          </Row>
          <Row className="d-flex justify-content-center">
            <Card className="text-center card-home light-card">
              <Card.Body>
                <Card.Title>
                  <h4>
                    JOIN THE <br></br>
                    <b>PUBLIC CHATROOM</b>
                  </h4>
                </Card.Title>
                <Card.Text>
                  <p>
                    Jump into the current conversation and add your perspective.
                  </p>
                </Card.Text>
              </Card.Body>
              <Button
                href="/chat"
                className="btn-rounded align-self-center btn-blue"
              >
                Enter
              </Button>
            </Card>
          </Row>
        </Container>
      </div>
    );
  }
}
