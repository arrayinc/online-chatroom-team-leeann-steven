import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "react-bootstrap";
import { messageListReducer } from "./messageListSlice";
import { currentUserInfo } from "../userInfo/userInfoSlice";
//import { currentChannelInfo } from "../userInfo/userInfoSlice";
//import { messageReducer} from "./messageSlice";
//import ChatDisplay from "../../../scenes/Chatroom/chatdisplay";

export default function SendMessage() {
  const dispatch = useDispatch();
  const [message, setMessage] = useState("");
  const username = useSelector(currentUserInfo);

  const submitMessage = () =>
    // dispatch(messageReducer(`${username}: ${message}`));
    dispatch(
      messageListReducer(
        <div>
          {" "}
          <img src="https://picsum.photos/50/50" /> {username}: {message}
        </div>
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
