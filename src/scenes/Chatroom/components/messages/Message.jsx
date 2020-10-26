import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Form } from "react-bootstrap";
import ListGroup from "react-bootstrap/ListGroup";
import { messageListReducer } from "./messageListSlice";
import {
  currentUserInfo,
  currentChannelInfo,
  currentAvatarInfo,
  currentColorInfo,
} from "../../../../components/modal/userInfoSlice";


import "./message.css";

export default function SendMessage() {
  const dispatch = useDispatch();
  const [message, setMessage] = useState("");
  const username = useSelector(currentUserInfo);
  const avatar = useSelector(currentAvatarInfo);
  const color = useSelector(currentColorInfo);

  const submitMessage = () =>
    // dispatch(messageReducer(`${username}: ${message}`));
    // inline styles below for chat-bubble -> can't seem to have both class and inline styles on one element
    dispatch(
      messageListReducer(
        <ListGroup.Item
          //className="chat-bubble"
          style={{
            backgroundColor: color,
            margin: "10px",
            borderRadius: "20px",
            //display: "inline-block", was working, now is not!
            width: "auto", 
          }}
        >
          {" "}
          <img src={avatar} className="chat-bubble-avatar" /> <b>@{username}</b>
          : {message}
        </ListGroup.Item>
      )
    );

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
