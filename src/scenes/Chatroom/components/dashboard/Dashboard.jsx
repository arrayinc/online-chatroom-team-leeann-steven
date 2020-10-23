import React from 'react';
import { useSelector } from 'react-redux';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import { currentUserInfo, currentChannelInfo, currentAvatarInfo } from "../../../../components/modal/userInfoSlice";
import './dashboard.css';

export default function Dashboard() {

    const username = useSelector(currentUserInfo);
    const avatar = useSelector(currentAvatarInfo);
    const channel = useSelector(currentChannelInfo);
    
    return (
        <Container>
            <div className="user-dashboard">
                <Row>
                    <Col xs="5">
                        <h5 className="mr-auto">Current channel: #{channel}</h5>
                    </Col>
                    <Col xs="1">
                    </Col>
                    <Col xs="4">
                        <h5>Username: @{username} </h5>
                    </Col>
                    <Col xs="2">
                        <img src={avatar} alt="avatar" />
                    </Col>
                </Row>
            </div>
        </Container>
    )
}