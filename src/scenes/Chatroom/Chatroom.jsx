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
//import Users from "./components/users/Users";
import UserList from "./components/users/UserList";

import "./chatroom.css";
import { allUsersList } from "./components/users/userListSlice.js";
import UserListDisplay from "./components/users/UserList";

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
      <Container fluid className="chatroom-container">
        <Row>
          <Col xs="3" >
            <div className="users-sidebar">
              <h4>Joined conversation as:</h4>
              <Dashboard />
              <hr></hr>
              <h4>Current users:</h4>
              <UserList />
            </div>
          </Col>
          <Col xs="9" >
            <Row className="chat-container">
              <ChatDisplay />
            </Row>
            <Row>
              <div className="input-form-box">
                <SendMessage />
              </div>
            </Row>
            
          </Col>
        </Row>
     
        
            
          {/* <div className="">
          <ListGroup>
           
            </ListGroup>
            <Channels />
          </div>
         
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
              <UserList/>
              <ul className="list-unstyled"></ul>
            </div>
          </Col> */}
       
      </Container>
    </div>
  );
}
