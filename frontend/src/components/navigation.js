import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function topBar() {
  return (
    <Navbar expand="lg" className="" style={{background:"#0095b6", fontSize:"20px", paddingRight:"500px"}}>
      <Container>
        <Navbar.Brand href="#home"></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="http://localhost:3000/" style={{background: "#ffb79d"}}>Home</Nav.Link>
            <Nav.Link href="#link" style={{paddingRight:"125px"}}></Nav.Link>
            <NavDropdown title="Join the Wave" id="basic-nav-dropdown">
              <NavDropdown.Item href="http://localhost:3000/Current">Begin Beachcombing</NavDropdown.Item>
              <NavDropdown.Item href="http://localhost:3000/Register">
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