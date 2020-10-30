import React from "react";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
//import ListGroup from "react-bootstrap/ListGroup";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SendMessage from "./components/messages/Message.jsx";
//import SendInfo from "../../components/modal/userModal.js";
import ChatDisplay from "./components/chatdisplay/ChatDisplay.jsx";
import Dashboard from "./components/dashboard/Dashboard";
//import Channels from "./components/channels/Channels";
//import Users from "./components/users/Users";
import UserList from "./components/users/UserList";

import "./chatroom.css";
//import { allUsersList } from "./components/users/userListSlice.js";
//import UserListDisplay from "./components/users/UserList";

//testing express
//import ExpressTest from "../Expresstest"
export function Chatroom() {
  //const username = "LeeAnn"
  // const chatMessage = useSelector(currentMessage);
  //const userName = useSelector(currentUserInfo);

  return (
    <div>
      <Jumbotron>
      <h1>WELCOME TO THE CONVERSATION</h1>
      </Jumbotron>
      <Container fluid>
        <Row>
          <Col xl="2" sm="3" xs="4" >
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
