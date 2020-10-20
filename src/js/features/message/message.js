import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { messageReducer } from "./messageSlice";
import { currentUserInfo , currentChannelInfo} from "../userInfo/userInfoSlice";
import { useSelector } from 'react-redux';

export default function SendMessage()  {
  const dispatch = useDispatch();
  const [message, setMessage] = useState("");
  const username = useSelector(currentUserInfo); 
  const channel = useSelector(currentChannelInfo); 
  return (
    <div>
      <div >
        <input
         
          aria-label="Submit Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button
         onClick={() => dispatch(messageReducer(`${username}: ${message}, posting to ${channel}`))}
         >
          Submit
        </button>
      </div>
    </div>
  );
}
