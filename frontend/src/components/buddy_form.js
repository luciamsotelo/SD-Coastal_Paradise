import React, { useState } from 'react';
import { Form, Button, Modal, Alert } from 'react-bootstrap';
import axios from "axios";

const MyForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  });
  
  const [showModal, setShowModal] = useState(false); 
  const [error, setError] = useState(""); 

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
      
      const response = await axios.post("http://localhost:3001/api/register", formData);
      console.log("Response: ", response.data);
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        password: ''
      });
      setShowModal(true); 
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
      width: '100%',
      height: '100vh',
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
      <Form onSubmit={handleSubmit}>
        {/* Form fields */}
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
        <br></br>
        <Button variant="info" type="submit">
          Join the Community
        </Button>
      </Form>
    </div>
  );
};

export default MyForm;

