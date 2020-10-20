
import React from 'react';
import '../../index.css';
import './chatbox.css';

import Container from 'react-bootstrap/Container';
import SendMessage from "../../js/features/message/message"
import Jumbotron from 'react-bootstrap/Jumbotron';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useSelector } from 'react-redux';
import { currentMessage } from "../../js/features/message/messageSlice";
import { currentUserInfo } from "../../js/features/userInfo/userInfoSlice";
import SendInfo from "../../js/features/userInfo/userInfo";

export function ChatBox () {
  const username = "LeeAnn"
  const chatMessage = useSelector(currentMessage);  
  const userName = useSelector(currentUserInfo); 
  
        return (
            <div>
                <Jumbotron className="jumbo">
                  <h2>Welcome to the</h2>
                  <h1>PUBLIC CHATROOM</h1>
                </Jumbotron>
                <Row>
                  <Col> 
                  <SendInfo/>
                  </Col> 
                  <Col>
                  <Container>{chatMessage}</Container>
                    <Container className= "input-form">
                    <SendMessage/>
                    </Container>
                  </Col>

                </Row>
                    
                  
                  
                
               
            </div>
        )
    
}
