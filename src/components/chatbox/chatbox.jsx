
import React from 'react';
import '../../index.css';
import './chatbox.css';

import Container from 'react-bootstrap/Container';
import SendMessage from "../../js/features/message/message"
import Jumbotron from 'react-bootstrap/Jumbotron';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useSelector } from 'react-redux';
import { currentMessage } from "../../js/features/message/messageSlice";
//import { currentUserInfo } from "../../js/features/userInfo/userInfoSlice";
import SendInfo from "../../js/features/userInfo/userInfo";
import Dashboard from "../Dashboard/dashboard";
import Channels from "../Channels/channels";

export function ChatBox () {
  //const username = "LeeAnn"
  const chatMessage = useSelector(currentMessage);  
  //const userName = useSelector(currentUserInfo); 
  
        return (
            <div>
                <Jumbotron className="jumbo">
                  <h2>Welcome to the</h2>
                  <h1>CONVERSATION</h1>
                </Jumbotron>
                <Container fluid>
                  <Row>
                    <Col md="2">
                      <SendInfo/>
                      <Channels/>
                      {/* <div className="sidebar channels-sidebar">
                        <h5>Channels </h5>
                        <hr />
                        <ul className="list-unstyled">
                          <li>#public</li>
                          <li>#issues</li>
                          <li>#candidates</li>
                        </ul>
                      </div> */}
                      
                    </Col> 
                    <Col>
                      <Row>
                        <Dashboard />
                      </Row>
                      <Container className="chat-container">
                        {chatMessage}
                      </Container>
                      <Container className= "input-form text-center">
                        <SendMessage/>
                       
                      </Container>
                    </Col>
                    <Col md="2">
                      <div className="sidebar current-users-sidebar">
                        <h5>Current users</h5>
                        <hr />
                        <ul className="list-unstyled">
                          <li>no friends online :(</li>
                        </ul>
                      </div>
                    </Col>
                  </Row>
                </Container>
            </div>
        )
}
