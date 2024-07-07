import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import RegistrationForm from "../../Components/Registration/RegistrationForm";
import { Link } from "react-router-dom";
import aversalogopng from "../../Assets/aversa-logo-png-all.png";
const RegistrationPage = () => {
  return (
    <div className="registration-page-background">
      <div className="registration-content">
        <Container>
          <Row className="two-cols-for-registration-form-and-logo">
            <Col>
              <img className="aversa-logo-png-all" src={aversalogopng} alt="" />
            </Col>
            <Col>
              <div className="regi-stration-from-bg">
                <RegistrationForm />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default RegistrationPage;
