import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ListGroup from "react-bootstrap/ListGroup";
import io from "socket.io-client";

import { messageList } from "../messages/messageListSlice";
import { messageListReducer } from "../messages/messageListSlice";

import "./chatdisplay.css";

const socket = io();

export default function ChatDisplay() {
  const dispatch = useDispatch();
  const chatMessage = useSelector(messageList);

  socket.once("chat message", (msg) => {
    dispatch(messageListReducer(msg));
  });
  var textcolorlimit = 50;
  const textChange = (r, g, b) => {
    if (r < textcolorlimit) {
      var textcolor = "white";
    } else if (g < textcolorlimit) {
      textcolor = "white";
    } else if (b < textcolorlimit) {
      textcolor = "white";
    }
    return textcolor;
  };

  const messagelist = chatMessage.map((chat) => {
    return (
      <ListGroup.Item
        style={{
          backgroundColor: `rgb(${chat.color.r}, ${chat.color.g}, ${chat.color.b})`,
          margin: "10px",
          borderRadius: "20px",
          width: "fit-content",
          color: textChange(chat.color.r, chat.color.g, chat.color.b),
          fontFamily: "Montserrat",
          fontSize: "1em",
        }}
      >
        {" "}
        <img src={chat.avatar} className="chat-bubble-avatar" alt="avatar"/>{" "}
        <b>@{chat.username}</b>: {chat.message}
      </ListGroup.Item>
    );
  });

  return <div>{messagelist}</div>;
}
