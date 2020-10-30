import React, { useState} from "react";
import {useDispatch, useSelector } from "react-redux";
import { allUsersList } from "../users/userListSlice";
import { allUsersReducer } from "../users/userListSlice";
import Button from "react-bootstrap/Button";
import "./users.css";
import io from "socket.io-client";
const socket = io();





export default function UserListDisplay() {
  const [userArr, setUserArr] = useState([]);
  const dispatch = useDispatch();
 
  socket.once('user list', (msg) => {
    setUserArr(msg);
  });
  const userlist =  userArr.map((user) => {
     return (
    <li>
          <Button>{user}</Button>
           {/* <Button onClick={handleClickUsers}>{currentUserInfo}</Button> */}
         </li>
     );
     });

  return <div>
    
    {userlist}
    </div>;
}
// const messagelist = chatMessage.map((chat) => {
//   return (
//     <ListGroup.Item
//       style={{
//         backgroundColor: `rgb(${chat.color.r}, ${chat.color.g}, ${chat.color.b})`,
//         margin: "10px",
//         borderRadius: "20px",
//         width: "auto",
//         color: textChange(chat.color.r, chat.color.g, chat.color.b),
//       }}
//     >
//       {" "}
//       <img src={chat.avatar} className="chat-bubble-avatar" />{" "}
//       <b>@{chat.username}</b>: {chat.message}
//     </ListGroup.Item>
//   );
// });

// return <div>{messagelist}</div>;
// }