import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import RegistrationForm from "../../Components/Registration/RegistrationForm";
import { Link } from "react-router-dom";
import LoginForm from "./LoginForm";

const LoginPage = () => {
  return (
    <div className="login-page-background">
      <div className="registration-content" style={{backgroundColor:"rgb(196 196 196 / 70%)"}}>
        <Container>
          <Row className="align-items-center">
            <Col sm={8}>
              <h1 className="aversa-herbals-head-tag">
              Welcome Back to Aversa Herbals!
              </h1>
              <p className="aversa-herbals-para-tag-one">
              Already a member? Sign in below to access your account and explore our range of wellness products.             
              </p>
              <p className="aversa-herbals-para-tag-one">
              Not yet a member? {" "}
              <Link to="/aversa-herbal-sign-up">
              Join us 
              </Link> {" "}
              today to enjoy exclusive benefits such as discounts on products, special offers, and the opportunity to build your own business through our multi-level marketing (MLM) program.
              </p>
            </Col>
            <Col sm={4}>
              <LoginForm/>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default LoginPage;
