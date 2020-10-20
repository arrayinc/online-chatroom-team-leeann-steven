import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { userInfoReducer } from "./userInfoSlice";

export default function SendInfo()  {
  const dispatch = useDispatch();
  const [currentUserInfo, setCurrentUserInfo] = useState("");

  return (
    <div>
      <div >
        <input
         
          aria-label="User Name"
          value={currentUserInfo}
          onChange={(e) => setCurrentUserInfo(e.target.value)}
        />
        <button
         onClick={() => dispatch(userInfoReducer(currentUserInfo))}
         >
          Submit
        </button>
      </div>
    </div>
  );
}
