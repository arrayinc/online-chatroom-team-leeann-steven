import React from "react";
import { useSelector } from "react-redux";
import { allUsersList } from "../users/userListSlice";
import { allUsersReducer } from "../users/userListSlice";
import Button from "react-bootstrap/Button";
import "./users.css";

export default function UserListDisplay() {
  const users = [useSelector(allUsersList)];

  const userlist =  users.map((users) => (
     
       
    {users} 
    
   ));

  return <div>
    {users}
    </div>;
}