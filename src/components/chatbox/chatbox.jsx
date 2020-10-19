
import React from 'react';
import '../../index.css';
import './chatbox.css';

import Container from 'react-bootstrap/Container';

import Jumbotron from 'react-bootstrap/Jumbotron';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default class ChatBox extends React.Component {
    render() {      
        return (
            <div>
                <Jumbotron className="jumbo">
                  <h2>Welcome to the</h2>
                  <h1>PUBLIC CHATROOM</h1>
                </Jumbotron>
                
                <Row>
                  <Col md="3">
                    <div className="sidebar" >
                    
                    </div>
                  </Col>
                  <Col xs="6">
                    <Container>Chat goes here</Container>
                    <Container className= "input-form">
                      <Form>
                        <Form.Group className controlId="chat-input">
                          <Form.Control type="input" placeholder="Enter chat" />
                        </Form.Group> 
                      </Form> 
                    </Container>
                  </Col>
                  <Col>
                    <div className="sidebar" >
                        
                    </div>
                  </Col>
                </Row>
                
            <div><center>
              <Button type="submit" className="my-1">Submit
              </Button></center></div>
            </div>
        )
    }
}

