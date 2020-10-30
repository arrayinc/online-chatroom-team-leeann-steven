import React from 'react';
import '../../index.css';
import './about-page.css';

import Steven from './images/steven.png';
import LeeAnn from './images/leeann.jpg';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import { Container, Row, Jumbotron, Card, CardDeck, Accordion, Accordion } from 'react-bootstrap';

export default class AboutPage extends React.Component {
    render() {      
        return (
            <div>
              <Jumbotron className="jumbo">
                <center><h1>ABOUT US</h1></center>
                <h4>
                  We're a small team with big aspirations.
                </h4>
              </Jumbotron>
              
              <Container fluid>
              <Row className="d-flex justify-content-center">
                <CardDeck>
                  <Card className="text-center card-about">
                    <Card.Img variant="top" src= {LeeAnn} />
                      <Card.Title><h2>LeeAnn</h2></Card.Title>
                      <Card.Header>
                        <Accordion.Toggle as={Button} eventKey="1">
                          Meet her
                        </Accordion.Toggle>
                      </Card.Header>
                      <Accordion.Collapse eventKey="0">
                        <Card.Body >
                          LeeAnn is from Casper and loves to get out the vote.
                        </Card.Body>
                      </Accordion.Collapse>
                  </Card>
                  <Card className="text-center card-about">
                    <Card.Img variant="top" src= {Steven} />
                    <Card.Body>
                      <Card.Title><h2>Steven</h2></Card.Title>
                      <Card.Text>
                        Click here to meet Steven! 
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </CardDeck>
              </Row>
              </Container>
            </div>
        )
    }

}
