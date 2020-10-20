import React from 'react';
//import { useState } from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
//import { currentUserInfo, currentChannelInfo } from "../../js/features/userInfo/userInfoSlice";
import { useSelector } from 'react-redux';
//import { useDispatch } from "react-redux";
//import { setUsername, setAvatar, setChannel } from './dashboardSlice';

export default function Dashboard() {

    //const dispatch = useDispatch();
    //const username = useSelector(currentUserInfo);
    //const channel = useSelector(currentChannelInfo);
    //const [currentDashboard, setCurrentDashboard] = useState("");
    
    return (
        <Container>
            <div className="user-dashboard">
                <Row>
                    <Col xs="4">
                        <h5 className="mr-auto">Current chatroom:</h5>
                    </Col>
                    <Col xs="4">
                    </Col>
                    <Col xs="3">
                        <h5>Username:</h5>
                    </Col>
                    <Col xs="1">
                        
                    </Col>
                </Row>
            </div>
        </Container>
    )
}