import React from "react";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
//import ListGroup from "react-bootstrap/ListGroup";
//import { useSelector } from "react-redux";
//import { currentMessage } from "../../js/features/message/messageSlice";
//import { currentUserInfo } from "../../js/features/userInfo/userInfoSlice";
import SendMessage from "../../js/features/message/message";
import SendInfo from "../../js/features/userInfo/userInfo";
import ChatDisplay from "./chatdisplay";
import Dashboard from "./components/dashboard/Dashboard";
import Channels from "./components/channels/Channels";

import "./chatroom.css";

//testing express
// import ExpressTest from "../Expresstest"
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
            <SendInfo />
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
  );
}
