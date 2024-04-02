import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import LandingImage from "../../Assets/businessopportunity.jpg"

const BoSectionOne = () => {
  return (
    <div className='businessopportunity-background'>
        <Container>
        <Row className="align-items-center">
                <Col sm={6}>
                <h1 className="aversa-herbals-head-tag-business" >
                Find the enterpreneur in
                you
              </h1>
             
                </Col>
                <Col sm={6}>
                <div style={{padding:"20px"}}>
                    <img src={LandingImage} alt='landing-image' className='aversa-images-of-no-hexagone'/>
                </div>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default BoSectionOne