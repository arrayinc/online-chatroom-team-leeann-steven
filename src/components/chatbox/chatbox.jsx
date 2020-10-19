import React from "react";
import "./chatbox.css";
import { createStore, combineReducers } from "redux";

import { configureStore } from "@reduxjs/toolkit";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Jumbotron from "react-bootstrap/Jumbotron";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
let chatEntry
let chat
//action 
const ENTER_CHAT = 'ENTER_CHAT'
  {
  type: ENTER_CHAT,     
  text: 'hi'
  }
  
function addChat(text) {
  return {
    type: ENTER_CHAT,
  }
}

//reducer



dispatch(addChat(text))

export default class ChatBox extends React.Component {
  render() {
    return (
      <div>
        <Jumbotron>
          <h1>PUBLIC CHATROOM</h1>
        </Jumbotron>
        <Container>{chatEntry.payload}</Container>
        <Container className="input-form">
          <Form>
            <Form.Group className controlId="chat-input">
              <Form.Control
                type="input"
                placeholder="Enter chat"
                value={chatEntry.payload}
              />
            </Form.Group>
          </Form>
        </Container>
        <div>
          <center>
            <Button
              type="submit"
              className="my-1"
              onClick={chatSubmit(chatEntry.payload)}
            >
              Submit
            </Button>
          </center>
        </div>
      </div>
    );
  }
}
