import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Button, Modal, Dropdown, DropdownButton } from "react-bootstrap";
import { GithubPicker } from "react-color";
import io from "socket.io-client";

import {
  userInfoReducer,
  setAvatarReducer,
  setColorReducer,
} from "./userInfoSlice";

import avatar1 from "./images/1.svg";
import avatar2 from "./images/2.svg";
import avatar3 from "./images/3.svg";
import avatar4 from "./images/4.svg";
import avatar5 from "./images/5.svg";
import avatar6 from "./images/6.svg";
import avatar7 from "./images/7.svg";
import avatar8 from "./images/8.svg";
import avatar9 from "./images/9.svg";
import avatar10 from "./images/10.svg";
import avatar11 from "./images/11.svg";
import avatar12 from "./images/12.svg";
import avatar13 from "./images/13.svg";
import avatar14 from "./images/14.svg";
import avatar15 from "./images/15.svg";
import avatar16 from "./images/16.svg";
import avatar17 from "./images/17.svg";
import avatar18 from "./images/18.svg";
import avatar19 from "./images/19.svg";
import avatar20 from "./images/20.svg";

import "./modal.css";

const socket = io();

export default function SendInfo() {
  const dispatch = useDispatch();
  const [currentUserInfo, setCurrentUserInfo] = useState("");
  const [currentAvatarInfo, setCurrentAvatarInfo] = useState("");
  const [currentColorInfo, setCurrentColorInfo] = useState("");
  const [show, setShow] = useState(true);
  const handleClose = () =>
    setShow(false) &
    dispatch(userInfoReducer(currentUserInfo)) &
    dispatch(setAvatarReducer(currentAvatarInfo)) &
    dispatch(setColorReducer(currentColorInfo)) &
    sendUser();
  const sendUser = () => {
    socket.emit("user", currentUserInfo);
  };

 //Matt, we are sure you will love these many lines of code here, and below ;) 
  const handleClick1 = () => setCurrentAvatarInfo(avatar1);
  const handleClick2 = () => setCurrentAvatarInfo(avatar2);
  const handleClick3 = () => setCurrentAvatarInfo(avatar3);
  const handleClick4 = () => setCurrentAvatarInfo(avatar4);
  const handleClick5 = () => setCurrentAvatarInfo(avatar5);
  const handleClick6 = () => setCurrentAvatarInfo(avatar6);
  const handleClick7 = () => setCurrentAvatarInfo(avatar7);
  const handleClick8 = () => setCurrentAvatarInfo(avatar8);
  const handleClick9 = () => setCurrentAvatarInfo(avatar9);
  const handleClick10 = () => setCurrentAvatarInfo(avatar10);
  const handleClick11 = () => setCurrentAvatarInfo(avatar11);
  const handleClick12 = () => setCurrentAvatarInfo(avatar12);
  const handleClick13 = () => setCurrentAvatarInfo(avatar13);
  const handleClick14 = () => setCurrentAvatarInfo(avatar14);
  const handleClick15 = () => setCurrentAvatarInfo(avatar15);
  const handleClick16 = () => setCurrentAvatarInfo(avatar16);
  const handleClick17 = () => setCurrentAvatarInfo(avatar17);
  const handleClick18 = () => setCurrentAvatarInfo(avatar18);
  const handleClick19 = () => setCurrentAvatarInfo(avatar19);
  const handleClick20 = () => setCurrentAvatarInfo(avatar20);
  const handleChangeComplete = (color) => setCurrentColorInfo(color.rgb);
  return (
    <div>
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title> Please complete the fields below</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <label>Username: </label>
          <input
            value={currentUserInfo}
            onChange={(e) => setCurrentUserInfo(e.target.value)}
            className="form-field"
            placeholder="@username"
          />
          <br></br>
          <br></br>

          <DropdownButton
            id="dropdown-basic-button"
            title="Select an avatar"
            variant="info"
          >
            <Dropdown.Item onClick={handleClick1} placeholder="#avatar">
              <img src={avatar1} alt="avatar1"/>
            </Dropdown.Item>
            <Dropdown.Item onClick={handleClick2} placeholder="#avatar">
              <img src={avatar2} alt="avatar2"/>
            </Dropdown.Item>
            <Dropdown.Item onClick={handleClick3} placeholder="#avatar">
              <img src={avatar3} alt="avatar3"/>
            </Dropdown.Item>
            <Dropdown.Item onClick={handleClick4} placeholder="#avatar">
              <img src={avatar4} alt="avatar4"/>
            </Dropdown.Item>
            <Dropdown.Item onClick={handleClick5} placeholder="#avatar">
              <img src={avatar5} alt="avatar5"/>
            </Dropdown.Item>
            <Dropdown.Item onClick={handleClick6} placeholder="#avatar">
              <img src={avatar6} alt="avatar6"/>
            </Dropdown.Item>
            <Dropdown.Item onClick={handleClick7} placeholder="#avatar">
              <img src={avatar7} alt="avatar7"/>
            </Dropdown.Item>
            <Dropdown.Item onClick={handleClick8} placeholder="#avatar">
              <img src={avatar8} alt="avatar8"/>
            </Dropdown.Item>
            <Dropdown.Item onClick={handleClick9} placeholder="#avatar">
              <img src={avatar9} alt="avatar9"/>
            </Dropdown.Item>
            <Dropdown.Item onClick={handleClick10} placeholder="#avatar">
              <img src={avatar10} alt="avatar10"/>
            </Dropdown.Item>
            <Dropdown.Item onClick={handleClick11} placeholder="#avatar">
              <img src={avatar11} alt="avatar11"/>
            </Dropdown.Item>
            <Dropdown.Item onClick={handleClick12} placeholder="#avatar">
              <img src={avatar12} alt="avatar12"/>
            </Dropdown.Item>
            <Dropdown.Item onClick={handleClick13} placeholder="#avatar">
              <img src={avatar13} alt="avatar13"/>
            </Dropdown.Item>
            <Dropdown.Item onClick={handleClick14} placeholder="#avatar">
              <img src={avatar14} alt="avatar14"/>
            </Dropdown.Item>
            <Dropdown.Item onClick={handleClick15} placeholder="#avatar">
              <img src={avatar15} alt="avatar15"/>
            </Dropdown.Item>
            <Dropdown.Item onClick={handleClick16} placeholder="#avatar">
              <img src={avatar16} alt="avatar16"/>
            </Dropdown.Item>
            <Dropdown.Item onClick={handleClick17} placeholder="#avatar">
              <img src={avatar17} alt="avatar17"/>
            </Dropdown.Item>
            <Dropdown.Item onClick={handleClick18} placeholder="#avatar">
              <img src={avatar18} alt="avatar18"/>
            </Dropdown.Item>
            <Dropdown.Item onClick={handleClick19} placeholder="#avatar">
              <img src={avatar19} alt="avatar19"/>
            </Dropdown.Item>
            <Dropdown.Item onClick={handleClick20} placeholder="#avatar">
              <img src={avatar20} alt="avatar20"/>
            </Dropdown.Item>
          </DropdownButton>
          <br></br>

          <label>Chat bubble color: </label>
          <br></br>
          <GithubPicker onChangeComplete={handleChangeComplete} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="dark" onClick={handleClose}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
