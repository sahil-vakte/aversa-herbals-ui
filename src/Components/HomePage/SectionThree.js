import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import kahalbattaImage from "../../Assets/khalbattass.PNG";
import BranchImage from "../../Assets/BRANCH.png";
import { Link } from "react-router-dom";
import { IoIosArrowDropright } from "react-icons/io";
import antiDiabeticImage from "../../Assets/anti_Diabatic.png";

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
        <div
          className="antidiabetic-wrapper relative w-full h-[300px] lg:h-screen bg-contain mt-10"
          style={{ backgroundImage: `url(${antiDiabeticImage})` }}
        >
          <div className="antidiabetic-content absolute inset-0 flex flex-col items-end justify-center text-center p-8 pr-10">
            <h2 className="antidiabetic-title text-center ">
              ANTI DIABETIC CARE
            </h2>
            <p className="antidiabetic-subtitle text-center">
              blend of Ayurvedic herb
            </p>
            <button className="antidiabetic-button bg-[#266431] text-white text-lg font-bold py-2 px-6 rounded-full hover:bg-[#1E5031] transition duration-300">
              SHOP NOW
            </button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default SectionThree;
