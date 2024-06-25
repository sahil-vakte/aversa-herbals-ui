import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import GroupImage from "../../Assets/groupimg.jpg";
import BranchImage from "../../Assets/BRANCH.png";
import { Link } from "react-router-dom";
import { IoIosArrowDropright } from "react-icons/io";

const SectionTwo = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col sm={6}>
            <h1 className="aversa-herbals-head-tag">
              <span style={{ fontWeight: "400" }}>Welcome to </span>
              <br />
              <b>Aversa Herbals,</b>
            </h1>
            <p className="aversa-herbals-head-tag">
              ON A MISSION <br />
              TO HEALTHY & WEALTHY <br /> BHARAT.
            </p>
            <img src={BranchImage} alt="" className="branch-image" />
          </Col>
          <Col sm={6}>
            <img
              src={GroupImage}
              alt="team image"
              className="landing-page-team-img"
            />
            <p className="aversa-herbals-para-tag-one">
              At Aversa Herbals, we're on a mission to promote health and wealth
              across Bharat. As a leading Herbal Product Company, we operate on
              the principles of direct selling and multi-level marketing,
              empowering individuals to achieve their wellness and financial
              goals. <br /> Our dedicated team of owners, directors, and
              employees are committed to delivering high-quality herbal products
              and unparalleled support to our valued customers and partners.
              Together, we strive to create a healthier and wealthier future for
              every individual we touch.
            </p>
            <div style={{ textAlign: "right" }}>
              <Link to="/aversa-herbal-products">
                <button className="see-all-products-button">
                  More About Us{" "}
                  <IoIosArrowDropright
                    style={{ color: "white", height: "20px", width: "20px" }}
                  />
                </button>
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SectionTwo;
