import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  userInfoReducer,
  setChannelReducer,
  setAvatarReducer,
  setColorReducer,
} from "./userInfoSlice";

import { Button, Modal, Dropdown , DropdownButton } from "react-bootstrap";
import { GithubPicker } from 'react-color';


export default function SendInfo() {
  const dispatch = useDispatch();
  const [currentUserInfo, setCurrentUserInfo] = useState("");
  const [currentAvatarInfo, setCurrentAvatarInfo] = useState(""); //LG not sure how to add this in message itself
  const [currentChannelInfo, setCurrentChannelInfo] = useState("");
  const [currentColorInfo, setCurrentColorInfo] = useState("");
  const [show, setShow] = useState(false);
  const handleClose = () =>
    setShow(false) &
    dispatch(userInfoReducer(currentUserInfo)) &
    dispatch(setChannelReducer(currentChannelInfo));
  dispatch(setAvatarReducer(currentAvatarInfo));
  dispatch(setColorReducer(currentColorInfo));

  const handleShow = () => setShow(true);
  const handleClick1 = () => setCurrentAvatarInfo("https://picsum.photos/50");
  const handleClick2 = () => setCurrentAvatarInfo("https://picsum.photos/49");
  const handleClick3 = () => setCurrentAvatarInfo("https://picsum.photos/51");
  const handleClick4 = () => setCurrentAvatarInfo("https://picsum.photos/52");
  const handleClick5 = () => setCurrentAvatarInfo("https://picsum.photos/48");
  const handleChangeComplete = (color) => setCurrentColorInfo(color.hex)
  return (
    <div>
      <div>
        {/* pop up modal */}
        <center>
          <div className="user-info-button-container">
            <h4>Get started here:</h4>
            <Button
              className="contact-submit"
              variant="dark"
              onClick={handleShow}
            >
              Enter Your Info
            </Button>
          </div>
        </center>

        <Modal show={show} onHide={handleClose} className="modal" centered>
          <Modal.Header closeButton>
            <Modal.Title> Please complete the fields below</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <label>Username: </label>
            <input
              value={currentUserInfo}
              onChange={(e) => setCurrentUserInfo(e.target.value)}
              className="form-field"
              placeholder="@username" //css in chatbox.css
            />
            <br></br>
            <br></br>

            <label>Channel name: </label>
            <input
              value={currentChannelInfo}
              onChange={(e) => setCurrentChannelInfo(e.target.value)}
              className="form-field"
              placeholder="#channel" //css in chatbox.css
            />
            <br></br>
            <br></br>
                     
            <DropdownButton id="dropdown-basic-button" title="Choose an Avatar">
              <Dropdown.Item onClick= {handleClick1} placeholder="#avatar"><img src="https://picsum.photos/50"/></Dropdown.Item>
              <Dropdown.Item onClick= {handleClick2} placeholder="#avatar"><img src="https://picsum.photos/49"/></Dropdown.Item>
              <Dropdown.Item onClick= {handleClick3} placeholder="#avatar"><img src="https://picsum.photos/51"/></Dropdown.Item>
              <Dropdown.Item onClick= {handleClick4} placeholder="#avatar"><img src="https://picsum.photos/52"/></Dropdown.Item>
              <Dropdown.Item onClick= {handleClick5} placeholder="#avatar"><img src="https://picsum.photos/48"/></Dropdown.Item>
           </DropdownButton>
           <br></br>
            <br></br>

            <label>Choose a color for your background: </label>
            <br></br>
          <GithubPicker onChangeComplete={handleChangeComplete}/>

          </Modal.Body>
          <Modal.Footer>
            <Button variant="dark" onClick={handleClose}>
              Submit
            </Button>
            {console.log(currentUserInfo)}
            {console.log(currentChannelInfo)}
            {console.log(currentAvatarInfo)}
            {console.log(currentColorInfo)}
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
}
