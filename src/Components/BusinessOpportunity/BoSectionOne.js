import React from 'react';
import { Container } from 'react-bootstrap';
import startYourBusinessImage from '../../Assets/starturbusiness.png';

const BoSectionOne = () => {
  return (
    <div style={{ position: 'relative' }}>
      <img
        src={startYourBusinessImage}
        alt="Start Your Business"
        style={{
          width: '100%',
          filter: 'blur(0px) brightness(80%)',
        }}
      />
      <div className='business-opp-image-text'>
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'rgb(0 0 0 / 8%)', /* Adjust opacity as needed */
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
          alignItems: 'center',
          padding: '20px', // Adjust padding as needed
          boxSizing: 'border-box',
        }}
      >
        <h1 style={{ color: 'white', textAlign: 'center',fontStyle:"italic",fontFamily:"Century Gothic",margin:"0px" }}>Begin your entrepreneurial journey</h1>
        <p style={{ color: 'white', textAlign: 'center',fontStyle:"italic",fontFamily:"Century Gothic",margin:"0px" }}>With unlimited earning potential</p>
      </div>
      </div>
      <Container>
        {/* Your content here */}
      </Container>
    </div>
  );
};

export default BoSectionOne;
