import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "react-bootstrap";
import ListGroup from "react-bootstrap/ListGroup";
import { messageListReducer } from "../chatdisplay/messageListSlice";
import { currentUserInfo, currentChannelInfo, currentAvatarInfo, currentColorInfo } from "../../../../components/modal/userInfoSlice";

export default function SendMessage() {
  const dispatch = useDispatch();
  const [message, setMessage] = useState("");
  const username = useSelector(currentUserInfo);
  const avatar = useSelector(currentAvatarInfo);
  const color = useSelector(currentColorInfo);

  const submitMessage = () =>
    // dispatch(messageReducer(`${username}: ${message}`));
      dispatch(messageListReducer( 
      <ListGroup.Item style={{backgroundColor: color, margin: "10px", borderRadius: "5px" }} > <img src={avatar} /> {username}: {message}</ListGroup.Item>));
  
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
