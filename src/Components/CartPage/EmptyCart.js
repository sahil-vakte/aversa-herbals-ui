import React from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap'
import EmptyCartImage from "../../Assets/cartempty.svg"
import { Link } from 'react-router-dom';

const EmptyCart = () => {
  const userId = localStorage.getItem("userId");

  return (
    <div>
        <Card>
            <Card.Body>
                <Row>
                    <Col sm={5}>
                        <img src={EmptyCartImage}/>
                    </Col>
                    <Col sm={7}>
                        <h3>Your Aversa Cart is empty</h3>
                        {userId ? 
                        <Link to="/aversa-herbal-products">
                            <p>
                                Explore Aversa Herbal Products
                            </p>
                        </Link>
                        :
                            <div className='mt-3' style={{display:"flex",gap:"20px",flexWrap:"wrap"}}>
                            <Link to="/aversa-herbal-login">
                                <Button variant="secondary">Login to your Account</Button>
                            </Link>
                            <Link to="/aversa-herbal-sign-up">
                                <Button variant="warning">Sign Up now</Button>
                                </Link>
                            </div>
                        
                         }
                    </Col>
                </Row>
            </Card.Body>
           
        </Card>
        <Card className='mt-3'>
                <Card.Body >
                         <div style={{padding:"20px"}}></div>
                </Card.Body>
            </Card>
    </div>
  )
}

export default EmptyCart