import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function topBar() {
  return (
    <Navbar expand="lg" className="" style={{background:"#ffb79d", fontSize:"20px", paddingTop:"2px", paddingBottom:"2px", paddingRight:"500px"}}>
      <Container>
        <Navbar.Brand href="#home"></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/" style={{background: "#ffb79d", textAlign: "center"}}><strong>Home</strong></Nav.Link>
            <Nav.Link href="#link" style={{paddingRight:"125px" }}></Nav.Link>
            <NavDropdown title="Join the Wave" id="basic-nav-dropdown" style={{textAlign: "center"}}>
              <NavDropdown.Item href="/Current">Begin Beachcombing</NavDropdown.Item>
              <NavDropdown.Item href="/Register">
                Become a Beach Buddy
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3"></NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
  
}

export default topBar;