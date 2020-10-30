import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Form, Row, Col } from "react-bootstrap";
import {
  currentUserInfo,
  currentChannelInfo,
  currentAvatarInfo,
  currentColorInfo,
} from "../../../../components/modal/userInfoSlice";
import io from "socket.io-client";
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
          placeholder="enter message"
          className="input-form"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </Col>
      <Col sm="2" xs="4" className="button-wrapper">
        <Button
          onClick={submitMessage}
          className="submit-button"
          // onClick={ChatDisplay}
        >
          Send
        </Button>
      </Col>
    </Row>
  );
}
