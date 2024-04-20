import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';


function Login() {
  return (
    <div>
      <Form className="form-container">
        <p className="welcome-message" style={{marginTop: '-80px', marginBottom: '50px', color: '#0095b6'}}><strong>"Welcome back! It's awesome to see you riding the waves with us again! Get ready to catch some digital barrels and soak up those sunny vibes as you dive back into your beachcombing adventures. Whether you're shredding the code or just hanging ten with your fellow beach buddies, we're stoked to have you back on board. So wax up your board, grab your virtual sunscreen, and let's hit the digital waves together!"</strong></p>

        <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
          <Form.Label column sm={2}>
            Email
          </Form.Label>
          <Col sm={10}>
            <Form.Control type="email" placeholder="Email" style={{ width: '100%' }} />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
          <Form.Label column sm={2}>
            Password
          </Form.Label>
          <Col sm={10}>
            <Form.Control type="password" placeholder="Password" style={{ width: '100%' }} />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="formHorizontalCheck">
          <Col sm={{ span: 10, offset: 2 }}>
            <Form.Check label="Remember me" />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3">
          <Col sm={{ span: 10, offset: 2 }}>
            <Button variant='info' href="http://localhost:3000/Cards" type="submit">Welcome Back</Button>
          </Col>
        </Form.Group>

      </Form>
    </div>
  );
}

export default Login;
