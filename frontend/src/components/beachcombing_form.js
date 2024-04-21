//beachcombing_form.js
import React, { useState } from 'react';
import { Button, Col, Form, Modal, Row } from 'react-bootstrap';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; 

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [userName, setUserName] = useState('');
  const navigate = useNavigate();  

  const handleSubmit = async (event) => {
    event.preventDefault(); 

    try {
      const response = await axios.post("http://localhost:3001/api/login", { email, password });
      setUserName(response.data.user.firstName); 
      setShowModal(true);
      setTimeout(() => {
        setShowModal(false); 
        navigate('/beaches'); 
      }, 4000);  
    } catch (error) {
      console.error("Login failed:", error.response?.data?.message || 'Unknown error');
      
    }
  };

  const handleClose = () => {
    setShowModal(false);
    navigate('/beaches'); 
  };

  return (
    <div>
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Welcome Back!</Modal.Title>
        </Modal.Header>
        <Modal.Body>Welcome back, {userName}!</Modal.Body>
        <Modal.Footer>
          <Button variant="info" onClick={handleClose}>Close</Button>
        </Modal.Footer>
      </Modal>

      <Form className="form-container" onSubmit={handleSubmit}>
        <p className="welcome-message" style={{marginTop: '-80px', marginBottom: '50px', color: '#0095b6'}}>
          <strong>Welcome back! It's awesome to see you riding the waves with us again!</strong>
        </p>

        <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
          <Form.Label column sm={2}>
            Email
          </Form.Label>
          <Col sm={10}>
            <Form.Control type="email" placeholder="Email" style={{ width: '100%' }} 
              value={email} onChange={(e) => setEmail(e.target.value)} />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
          <Form.Label column sm={2}>
            Password
          </Form.Label>
          <Col sm={10}>
            <Form.Control type="password" placeholder="Password" style={{ width: '100%' }} 
              value={password} onChange={(e) => setPassword(e.target.value)} />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3">
          <Col sm={{ span: 10, offset: 2 }}>
            <Button variant='info' type="submit">Login</Button>
          </Col>
        </Form.Group>
      </Form>
    </div>
  );
}

export default Login;

