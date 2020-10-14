import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Jumbotron, Card, Button } from 'react-bootstrap';
//import '../index.css';
import './home-page.css';

export default class HomePage extends React.Component {
    render() {
        return (
            <div>
                <Jumbotron>
                    <h1>HELLO!</h1> 
                    <h2>You're on the homepage.</h2>
                    <p>And this is a subheading.</p>
                </Jumbotron>
                <Container fluid>
                    <Row className="d-flex justify-content-center">
                        <Col md="6">
                            <div className="text-container">
                                <h3>Description about the purpose of these chat rooms goes here. It will make everyone want to join this, the very coolest of chat rooms!</h3>
                            </div>
                        </Col> 
                    </Row>
                    <Row className="d-flex justify-content-center">
                        <Col xs="4">
                            <Card className="text-center light-card">
                                <Card.Body>
                                    <Card.Title>
                                        <h4>JOIN THE <br></br>PUBLIC CHATROOM</h4>
                                    </Card.Title>
                                    <Card.Text>
                                        A little helper text
                                    </Card.Text>
                                </Card.Body>
                                <Button variant="primary" className="btn-rounded align-self-center">Enter</Button>
                            </Card>
                        </Col>
                        <Col xs="4">
                            <Card className="text-center dark-card">
                                <Card.Body>
                                    <Card.Title>
                                        <h4>CREATE A <br></br>CUSTOM CHATROOM</h4>
                                    </Card.Title>
                                    <Card.Text>
                                        <p>A little helper text</p>
                                    </Card.Text>
                                </Card.Body>
                                <Button variant="info" className="btn-rounded align-self-center">Join</Button>
                            </Card>
                            
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

