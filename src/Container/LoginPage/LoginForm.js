import React, { useState } from 'react';
import axios from 'axios';
import { Col } from 'react-bootstrap';

const LoginForm = () => {
  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
    contact_number: '',
    loginOption: 'email' 
  });

  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };

  const handleLoginOptionChange = (option) => {
    setLoginData({ ...loginData, loginOption: option });
    setErrors({});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let response;
      if (loginData.loginOption === 'email') {
        response = await axios.post('https://aversaherbals.com/api/login/', {
          username: loginData.email,
          password: loginData.password
        });
      } else if (loginData.loginOption === 'phone') {
        response = await axios.post('https://aversaherbals.com/api/login/', {
          contact_number: loginData.contact_number,
          password: loginData.password
        });
      }
      console.log('Response:', response.data);
      setMessage('Login successful');
    } catch (error) {
      console.error('Error:', error.response.data);
      setErrors(error.response.data.errors || {});
      setMessage(error.response.data.message || '');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {loginData.loginOption === 'email' && (
          <Col className='mb-2'>
            <input type="text" placeholder='Registered Email Address' name="email" value={loginData.email} onChange={handleChange} required className='registration-input-form-input-tag'/>
          </Col>
        )}
        {loginData.loginOption === 'phone' && (
          <Col className='mb-2'>
            <input type="number" name="contact_number" placeholder='Registered Phone Number' value={loginData.contact_number} onChange={handleChange} required className='registration-input-form-input-tag' />
          </Col>
        )}
        <Col className='mb-2'>
          <input type="password" name="password" placeholder='Password' value={loginData.password} onChange={handleChange} required className='registration-input-form-input-tag'/>
        </Col>
        {Object.keys(errors).length > 0 && (
          <div>
            {Object.values(errors).map((error, index) => (
              <span key={index}>{error}</span>
            ))}
          </div>
        )}
        {message && <div>{message}</div>}
        <div style={{textAlign:"right"}}>
      <button type="submit" className="see-all-products-button">Login</button>
      </div>
      </form>
      {/* <div>
        <button onClick={() => handleLoginOptionChange('email')}>Login with Email</button>
        <button onClick={() => handleLoginOptionChange('phone')}>Login with Phone Number</button>
      </div> */}
    </div>
  );
};

export default LoginForm;
