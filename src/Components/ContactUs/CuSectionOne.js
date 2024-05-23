import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import LandingImage from "../../Assets/contactus.jpg"

const CuSectionOne = () => {
  return (
    <div >
        <Container>
            <Row className="align-items-center">
            <Col sm={5}>
                    <img src={LandingImage} alt='landing-image' className='aversa-images-of-no-hexagone'/>
                </Col>
                <Col sm={1}></Col>
                <Col sm={4}>
                <h1 className="aversa-herbals-head-tag-contact-us">
                Contact Us
              </h1>
                <h5 className="aversa-herbals-head-tag-contact-us" style={{fontSize:"2rem"}}>
                AVERSA HEALTHCARE PRIVATE LIMITED
              </h5>
              <p className="aversa-herbals-para-tag-one">
              Need support? We’ve got you covered. Reach out anytime for questions about products, your business, you name it.
               
              </p>
                </Col>
                <Col sm={1}></Col>
                <Col sm={1}></Col>
                
            </Row>
        </Container>
    </div>
  )
}

export default CuSectionOne