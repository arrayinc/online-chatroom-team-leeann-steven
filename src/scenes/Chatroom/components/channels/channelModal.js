import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Button, Modal, Form, ToggleButtonGroup, ToggleButton, ButtonGroup } from "react-bootstrap";
import { channelListReducer } from "./channelListSlice";
import { setChannelReducer } from "../../../../components/modal/userInfoSlice";

function ChannelTypeToggle() {
    //const [checked, setChecked] = useState(false);

    return (
        <ButtonGroup toggle name="channeltype">              
            <ToggleButton
                type="radio"
                variant="secondary"
                name="channeltype"
                value={'Public'}
                //checked={checked}
                //checked={radioValue === radio.value}
                //onChange={(e) => setRadioValue(e.currentTarget.value)}
            >
                PUBLIC
            </ToggleButton>
            <ToggleButton
                type="radio"
                variant="secondary"
                name="channeltype"
                value={'Private'}
                //checked={radioValue === radio.value}
                //onChange={(e) => setRadioValue(e.currentTarget.value)}
            >
                PRIVATE
            </ToggleButton>
        </ButtonGroup>
    )
}

export default function SendChannel() {
    const dispatch = useDispatch();
    const [currentChannelInfo, setCurrentChannelInfo] = useState("");
    const [show, setShow] = useState(false);
    const handleClose = () =>
        setShow(false) &
        dispatch(
            channelListReducer(
                <li>
                    <Button>#{currentChannelInfo}</Button>
                </li>
            )
        )
        const handleShow = () => setShow(true);

    return (
        <div>
            <div>
                <center>
                <div className="channel-info-button-container">
                    <Button
                    //className="contact-submit"
                    variant="dark"
                    onClick={handleShow}
                    >
                        Add a channel
                    </Button>
                </div>
                </center>

                <Modal show={show} onHide={handleClose} className="channel-modal" centered>
                <Modal.Header closeButton>
                    <Modal.Title> Add a custom channel</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlID="formChannelName">
                            <Form.Label>New channel:</Form.Label>
                            <Form.Control 
                            value={currentChannelInfo}
                            onChange={(e) => setCurrentChannelInfo(e.target.value)}
                            className="form-field" //css in chatbox.css
                            placeholder="enter channel name" />
                        </Form.Group>
                        <Form.Group name="channeltype">
                            <Form.Label>Public or Private</Form.Label>
                            <Form.Check  name="channeltype" type="radio" label={'Public'} />
                            <Form.Check  name="channeltype" type="radio" label={'Private'} />

                        </Form.Group>
                        
                        <ChannelTypeToggle />

                        <Form.Group controlID="formChannelCode">
                            <Form.Label>Secret 4-character code for private channel:</Form.Label>
                            <Form.Control 
                            //value={currentChannelInfo}
                            //onChange={(e) => setCurrentChannelInfo(e.target.value)}
                            className="form-field" //css in chatbox.css
                            placeholder="****" />
                        </Form.Group>
                    </Form>
                    
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="dark" onClick={handleClose}>
                    Submit
                    </Button>
                    {/* 
                    {console.log(currentChannelInfo)}
                    */}
                </Modal.Footer>
                </Modal>
            </div>
        </div>
    );
}

