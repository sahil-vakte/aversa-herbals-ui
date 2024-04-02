import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import missionlogo from "../../Assets/missionlogo.jpg";
import ourvalue from "../../Assets/ourvaluelogo.jpg";
import { FaHandPointRight } from "react-icons/fa";
import { IoIosArrowDropright } from "react-icons/io";

const AboutSectionOne = () => {
  return (
    <Container>
      <Row>
        <Col className="abtimg-left-sd" sm={6}>
          <img src="abtimg-left-sd" alt="" />
        </Col>
        <Col className="abtimg-right-sd" sm={6}>
          <div className="abtalignment-right-sd">
            <h1 className="aversa-herbals-head-tag  ">About Us</h1>
            <p className="aversa-herbals-para-tag-one">
              Welcome to Aversa Herbals, your trusted source for premium herbal
              products and empowering business opportunities. Founded with a
              vision to promote holistic wellness and financial freedom, Aversa
              Herbals is committed to providing you with the highest quality
              herbal remedies backed by centuries of traditional wisdom and
              modern scientific research.
            </p>
            <button className="see-all-products-button">
                 Shop Now{" "}
                  <IoIosArrowDropright
                    style={{ color: "white", height: "20px", width: "20px" }}
                  />
                </button>
          </div>
        </Col>
      </Row>
      <Row>
        <Col className="abtimg-right-sd" sm={6}>
          <div className="abtalignment-right-sd">
            <h1 className="aversa-herbals-head-tag  ">Our Mission</h1>
            <p className="aversa-herbals-para-tag-one">
              At Aversa Herbals, our mission is to empower individuals to take
              control of their health and finances through natural wellness
              solutions and entrepreneurial endeavors. We strive to: Provide
              Access to Nature's Bounty: We believe in harnessing the power of
              nature to create products that nourish the body, mind, and soul.
              Foster Community and Collaboration: We're dedicated to building a
              supportive community of individuals who share our passion for
              natural health and personal growth. Promote Ethical Business
              Practices: Integrity, transparency, and fairness are at the core
              of everything we do, ensuring a sustainable and equitable business
              model for all. Our Commitment to Quality Quality is our top
              priority at Aversa Herbals. We meticulously select the finest
              herbs and botanicals from reputable sources to ensure purity,
              potency, and effectiveness in every product. Our manufacturing
              processes adhere to strict quality standards and are subject to
              rigorous testing to guarantee safety and efficacy. Our Multi-Level
              Marketing (MLM) Program Aversa Herbals offers more than just
              exceptional products; we also provide a pathway to financial
              independence through our multi-level marketing (MLM) program. By
              joining our team of passionate entrepreneurs, you'll have the
              opportunity to: Earn Income: Build your own business and generate
              income by sharing our products and business opportunity with
              others. Enjoy Flexibility: Enjoy the freedom to work on your own
              terms, whether part-time or full-time, and create a schedule that
              fits your lifestyle. Receive Support and Training: Access valuable
              resources, training materials, and ongoing support from our
              experienced team to help you succeed in your business endeavors.
              Join Us Today Whether you're seeking natural solutions for your
              health or looking to embark on a rewarding entrepreneurial
              journey, Aversa Herbals welcomes you with open arms. Join our
              community today and experience the transformative power of herbal
              wellness and financial freedom.
            </p>
            <button className="see-all-products-button">
                 Join Now{" "}
                  <IoIosArrowDropright
                    style={{ color: "white", height: "20px", width: "20px" }}
                  />
                </button>
          </div>
        </Col>

        <Col className="missionimg-left-sd" sm={6}>
          <img src={missionlogo} alt="" />
        </Col>
      </Row>

      <Row>
        <Col className="ourvalueimg-left-sd" sm={6}>
          <img src={ourvalue} alt="" />
        </Col>
        <Col className="abtimg-right-sd" sm={6}>
          <div className="abtalignment-right-sd">
            <h1 className="aversa-herbals-head-tag  ">Our Values</h1>
            <p className="aversa-herbals-para-tag-one">
              <FaHandPointRight /> &nbsp;
              Commitment To Quality
              <br /> <br />
              <FaHandPointRight /> &nbsp;
              Respect To Nature <br /> <br />
              <FaHandPointRight /> &nbsp;
              Empowering individuals to take control of their health <br />{" "}
              <br />
              <FaHandPointRight /> &nbsp;
              Continuous innovation and improvement <br />
            </p>
            
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutSectionOne;
