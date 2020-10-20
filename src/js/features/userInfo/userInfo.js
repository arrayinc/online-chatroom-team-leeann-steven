import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { userInfoReducer , setChannelReducer } from "./userInfoSlice";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export default function SendInfo()  {
  const dispatch = useDispatch();
  const [currentUserInfo, setCurrentUserInfo] = useState("");
  const [currentChannelInfo, setCurrentChannelInfo] = useState("");
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false) & dispatch(userInfoReducer(currentUserInfo)) & dispatch(setChannelReducer(currentChannelInfo));
  const handleShow = () => setShow(true);
 

  return (
    <div>
      <div >
        

       {/* pop up modal */}
       <center><Button className="contact-submit" variant="primary" onClick={handleShow}>
          Submit
        </Button></center>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title> Please complete the fields below</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <br></br>
        <br></br>
        <label >Username:  </label>
        <input   value={currentUserInfo}
          onChange={(e) => setCurrentUserInfo(e.target.value)} />
        <br></br>
        <br></br>
        
        
        <br></br>
        <br></br>

        <label>Chatroom name:  </label>
        <input   value={currentChannelInfo}
          onChange={(e) => setCurrentChannelInfo(e.target.value)} />
        <br></br>
        <br></br>
            </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Submit
            </Button>
           
            </Modal.Footer>
        </Modal>
      </div>
    </div>
    
  );
}
