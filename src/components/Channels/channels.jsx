import React from 'react'
//import { useState } from 'react'
//import Row from 'react-bootstrap/Row';
//import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import '../../index.css';

export default function Channels() {
    return (
        <Container>
            <div className="sidebar channels-sidebar">
                <h5>Channels </h5>
                <hr />
                <ul className="list-unstyled">
                    <li>#public</li>
                    <li>#issues</li>
                    <li>#candidates</li>
                </ul>
            </div>
        </Container>
    )
}