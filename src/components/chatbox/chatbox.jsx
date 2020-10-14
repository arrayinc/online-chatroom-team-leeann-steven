import React from 'react';
import './chatbox.css';



import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


export default class ChatBox extends React.Component {


    render() {      
        return (
            <div>
                <Jumbotron>
                <h1>PUBLIC CHATROOM</h1>
                </Jumbotron>
                <Container>Chat goes here</Container>
                <Container className= "input-form">
                <Form>
                    <Form.Group className controlId="chat-input">
                    
                <Form.Control type="input" placeholder="Enter chat" />
                
               
                
              </Form.Group> 
              
            </Form> 
            
            </Container>
            <div><center><Button type="submit" className="my-1">Submit
            </Button></center></div>
         

     
          </div>
        )
    }
}