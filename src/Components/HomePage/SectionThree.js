import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import kahalbattaImage from "../../Assets/khalbattass.PNG";
import BranchImage from "../../Assets/BRANCH.png";
import { Link } from "react-router-dom";
import { IoIosArrowDropright } from "react-icons/io";

const SectionThree = () => {
  return (
    <div>
      <Container>
        <Row className="align-items-center">
          <Col sm={6}>
            <h1 className="explore-our-range-of-text-home-page">
              <span style={{ fontWeight: "400" }}>Why </span>
              <br />
              <b>Herbal</b>{" "}
              <span style={{ fontWeight: "400" }}>Products ?</span>
            </h1>
            <p className="paragraph-text-for-home-page-third-section-why-products">
              Herbs are nature’s gift of health and longevity. They do not have
              any side effects, <br />
              <br /> They are absorbed easily and because of their different
              characteristics such as tastes, potencies, qualities they
              influence body and mind.
              <br />
              <br />
              "Herbal products are natural and gentle on the body, made from
              plants. They have no side effects and can help improve health
              without harsh chemicals.
              <br />
              <br />
              They treat the root cause of issues and are safe to use."
            </p>
            <div style={{ textAlign: "left" }}>
              <Link to="/aversa-herbal-products" className="no-underline">
                <button className="see-all-products-button">
                  Shop Herbal Products
                  {/* <IoIosArrowDropright
                    style={{ color: "white", height: "20px", width: "20px" }}
                  /> */}
                </button>
              </Link>
            </div>
            {/* <img src={BranchImage} alt="" className="branch-image" /> */}
          </Col>
          <Col sm={6}>
            <img
              src={kahalbattaImage}
              alt="team image"
              className="landing-page-team-img"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SectionThree;
