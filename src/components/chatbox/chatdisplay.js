import React from "react";
import "../../index.css";
import ListGroup from "react-bootstrap/ListGroup";
import { currentMessage } from "../../js/features/message/messageSlice";
//import { currentAvatarInfo } from "../../js/features/userInfo/userInfoSlice";
import { useSelector } from "react-redux";
const messageArr = []
export default function ChatDisplay() {
  const chatMessage = [useSelector(currentMessage)];
  const messageArr = chatMessage
  
  const newMessageArr = messageArr.concat(chatMessage);

   return (
    
     <div>
       {console.log(messageArr)}
      <ListGroup>
        <ListGroup.Item>{chatMessage}</ListGroup.Item>
      </ListGroup>
    </div>
   )
}
