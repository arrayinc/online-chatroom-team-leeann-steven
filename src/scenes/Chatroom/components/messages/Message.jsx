import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Form } from "react-bootstrap";
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
    <div>
      <div>
        <input
          aria-label="Submit Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="input-form"
        />
        <Button
          onClick={submitMessage}
          // onClick={ChatDisplay}
        >
          Send
        </Button>
      </div>
    </div>
  );
}
