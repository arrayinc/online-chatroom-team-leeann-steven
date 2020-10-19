import React from 'react';
import '../../index.css';
import './about-page.css';

import Steven from '../../images/steven copy.png'
import LeeAnn from '../../images/leeann.jpg'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';

// import Col from 'react-bootstrap/Col';
// import Button from 'react-bootstrap/Button';

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
                    <Card.Body >
                      <Card.Title><h2>LeeAnn</h2></Card.Title>
                      <Card.Text>
                        <p>Click here to meet LeeAnn!</p>
                      </Card.Text>
                    </Card.Body>
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
