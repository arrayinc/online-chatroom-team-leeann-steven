import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import {
  userInfoReducer,
  setChannelReducer,
  //setAvatarReducer,
} from "./userInfoSlice";

export default function SendInfo() {
  const dispatch = useDispatch();
  const [currentUserInfo, setCurrentUserInfo] = useState("");
  //const [currentAvatarInfo, setCurrentAvatarInfo] = useState(""); 
  const [currentChannelInfo, setCurrentChannelInfo] = useState("");
  const [show, setShow] = useState(false);
  const handleClose = () =>
    setShow(false) &
    dispatch(userInfoReducer(currentUserInfo)) &
    dispatch(setChannelReducer(currentChannelInfo));
  const handleShow = () => setShow(true);

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
          </Modal.Body>
          <Modal.Footer>
            <Button variant="dark" onClick={handleClose}>
              Submit
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
}
