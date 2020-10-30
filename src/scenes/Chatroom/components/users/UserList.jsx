import React, { useState } from "react";
import { useDispatch } from "react-redux";
import io from "socket.io-client";
const socket = io();

export default function UserListDisplay() {
  const [userArr, setUserArr] = useState([]);
  const dispatch = useDispatch();

  socket.once("user list", (msg) => {
    setUserArr(msg);
  });
  const userlist = userArr.map((user) => {
    return <h5>@{user}</h5>;
  });

  return <div>{userlist}</div>;
}
