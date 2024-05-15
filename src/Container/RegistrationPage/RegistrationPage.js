import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import RegistrationForm from "../../Components/Registration/RegistrationForm";
import { Link } from "react-router-dom";

const RegistrationPage = () => {
  return (
    <div className="registration-page-background">
      <div className="registration-content">
        <Container>
          <Row className="align-items-center">
            <Col sm={6}>
              <h1 className="aversa-herbals-head-tag">
                New to Aversa Herbals? Join Us Today!
              </h1>
              <p className="aversa-herbals-para-tag-one">
                Become a part of our thriving community and embark on a journey
                towards wellness and prosperity. Join as a member to enjoy
                discounts on products, exclusive offers, and the chance to build
                your own business through our multi-level marketing (MLM)
                program.             
              </p>
              <p className="aversa-herbals-para-tag-one">
              Please {" "}
              <Link to="/aversa-herbal-login">
              Login 
              </Link> {" "}
              If you already have an account
              </p>
            </Col>
            <Col sm={6}>
            <div className="regi-stration-from-bg">
              <RegistrationForm/>
            </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default RegistrationPage;
