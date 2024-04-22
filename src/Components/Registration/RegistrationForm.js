import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import axios from 'axios';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    username: '', // Will be populated with email value
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    mobile: '',
    street: '',
    city: '',
    state: '',
    zip: '',
    usertype: null
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async () => {
    try {
      // Customize the formData object before sending it
      const formDataToSend = {
        ...formData,
        username: formData.email, // Use email as username
        // Exclude unwanted fields
        major_sponsor_id: null,
        head_sponsor_id: null,
        upper_head_sponsor_id: null,
        is_adhar_kyc: false,
        is_pan_kyc: false,
        is_driving_license_kyc: false,
        is_voter_id_kyc: false,
        is_passport_kyc: false
      };

      await axios.post('http://13.201.61.252:8000/api/user/', formDataToSend);
      alert('User added successfully');
    } catch (error) {
      console.error('Error adding user:', error);
    }
  };

  return (
    <Container>
      <h1>Add User</h1>
      <Form>
        <Form.Group controlId="first_name">
          <Form.Label>First Name</Form.Label>
          <Form.Control
            type="text"
            name="first_name"
            value={formData.first_name}
            onChange={handleChange}
            placeholder="Enter first name"
          />
        </Form.Group>

        <Form.Group controlId="last_name">
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            type="text"
            name="last_name"
            value={formData.last_name}
            onChange={handleChange}
            placeholder="Enter last name"
          />
        </Form.Group>

        <Form.Group controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter email"
          />
        </Form.Group>

        <Form.Group controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter password"
          />
        </Form.Group>

        <Form.Group controlId="mobile">
          <Form.Label>Mobile</Form.Label>
          <Form.Control
            type="text"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
            placeholder="Enter mobile"
          />
        </Form.Group>

        <Form.Group controlId="street">
          <Form.Label>Street</Form.Label>
          <Form.Control
            type="text"
            name="street"
            value={formData.street}
            onChange={handleChange}
            placeholder="Enter street"
          />
        </Form.Group>

        <Form.Group controlId="city">
          <Form.Label>City</Form.Label>
          <Form.Control
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
            placeholder="Enter city"
          />
        </Form.Group>

        <Form.Group controlId="state">
          <Form.Label>State</Form.Label>
          <Form.Control
            type="text"
            name="state"
            value={formData.state}
            onChange={handleChange}
            placeholder="Enter state"
          />
        </Form.Group>

        <Form.Group controlId="zip">
          <Form.Label>ZIP</Form.Label>
          <Form.Control
            type="text"
            name="zip"
            value={formData.zip}
            onChange={handleChange}
            placeholder="Enter ZIP"
          />
        </Form.Group>

        <Form.Group controlId="usertype">
          <Form.Label>User Type</Form.Label>
          <Form.Control
            type="text"
            name="usertype"
            value={formData.usertype}
            onChange={handleChange}
            placeholder="Enter user type"
          />
        </Form.Group>

        <Button variant="primary" onClick={handleSubmit}>
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default RegistrationForm;

