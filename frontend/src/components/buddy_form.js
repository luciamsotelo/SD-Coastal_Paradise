import React, { useState } from 'react';
import { Form, Button, Modal, Alert } from 'react-bootstrap';
import axios from "axios";
import { useNavigate } from 'react-router-dom'; 

const API_URL = process.env.REACT_APP_BACKEND_URL || '';

const MyForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  });
  
  const [showModal, setShowModal] = useState(false); 
  const [error, setError] = useState(""); 
  const navigate = useNavigate();  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); 
    setError(""); 
  
    try {
      
      const response = await axios.post(`${API_URL}/api/register`, formData);
      console.log("Response: ", response.data);
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        password: ''
      });
      setShowModal(true);
      setTimeout(() => {
        setShowModal(false); 
        navigate('/beaches'); 
      }, 4000); 
    } catch (error) {
      console.error("Failed to register user:", error);
      setError("Failed to register user. Please try again."); 
    }
  };

  const handleClose = () => setShowModal(false); 

  return (
    <div style={{
      backgroundImage: 'url(https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/sandy-beach-morning-kevin-smith.jpg)', 
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      padding: '20px',
      textAlign: 'justify',
    }}>
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton style={{ backgroundColor: "#0095b6", color: "#ffb79d"}}>
          <Modal.Title ><strong>Welcome Aboard! </strong></Modal.Title>
        </Modal.Header>
        <Modal.Body><strong>You've officially set Sail into our Sunny Shores!</strong></Modal.Body>
        <Modal.Footer> 
          <Button variant="info" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      {error && <Alert variant="danger">{error}</Alert>} {/* Display error message if there is an error */}

      <Form className="form-container" onSubmit={handleSubmit}>

        <div>
        <p className="welcome-message" style={{ margin: '-85px', color: 'black' }}>
          <strong>"Ahoy there! It's an absolute delight to welcome you to our beach crew for the first time! Picture this: the sun casting its golden glow across the waves, the salty breeze tickling your senses, and you, ready to embark on a thrilling adventure with us. Your arrival infuses our beach crew with an extra dose of excitement, setting the stage for unforgettable moments and endless smiles. Let's dive into the surf together, embracing the carefree spirit of the shore and savoring each sun-kissed moment of this incredible journey. Welcome home to the sand, surf, and smiles!"</strong>
        </p>
        </div>
        <div style={{ marginTop: '110px' }}>
        <Form.Group controlId="formFirstName">
          <Form.Label>First Name</Form.Label>
          <Form.Control 
            type="text" 
            placeholder="Enter your first name" 
            name="firstName" 
            value={formData.firstName} 
            onChange={handleChange} 
            required 
          />
        </Form.Group>
        <Form.Group controlId="formLastName">
          <Form.Label>Last Name</Form.Label>
          <Form.Control 
            type="text" 
            placeholder="Enter your last name" 
            name="lastName" 
            value={formData.lastName} 
            onChange={handleChange} 
            required 
          />
        </Form.Group>
        <Form.Group controlId="formEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control 
            type="email" 
            placeholder="Enter your email" 
            name="email" 
            value={formData.email} 
            onChange={handleChange} 
            required 
          />
        </Form.Group>
        <Form.Group controlId="formPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control 
            type="password" 
            placeholder="Enter your password" 
            name="password" 
            value={formData.password} 
            onChange={handleChange} 
            required 
          />
        </Form.Group>
        </div>
        <br></br>
        <Button variant="info" type="submit">
          Join the Community
        </Button>
      </Form>
    </div>
  );
};

export default MyForm;

