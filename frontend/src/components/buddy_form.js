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
    <div style={{ backgroundImage: 'url(https://static4.depositphotos.com/1000865/430/i/450/depositphotos_4307402-stock-photo-word-welcome-on-beach.jpg)', backgroundSize: 'cover', maxWidth: '100%', maxHeight: '75%', padding: '110px 100px 800px 100px' }}>

<p>"Welcome aboard! Get ready to embark on an epic beachcombing journey with us! Whether you're a seasoned surfer or a landlubber looking to dip your toes into the digital waves, there's something for everyone here at San Diego Coastal Paradise. Explore the stunning beaches of San Diego and uncover hidden treasures along the coast. Dive into our vibrant community and discover the endless possibilities that await you. From making lifelong beach buddies to catching the perfect wave, the adventure starts now!</p>
<br></br>
<br></br>


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
      <br></br>
      <Button href="http://localhost:3000/Cards" variant="info" type="submit">
        Join the Community
      </Button>
      
    </Form>
    </div>
  );
};

export default MyForm;
