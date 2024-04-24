//beachcombing_form.js
import React, { useState } from 'react';
import { Button, Col, Form, Modal, Row } from 'react-bootstrap';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; 

const API_URL = process.env.REACT_APP_BACKEND_URL;

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [userName, setUserName] = useState('');
  const navigate = useNavigate();  

  const handleSubmit = async (event) => {
    event.preventDefault(); 

    try {
      const response = await axios.post(`${API_URL}/api/login`, { email, password });
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
    <div style={{
      backgroundImage: `url(https://d39l2hkdp2esp1.cloudfront.net/img/photo/122785/122785_00_2x.jpg?20170602013312)`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',

      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: '30px',
      
    }}>
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton style={{ backgroundColor: "#0095b6", color: "#ffb79d"}}>
          <Modal.Title><strong>Shore is nice to Sea you!</strong></Modal.Title>
        </Modal.Header>
        <Modal.Body><strong>{userName}!</strong></Modal.Body>
        <Modal.Footer style={{}} > 🐚 🐚 🐚 🐚 🐚 🐚 🐚 🐚 🐚 🐚 🐚 🐚 🐚 🐚 🐚 🐚
          <Button variant="info" onClick={handleClose}>Close</Button>
        </Modal.Footer>
      </Modal>

      <Form className="form-container" onSubmit={handleSubmit}>
        <p className="welcome-message" style={{marginTop: '-80px', marginBottom: '50px', color: '#0095b6'}}>
          <strong>"Welcome back! It's absolutely awesome to see you catching the waves with us once again, soaking up the sun and the salty breeze. Your return adds an extra splash of excitement to our beach crew, bringing back those chilled vibes and endless smiles. Let's ride those waves together, embracing the laidback spirit of the shore and savoring every moment of this sun-kissed adventure. Welcome home to the sand, surf, and smiles!"</strong>
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

