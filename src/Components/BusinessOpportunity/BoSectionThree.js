import React from "react";
import StartYourBusinessImage from "../../Assets/Group 69940start your bussiness.png";
import StartYourBusinessImagetwo from "../../Assets/Group 69946start your bussiness 2.png";
import BackendSupport from "../../Assets/Group 69933.png";
import BackendSupport2 from "../../Assets/Group 69932.svg";
import AbdulKalam2 from "../../Assets/abdul-kalam-small.png";
import benefitsOfDirectSelling1 from "../../Assets/Group 70053@2x.png";
import benefitsOfDirectSelling2 from "../../Assets/Group 70054@2x.png";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { IoCall } from "react-icons/io5";
import backgroundShade from "../../Assets/backgroundshade.png";

const BoSectionThree = () => {
  return (
    <div>
      <div>
        <img src={StartYourBusinessImage} style={{ width: "100%" }} />
      </div>
      <Container>
        <div style={{ marginTop: "60px" }}>
          <img src={StartYourBusinessImagetwo} style={{ width: "100%" }} />
        </div>

        <div style={{ marginTop: "60px" }}>
          <Row>
            <Col sm={5}>
              <img src={BackendSupport} style={{ width: "100%" }} />
            </Col>
            <Col sm={1}></Col>
            <Col
              sm={5}
              className="col-for-aversa-herbal-section-two-direct-seller-bussiness-op"
            >
              <h1 className="aversa-herbals-head-tag-b-section-two-direct-seller">
                <span style={{ fontWeight: "300" }}>Full Back End</span> Support
              </h1>
              <p className="para-sub-heading-about">
                Once you have become an Independent Direct seller, you have
                exclusive access to our dedicate business center that provides
                back-end support, product information videos, digital and social
                tools for marketing etc.
                <br /> <br />
                Our customized training program will help you learn the nuances
                of marketing like building customer base, sales techniques, and
                product pitches among other useful skills.
              </p>
              <div className="mt-d">
                <button
                  className="register-now-business-opp-btn"
                  onClick={() => {
                    window.location.href = "tel:+919733242832";
                  }}
                >
                  <IoCall style={{ width: "21px" }} /> Call Us Now
                </button>
              </div>
            </Col>
            <Col sm={1}>
              <img
                src={BackendSupport2}
                style={{ width: "100%" }}
                className="non-display-things"
              />
            </Col>
          </Row>
        </div>
      </Container>
      <div className="contains-main-text-for-abdul-kalam-section">
        <div className="rectangle-for-abdul-kalam-bill-gates-image-one"></div>
        <h1 className="aversa-herbals-head-tag-b-section-two-direct-seller">
          <span style={{ fontWeight: "300" }}>A</span> Professional Perspective{" "}
          <br />
          <span style={{ fontWeight: "300" }}>On Business Oppourtunity</span>
        </h1>
        <div className="rectangle-for-abdul-kalam-bill-gates-image-two"></div>
      </div>
      <div style={{}}>
        <img src={AbdulKalam2} alt="" className="non-display-things" />
      </div>
      <div
        className="flex justify-center py-16 benefits-of-being-direct-seller-section-bo"
        style={{
          backgroundImage: `url(${backgroundShade})`,
          backgroundRepeat: "repeat",
        }}
      >
        <div>
          <img src={benefitsOfDirectSelling1} style={{ width: "100%" }} />
        </div>
        <div>
          <img src={benefitsOfDirectSelling2} style={{ width: "100%" }} />
        </div>
      </div>
    </div>
  );
};

export default BoSectionThree;
