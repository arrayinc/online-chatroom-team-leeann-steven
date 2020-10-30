import React from "react";
import { useSelector } from "react-redux";
import { Container, Row } from "react-bootstrap";

import { currentUserInfo, currentAvatarInfo } from "../../../../components/modal/userInfoSlice";
import SendInfo from "../../../../components/modal/userModal";

import "./dashboard.css";

export default function Dashboard() {
  const username = useSelector(currentUserInfo);
  const avatar = useSelector(currentAvatarInfo);
  
  return (
    <Container>
      <Row>
        <img src={avatar} alt="avatar" className="dashboard-avatar" />
        <h5>
          <b>@{username}</b>
        </h5>
      </Row>
      <Row className="d-flex justify-content-end">
        <SendInfo />
      </Row>
    </Container>
  );
}
