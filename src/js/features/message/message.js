import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { messageReducer } from "./messageSlice";
import { currentUserInfo } from "../userInfo/userInfoSlice";
import { useSelector } from 'react-redux';

export default function SendMessage()  {
  const dispatch = useDispatch();
  const [message, setMessage] = useState("");
  const userName = useSelector(currentUserInfo); 
  return (
    <div>
      <div >
        <input
         
          aria-label="Submit Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button
         onClick={() => dispatch(messageReducer(`${userName}: ${message}`))}
         >
          Submit
        </button>
      </div>
    </div>
  );
}
