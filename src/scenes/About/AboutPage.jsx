import React, { useState } from 'react';
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
import Collapse from 'react-bootstrap/Collapse';

const AboutLeeAnn = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  return (
    <div>
      <Button color="primary" onClick={toggle} style={{ marginBottom: '1rem' }}>Toggle</Button>
      <Collapse isOpen={isOpen}>
        <Card>
          <Card.Body>
          Anim pariatur cliche reprehenderit,
           enim eiusmod high life accusamus terry richardson ad squid. Nihil
           anim keffiyeh helvetica, craft beer labore wes anderson cred
           nesciunt sapiente ea proident.
          </Card.Body>
        </Card>
      </Collapse>
    </div>
  );
}

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
                <AboutLeeAnn />
                <CardDeck>
                  <Accordion>
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
                  <Accordion>
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
                </CardDeck>
              </Row>
              </Container>
            </div>
        )
    }

}
