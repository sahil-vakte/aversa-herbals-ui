import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import LandingImage from "../../Assets/businessopportunity.jpg"

const BoSectionThree = () => {
  return (
    <div className='products-page-linear-gradient-bg'>
    <div>
        <Container>
        
            <Row className="align-items-center">
            <Col sm={4} >
            <h1 className="aversa-herbals-head-tag" style={{fontSize:"4rem"}}>
                
​​Our promise to you​
              </h1>
                    {/* <img src={LandingImage} alt='landing-image' className='aversa-images-of-no-hexagone'/> */}
                </Col>
                <Col sm={8}  style={{padding:"20px"}}>
                <Card><Card.Body>

                
              <p className="aversa-herbals-para-tag-one">
          
Beginning your journey with Aversa Herbals is straightforward and hassle-free.
<br/>
<br/>
There are no mandatory purchases or initial fees required to get started.
<br/>
<br/>

We stand behind our products with a 100% refund guarantee, including shipping costs, for any items purchased within the previous 12 months if your Associateship is terminated for any reason.
<br/>
<br/>
You're not obligated to buy any sales or business tools to launch or thrive in your Aversa Herbals Associateship.
<br/>
<br/>
At Aversa Herbals, we prioritize transparency and clarity. Each product label clearly outlines its benefits and recommended usage, ensuring that you achieve realistic results by using our products correctly.
<br/>
<br/>
We provide honest insights into the business opportunity and the level of dedication required to succeed at every stage.
<br/>
<br/>
Rest assured, we offer prospective Associates accurate and timely disclosures regarding potential income, empowering you to make informed decisions about your future with Aversa Herbals.
<br/>
<br/>
Embark on your journey with confidence, knowing that Aversa Herbals is committed to your success and well-being.
              </p>
  </Card.Body></Card>
                </Col>
                
            </Row>
        </Container>
    </div>
    </div>
  )
}

export default BoSectionThree