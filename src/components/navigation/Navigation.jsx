import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
//import { NavLink } from "react-router-dom";
//import logo from './images/voting-sticker.jpg';

import './navbar.css';

export default class Navigation extends React.Component {
    render() {
        return (
            <Navbar expand="md" className="navbar-dark navbar-bg">
            <Navbar.Brand href="/">The Conversation 2020</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <NavItem>
                        <Nav.Link href="/home">HOME</Nav.Link>
                    </NavItem>
                    <NavItem>
                        <Nav.Link href="/about">ABOUT</Nav.Link>
                    </NavItem>
                    <NavItem>
                        <Nav.Link href="/chat" className="nav-pill">CHAT NOW</Nav.Link>
                    </NavItem>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
        )
    }
}