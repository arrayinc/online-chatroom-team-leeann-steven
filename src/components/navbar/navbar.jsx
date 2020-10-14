import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
//import logo from './images/i-voted.png';
import './navbar.css';

export default class Navigation extends React.Component {
    render() {
        return (
            <Navbar expand="md" className="navbar-light bg-light">
            <Navbar.Brand href="/" >Logo</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <NavItem>
                        <Nav.Link href="/">HOME</Nav.Link>
                    </NavItem>
                    <NavItem>
                        <Nav.Link href="/">ABOUT</Nav.Link>
                    </NavItem>
                    <NavItem>
                        <Nav.Link href="/" className="nav-pill bg-info">CHAT NOW</Nav.Link>
                    </NavItem>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
        )
    }
}