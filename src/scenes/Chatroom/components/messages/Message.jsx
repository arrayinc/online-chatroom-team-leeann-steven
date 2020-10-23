import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "react-bootstrap";
import { messageListReducer } from "../chatdisplay/messageListSlice";
import { currentUserInfo } from "../../../../components/modal/userInfoSlice";

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
          <img src="https://picsum.photos/50/50" alt="avatar" /> {username}: {message}
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
