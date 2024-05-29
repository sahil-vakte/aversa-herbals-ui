import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import startYourBusinessImage from '../../Assets/starturbusiness.png';
// import DirectSellingBusinessModal from "../../Assets/Group 69945direct selling bussiness modle.svg";
import DirectSellingBusinessModal from "../../Assets/Group 7005301.svg";
import DirectSellingBusinessModalOne from "../../Assets/Group 69941versa herbals.svg";


const BoSectionOne = () => {
  return (
    <div>
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
     
    </div>
    <Container>
      <div style={{ marginTop: "60px" }}>
          <Row>
            {/* <Col sm={6}></Col> */}
            {/* <Col sm={6}> */}
              <img src={DirectSellingBusinessModal}/>
            {/* </Col> */}
          </Row>
        </div>
      </Container>
      <div style={{ marginTop: "60px" }}>

              <img src={DirectSellingBusinessModalOne} style={{width:"100%"}}/>
      </div>
    </div>
  );
};

export default BoSectionOne;
