import React from "react";
import { useSelector } from "react-redux";
import ListGroup from "react-bootstrap/ListGroup";
import { messageList } from "../messages/messageListSlice";

import "../../chatroom.css";

const messageArr = [];
export default function ChatDisplay() {
  const chatMessage = [useSelector(messageList)];

  const messagelist = chatMessage.map((chatMessage) => (
    <div>
      <p>{chatMessage}</p>
    </div>
  ));

  const newMessageArr = messageArr.concat(chatMessage);

  return (
    <div>
           {messagelist}
    </div>
  );
}
