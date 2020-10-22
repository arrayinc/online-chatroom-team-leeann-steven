import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { messageReducer} from "./messageSlice";
import { messageListReducer } from "./messageListSlice";
import { currentUserInfo, currentChannelInfo } from "../userInfo/userInfoSlice";
import { useSelector } from "react-redux";
import ChatDisplay from "../../../components/chatbox/chatdisplay";

export default function SendMessage() {
  const dispatch = useDispatch();
  const [message, setMessage] = useState("");
  const username = useSelector(currentUserInfo);
  

  const submitMessage = () =>
   // dispatch(messageReducer(`${username}: ${message}`));
    dispatch(messageListReducer(<div> <img src="https://picsum.photos/50/50"/> {username}: {message}</div>));
  return (
    <div>
      <div>
        <input
          aria-label="Submit Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button
          //  onClick={ChatDisplay}
          onClick={submitMessage}
        >
          Submit
        </button>
      </div>
    </div>
  );
}
