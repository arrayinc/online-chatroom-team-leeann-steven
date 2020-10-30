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
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';

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
                  <Accordion defaultActiveKey="1">
                    <Card className="text-center card-about">
                      <Card.Img variant="top" src= {LeeAnn} />
                        <Card.Title><h2>LeeAnn</h2></Card.Title>
                        <Card.Header>
                          <Accordion.Toggle as={Button} eventKey="1">
                            <p>Click here to meet her</p>
                          </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="0">
                          <Card.Body >
                            LeeAnn is from Casper and loves to get out the vote.
                          </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                  </Accordion>
                  <Accordion defaultActiveKey="1">
                    <Card className="text-center card-about">
                      <Card.Img variant="top" src= {Steven} />
                        <Card.Title><h2>Steven</h2></Card.Title>
                        <Card.Header>
                          <Accordion.Toggle as={Button} variant="link" eventKey="1">
                            <p>Click here to meet him</p>
                          </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="0">
                          <Card.Body >
                            Steven is from Casper and is passionate about building up his community and the people in it.
                          </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                  </Accordion>

                  {/* <Card className="text-center card-about">
                    <Card.Img variant="top" src= {Steven} />
                    <Card.Body>
                      <Card.Title><h2>Steven</h2></Card.Title>
                      <Card.Text>
                        Click here to meet Steven! 
                      </Card.Text>
                    </Card.Body>
                  </Card> */}
                </CardDeck>
              </Row>
              </Container>
            </div>
        )
    }

}
