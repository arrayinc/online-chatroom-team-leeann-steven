import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Button, Row, Col } from "react-bootstrap";
import io from "socket.io-client";

import { currentUserInfo, currentAvatarInfo, currentColorInfo } from "../../../../components/modal/userInfoSlice";

import "./message.css";

const socket = io();

export default function SendMessage() {
  const [message, setMessage] = useState("");
  const username = useSelector(currentUserInfo);
  const avatar = useSelector(currentAvatarInfo);
  const color = useSelector(currentColorInfo);

  const fullMessage = {
    username,
    message,
    avatar,
    color,
  };

  const submitMessage = () => {
    socket.emit("chat message", fullMessage);
    if (fullMessage.message === "") {
      return false;
    }
  };

  return (
    <Row>
      <Col sm="10" xs="8" className="input-wrapper">
          
        <input
          aria-label="Submit Message"
          placeholder="Jump into the conversation..."
          className="input-form"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          type="text"   
        />
      </Col>
      <Col sm="2" xs="4" className="button-wrapper">
        <Button onClick={submitMessage}>Send</Button>
      </Col>
    </Row>
  );
}
