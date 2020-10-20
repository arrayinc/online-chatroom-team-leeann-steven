import React from 'react';
//import { useState } from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

//import { useDispatch } from "react-redux";
//import { useSelector } from 'react-redux';

import { setUsername, setAvatar, setChannel } from './dashboardSlice';

export default function Dashboard() {

    //const dispatch = useDispatch();
    //const [currentDashboard, setCurrentDashboard] = useState("");
    
    return (
        <Container>
            <div className="user-dashboard">
                <Row>
                    <Col xs="4">
                        <h5 className="mr-auto">Current chatroom: {setChannel}</h5>
                    </Col>
                    <Col xs="4">
                    </Col>
                    <Col xs="3">
                        <h5>Username: {setUsername}</h5>
                    </Col>
                    <Col xs="1">
                        <img src={setAvatar} alt="avatar"></img>
                    </Col>
                </Row>
            </div>
        </Container>
    )
}