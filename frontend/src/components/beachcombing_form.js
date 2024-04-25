import React, { useState } from 'react';
import { Button, Col, Form, Modal, Row } from 'react-bootstrap';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; 

const API_URL = process.env.REACT_APP_BACKEND_URL || '';

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
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      minHeight: '100vh',
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

      <div style={{ maxWidth: '500px', width: '100%' }}>
        <p className="welcome-message" style={{marginTop: '20px', marginBottom: '20px', color: '#0095b6', textAlign: 'center', padding: '10px'}}>
          <strong>"Ahoy there! It's an absolute delight to welcome you to our beach crew for the first time! Picture this: the sun casting its golden glow across the waves, the salty breeze tickling your senses, and you, ready to embark on a thrilling adventure with us. Your arrival infuses our beach crew with an extra dose of excitement, setting the stage for unforgettable moments and endless smiles. Let's dive into the surf together, embracing the carefree spirit of the shore and savoring each sun-kissed moment of this incredible journey. Welcome home to the sand, surf, and smiles!"</strong>
        </p>

        <Form className="form-container" onSubmit={handleSubmit}>
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
    </div>
  );
}

export default Login;
