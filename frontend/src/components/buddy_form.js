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
    <Form onSubmit={handleSubmit}>
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

      <Button href="http://localhost:3000/Cards" variant="primary" type="submit">
        Join the Community
      </Button>
    </Form>
  );
};

export default MyForm;
