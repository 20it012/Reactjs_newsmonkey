import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown'

export default class NavBar extends Component {
  render() {
    return (
      <div>
        
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">News-Monkey</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            
              
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

      </div>
    )
  }
}
