import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ListGroup from "react-bootstrap/ListGroup";
import { messageListReducer } from "../messages/messageListSlice";
import { messageList } from "../messages/messageListSlice";
import io from "socket.io-client";
import "../../chatroom.css";
const socket = io();

export default function ChatDisplay() {
  const dispatch = useDispatch();
  const chatMessage = useSelector(messageList);

  socket.once("chat message", (msg) => {
    dispatch(messageListReducer(msg));
  });

  const messagelist = chatMessage.map((chat) => {
    return (
      <ListGroup.Item
        style={{
          backgroundColor: chat.color,
          margin: "10px",
          borderRadius: "20px",
          width: "auto",
        }}
      >
        {" "}
        <img src={chat.avatar} className="chat-bubble-avatar" />{" "}
        <b>@{chat.username}</b>: {chat.message}
      </ListGroup.Item>
    );
  });

  return <div>{messagelist}</div>;
}
