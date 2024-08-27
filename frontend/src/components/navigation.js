import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function TopBar() {
  return (
    <Navbar expand="lg" style={{ background: "#ffb79d", fontSize: "20px", paddingTop: "20px", paddingBottom: "2px", paddingRight: "5px" }}>
      <Container>
        <Navbar.Brand href="#home" style={{ display: 'flex', alignItems: 'center' }}>
          
          <Nav.Link href="/" style={{ background: "#ffb79d", padding: '0' }}><strong>Home</strong></Nav.Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="ms-auto" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <NavDropdown title="Join the Wave" id="basic-nav-dropdown">
              <NavDropdown.Item href="/Current">Begin Beachcombing</NavDropdown.Item>
              <NavDropdown.Item href="/Register">Become a Beach Buddy</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3"></NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default TopBar;
