import React from "react";
import "../../index.css";
import ListGroup from "react-bootstrap/ListGroup";
import { currentMessage } from "../../js/features/message/messageSlice";
import { messageList } from "../../js/features/message/messageListSlice";
import { useSelector } from "react-redux";
const messageArr = []
export default function ChatDisplay() {
  const chatMessage = [useSelector(messageList)];
 
const messagelist =  chatMessage.map((chatMessage) => (
   <div>
  <p>{chatMessage}</p>
  </div>
 ));
  
  const newMessageArr = messageArr.concat(chatMessage);

   return (
    
     <div>

       {console.log(chatMessage)}
     {messagelist}
   </div>   
   );

}
