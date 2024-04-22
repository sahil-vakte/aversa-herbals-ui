import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import kahalbattaImage from "../../Assets/full colour khalbatta 1.svg";
import BranchImage from "../../Assets/BRANCH.png";
import { Link } from "react-router-dom";
import { IoIosArrowDropright } from "react-icons/io";

const SectionThree = () => {
  return (
    <div>
      <Container>
        <Row className="align-items-center">
          <Col sm={6}>
            <h1 className="aversa-herbals-head-tag">
            <span style={{fontWeight:"400"}}>Why </span> 
            <br/><b>Herbal</b> {" "} 
            <span style={{fontWeight:"400"}}>Products ?</span> 
            </h1>
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
            <div style={{ textAlign: "left" }}>
        <Link to="/aversa-herbal-products">
          <button className="see-all-products-button">
            More About Us{" "}
            <IoIosArrowDropright
              style={{ color: "white", height: "20px", width: "20px" }}
            />
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
              style={{maxHeight:"500px"}}
            />
     
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SectionThree;
