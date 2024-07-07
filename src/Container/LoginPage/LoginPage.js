import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import RegistrationForm from "../../Components/Registration/RegistrationForm";
import { Link } from "react-router-dom";
import LoginForm from "./LoginForm";
import aversalogopng from "../../Assets/aversa-logo-png-all.png";
const LoginPage = () => {
  return (
    <div className="login-page-background">
      <div className="registration-content">
        <Container>
          <Row className="align-items-center">
            <Col>
              <img className="aversa-logo-png-all" src={aversalogopng} alt="" />
            </Col>
            <Col sm={4}>
              <LoginForm />
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default LoginPage;
