import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import "./users.css";
import io from "socket.io-client";
const socket = io();

export default function UserListDisplay() {
  const [userArr, setUserArr] = useState([]);

  socket.once("user list", (msg) => {
    setUserArr(msg);
  });
  const userlist = userArr.map((user) => {
    return (
      <li>
        <Button>{user}</Button>
      </li>
    );
  });

  return <div>{userlist}</div>;
}
