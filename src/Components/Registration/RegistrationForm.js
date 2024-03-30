

import React, { useState } from 'react';
import axios from 'axios';
import { Col, Row } from 'react-bootstrap';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    contact_number: '',
    password_hash: '',
    street: '',
    city: '',
    district: '',
    state: '',
    country: '',
    pincode: '',
    sponserid: ''
  });


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/api/signup', formData);
      console.log('Response:', response.data);
    } catch (error) {
      console.error('Error:', error.response.data);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
    <Row>
        <Col sm={6} className='mb-2'>

      <input type="text" placeholder='First Name' name="first_name" value={formData.first_name} onChange={handleChange} required  className='registration-input-form-input-tag'/>
        </Col>
        <Col sm={6} className='mb-2'>
      <input type="text" name="last_name" placeholder='Last Name' value={formData.last_name} onChange={handleChange} required  className='registration-input-form-input-tag'/>

        </Col>
    </Row>

    <Row>
        <Col sm={6} className='mb-2'>
      <input type="email" name="email" placeholder='Email Address' value={formData.email} onChange={handleChange} required className='registration-input-form-input-tag'/>
</Col>
<Col sm={6} className='mb-2'>

      <input type="number" name="contact_number" placeholder='Phone Number' value={formData.contact_number} onChange={handleChange} required className='registration-input-form-input-tag'/>
</Col>
</Row>

    <Row>
        <Col sm={6} className='mb-2'>

      <input type="password" name="password_hash" placeholder='Password' value={formData.password_hash} onChange={handleChange} required className='registration-input-form-input-tag'/>
        </Col>
        <Col sm={6} className='mb-2'>
      <input type="text" name="street" placeholder='Street' value={formData.street} onChange={handleChange} required className='registration-input-form-input-tag'/>

        </Col>
    </Row>


      <Row>
        <Col sm={6} className='mb-2'>

      <input type="text" name="city" placeholder='City' value={formData.city} onChange={handleChange} required className='registration-input-form-input-tag'/>
        </Col>
        <Col sm={6} className='mb-2'>
      <input type="text" name="district" placeholder='District' value={formData.district} onChange={handleChange} required className='registration-input-form-input-tag'/>
            
        </Col>
    </Row>


      <Row>
        <Col sm={6} className='mb-2'>
      <input type="text" name="state" placeholder='State' value={formData.state} onChange={handleChange} required className='registration-input-form-input-tag'/>

        </Col>
        <Col sm={6} className='mb-2'>
      <input type="text" name="country" placeholder='Country' value={formData.country} onChange={handleChange} required className='registration-input-form-input-tag'/>
            
        </Col>
    </Row>


      <Row>
        <Col sm={6} className='mb-2'>
      <input type="number" name="pincode" placeholder='Pin Code' value={formData.pincode} onChange={handleChange} required className='registration-input-form-input-tag'/>

        </Col>
        <Col sm={6} className='mb-2'>
      <input type="text" name="sponserid" placeholder='Sponser ID' value={formData.sponserid} onChange={handleChange} className='registration-input-form-input-tag'/>
            
        </Col>
    </Row>

      <div style={{textAlign:"right"}}>
      <button type="submit" className="see-all-products-button">Sign Up</button>
      </div>
    </form>
  );
};

export default RegistrationForm;
