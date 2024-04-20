import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const MyForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
  };

  return (
    <div style={{ 
      backgroundImage: 'url(https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/sandy-beach-morning-kevin-smith.jpg)', 
      backgroundRepeat: 'no-repeat', // Prevent background image from repeating
      backgroundSize: 'cover', // Cover the entire container
      width: '100%',
      height: '100vh', // Fill the entire viewport height
      padding: '20px',  // Adjust padding as needed
      textAlign: 'justify',
    }}>

      <p style={{color: 'black'}}><strong>"Welcome aboard! Whether you're a seasoned surfer or a beachcombing novice, join us at San Diego Coastal Paradise. Explore stunning beaches, uncover hidden treasures, and dive into our vibrant community. From making friends to catching waves, the adventure starts now!</strong></p>
      <br />
      <br />

      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formFirstName">
          <Form.Label style={{color: 'black'}}>First Name</Form.Label>
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
          <Form.Label style={{color: 'black'}}>Last Name</Form.Label>
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
          <Form.Label style={{color: 'black'}}>Email</Form.Label>
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
          <Form.Label   style={{color: 'black'}}>Password</Form.Label>
          <Form.Control 
            type="password" 
            placeholder="Enter your password" 
            name="password" 
            value={formData.password} 
            onChange={handleChange} 
            required 
          />
        </Form.Group>
        <br />
        <Button href="http://localhost:3000/Cards" variant="info" type="submit">
          Join the Community
        </Button>
        
      </Form>
    </div>
  );
};

export default MyForm;
