import React from 'react'
import {  Col, Container, Row } from "react-bootstrap";
import Logo from "../../Assets/aversa_full_colour_1.svg"
import "./WebsiteFooter.css"
import { FaInstagram,FaXTwitter  } from "react-icons/fa6";
import { FaFacebookSquare,FaYoutube  } from "react-icons/fa";


const WebsiteFooter = () => {
  return (
    <div className='aversa-footer-background'>
    <div  className='aversa-footer-background-two'>
    <Container>
      <Row>
      <Col sm={3}>
      <img src={Logo} alt='' style={{width:"250px",height:"60px"}}/>

      <p className='footer-slogan'><i>ON A MISSION TO HEALTHY<br/> & WEALTHY BHARAT </i></p>

      <div style={{display:"flex",flexWrap:"wrap",gap:"30px"}}>
        <FaInstagram style={{height:"40px",width:"40px",color:"black",cursor:"pointer"}}/>
        <FaFacebookSquare style={{height:"40px",width:"40px",color:"black",cursor:"pointer"}}/>
        <FaXTwitter style={{height:"40px",width:"40px",color:"black",cursor:"pointer"}}/>
        <FaYoutube  style={{height:"40px",width:"40px",color:"black",cursor:"pointer"}}/>
      </div>
      </Col>
      <Col sm={3}>
        <h1 className='website-footer-heading'>Contact</h1>
        <p className='website-footer-para-tag'>+91 97332 42832</p>
        <p className='website-footer-para-tag'>aversaherbals@gmail.com</p>
      </Col>
      <Col sm={3}>
        <h1 className='website-footer-heading'>Browse</h1>
        <p className='website-footer-para-tag'>Products</p>
        <p className='website-footer-para-tag'>Wellness Resources</p>
        <p className='website-footer-para-tag'>Business Opportunity</p>
      </Col>
      <Col sm={3}>
        <h1 className='website-footer-heading'>Head Office</h1>
        <p className='website-footer-para-tag'>Plot No - 368, Niti Khand - 1, <br/> Indira Puram, Ghaziabad <br/> Uttar Pradesh - 201014</p>
        
      </Col>
      </Row>
      </Container>
    </div>
    </div>
  )
}

export default WebsiteFooter