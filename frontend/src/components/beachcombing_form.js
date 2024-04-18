import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';


function Login() {
  return (
    <Form style={{ backgroundImage: 'url(https://d39l2hkdp2esp1.cloudfront.net/img/photo/122785/122785_00_2x.jpg?20170602013312)', backgroundSize: 'cover', maxWidth: '100%', maxHeight: '75%', padding: '110px 100px 800px 100px' }}>
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
  );
}

export default Login;
