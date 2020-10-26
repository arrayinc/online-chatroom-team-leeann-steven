import React from "react";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import ListGroup from "react-bootstrap/ListGroup";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


import SendMessage from "./components/messages/Message.jsx";
import SendInfo from "../../components/modal/userModal.js";
import ChatDisplay from "./components/chatdisplay/ChatDisplay.jsx";
import Dashboard from "./components/dashboard/Dashboard";
import Channels from "./components/channels/Channels";

import "./chatroom.css";

//testing express
//import ExpressTest from "../Expresstest"
export function Chatroom() {
  //const username = "LeeAnn"
  // const chatMessage = useSelector(currentMessage);
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
          <div className="">
          <ListGroup>
            {/* <SendInfo/> */}
            </ListGroup>
            <Channels />
          </div>
          </Col>
          <Col>
            <Row>
              <Dashboard />
            </Row>
            <Container className="chat-container">
              <ChatDisplay/>
            </Container>
            <Container className="input-form-box text-center">
              <SendMessage />
            </Container>
          </Col>
          <Col md="2">
            <div className="current-users-sidebar">
              <h4 className="text-center">Current users</h4>
              <hr />
              <ul className="list-unstyled">
                <li>no friends online :(</li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
