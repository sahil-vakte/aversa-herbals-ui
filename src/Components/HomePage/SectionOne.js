import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import LandingImage from "../../Assets/aversa-landing-product.png"

const SectionOne = () => {
  return (
    <div className='landing-page-section-one-bg'>
        <Container>
            <Row className="align-items-center">
                <Col sm={6}>
                <h1 className="aversa-herbals-head-tag">
                Welcome to Aversa Herbals: Where Nature Meets Wellness
              </h1>
              <p className="aversa-herbals-para-tag-one">
                Discover a world of well-being at Aversa Herbals, your trusted
                destination for premium herbal products. Immerse yourself in the
                healing power of nature and embark on a journey towards a
                healthier, more natural lifestyle.
                <br />
                At Aversa Herbals, we are passionate about bringing you the
                purest herbal remedies that Mother Nature has to offer. Our
                products are meticulously crafted to elevate your well-being,
                providing a harmonious blend of traditional wisdom and modern
                science.
              </p>
                </Col>
                <Col sm={6}>
                    <img src={LandingImage} alt='landing-image' className='aversa-images-of-hexagone'/>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default SectionOne