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
            <div>
              <p className="sm:text-3xl md:text-4xl header-for-abouts-section-text">
                Welcome To,
                <br />{" "}
                <b className="font-bold header-for-abouts-section-text">
                  Aversa Herbals
                </b>
              </p>

              <h5 className="text-lg MISSION-bharat-for-abouts-section-text ">
                ON A MISSION <br />
                TO HEALTHY & WEALTHY <br /> BHARAT.
              </h5>
            </div>
            <div>
              <img src={BranchImage} alt="" className="branch-image" />
            </div>
          </Col>
          <Col sm={6} className="right-column-for-home-page-first-div">
            <img
              src={GroupImage}
              alt="team image"
              className="landing-page-team-img"
            />
            <p className="text-base sm:text-lg para-sub-heading-about">
              At Aversa Herbals, we're on a mission to promote health and wealth
              across Bharat. As a leading Herbal Product Company, we operate on
              the principles of direct selling and multi-level marketing,
              empowering individuals to achieve their wellness and financial
              goals. <br /> <br /> Our dedicated team of owners, directors, and
              employees are committed to delivering high-quality herbal products
              and unparalleled support to our valued customers and partners.
              <br /> <br />
              Together, we strive to create a healthier and wealthier future for
              every individual we touch.
            </p>
            <div style={{ textAlign: "right" }}>
              <Link
                to="/contact-us-page-aversa-herbal"
                className="no-underline"
              >
                <button className="see-all-products-button flex items-center gap-3">
                  Show Herbal Products
                  {/* <IoIosArrowDropright style={{ color: "white" }} /> */}
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
