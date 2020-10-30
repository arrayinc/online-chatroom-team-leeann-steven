import React from "react";
import { Container, Jumbotron, Row, Col } from "react-bootstrap/";
import SendMessage from "./components/messages/Message.jsx";
import ChatDisplay from "./components/chatdisplay/ChatDisplay.jsx";
import Dashboard from "./components/dashboard/Dashboard";
import UserList from "./components/users/UserList";

import "./chatroom.css";

export function Chatroom() {
  return (
    <div>
      <Jumbotron>
        <h1>WELCOME TO THE CONVERSATION</h1>
      </Jumbotron>
      <Container fluid>
        <Row>
          <Col xl="2" sm="3" xs="4">
            <div className="users-sidebar">
              <h4>Joined conversation as:</h4>
              <Dashboard />
              <hr></hr>
              <h4>Current users:</h4>
              <UserList />
            </div>
          </Col>
          <Col xl="10" sm="9" xs="8">
            <Row className="chat-container">
              <ChatDisplay />
            </Row>
            <Row className="input-form-box">
              <div className="input-wrapper">
                <SendMessage />
              </div>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
