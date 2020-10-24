import React from 'react';
import { useSelector } from 'react-redux';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import { currentUserInfo, currentChannelInfo, currentAvatarInfo } from "../../../../components/modal/userInfoSlice";
import SendInfo from "../../../../components/modal/userModal";
import './dashboard.css';

export default function Dashboard() {

    const username = useSelector(currentUserInfo);
    const avatar = useSelector(currentAvatarInfo);
    const channel = useSelector(currentChannelInfo);
    
    return (
        <Container>
            <div className="user-dashboard">
                <Row>
                    <Col xs="3">
                        <h5 className="mr-auto">Current channel: <br/><b>#{channel}</b></h5>
                    </Col>
                    <Col xs="2">
                        <h5>Username: <br/><b>@{username} </b></h5>
                    </Col>
                    <Col xs="1">
                        <img src={avatar} alt="avatar" className="dashboard-avatar" />
                    </Col>
                    <Col xs="4">
                    </Col>
                    <Col xs="2">
                        <div className="button-container">
                            <SendInfo/>
                        </div>
                    </Col>
                </Row>
            </div>
        </Container>
    )
}