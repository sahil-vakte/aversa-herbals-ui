import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import UserImageDiscuss from "../../Assets/300-SM1085970 1.png";

const BoSectionTwo = () => {
  return (
    <div>
      <Container>
        <Row className="align-items-center">
          <Col
            sm={6}
            className="mb-2 col-for-aversa-herbal-section-two-direct-seller-bussiness-op"
          >
            <h1 className="aversa-herbals-head-tag-b-section-two-direct-seller">
              <span style={{ fontWeight: "300" }}>Become a</span> Direct seller
              <span style={{ fontWeight: "300" }}> in</span> few
              <span style={{ fontWeight: "300" }}> simple</span> steps
            </h1>
            <p className="para-sub-heading-about">
              By becoming a aversa herbals direct seller, you are entering a
              world of limitless possibilities. With over millions of direct
              seller spread across India, you join an exclusive network of
              successful entrepreneurs and leaders who will guide you through
              every step of the way.
            </p>
            <div className="mt-d">
              <Link
                to="/aversa-herbal-sign-up"
                style={{ textDecoration: "none" }}
              >
                <button className="register-now-business-opp-btn">
                  Register Now
                </button>
              </Link>
            </div>
          </Col>
          <Col sm={6} className="mb-2">
            <img
              src={UserImageDiscuss}
              alt="landing-image"
              className="aversa-images-of-no-hexagone"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default BoSectionTwo;
