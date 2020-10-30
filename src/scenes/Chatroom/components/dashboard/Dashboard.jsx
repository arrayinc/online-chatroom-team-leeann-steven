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
            <Row>
                <img src={avatar} alt="avatar" className="dashboard-avatar" />
                <h5>@{username}</h5>
            </Row>
            <Row>
                <div className="button-container">
                    <SendInfo/>
                </div>
            </Row>
        </Container>
    )
}