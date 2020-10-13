import React from 'react';
import './about-page.css';


import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


export default class AboutPage extends React.Component {


    render() {      
        return (
            <Container>
            <Row className="justify-content-md-center">
              <Col xs lg="2">
                1 of 3
              </Col>
              <Col md="auto">Variable width content Variable width content</Col>
              <Col xs lg="2">
                3 of 3
              </Col>
            </Row>
            <Row>
              <Col>1 of 3</Col>
              <Col md="auto">Variable content</Col>
              <Col xs lg="2"> <Card/>
                3 of 3
              </Col>
            </Row>
          </Container>
        )
    }
}
