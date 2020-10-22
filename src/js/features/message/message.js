import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { messageReducer, currentMessageId } from "./messageSlice";
import { currentUserInfo, currentAvatarInfo } from "../userInfo/userInfoSlice";
import { useSelector } from "react-redux";
import ChatDisplay from "../../../components/chatbox/chatdisplay";
import { Button } from 'react-bootstrap';

export default function SendMessage() {
  const dispatch = useDispatch();
  const [message, setMessage] = useState("");
  const username = useSelector(currentUserInfo);
  const messageId = useSelector(currentMessageId);

  const submitMessage = () =>
    dispatch(messageReducer(`${username}: ${message}`));
    
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
