import React from "react";
import StartYourBusinessImage from "../../Assets/Group 69940start your bussiness.svg";
import StartYourBusinessImagetwo from "../../Assets/Group 69946start your bussiness 2.svg";
import BackendSupport from "../../Assets/Group 69933back end support 1.svg";
import BackendSupport2 from "../../Assets/Group 69932.svg";
import AbdulKalam from "../../Assets/Group 69925pro. prespective final 2 1abdul kalam jii.svg";
import AbdulKalam2 from "../../Assets/abdul-kalam-small.png";
import benefitsOfDirectSelling from "../../Assets/benefitsofds.svg";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { IoCall } from "react-icons/io5";

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
            <Col sm={5}>
              <h1 className="aversa-herbals-head-tag">
                <span style={{ fontWeight: "300" }}>Full Back End</span> Support
              </h1>
              <p className="aversa-herbals-para-tag-one">
                Once you have become an Independent Direct seller, you have
                exclusive access to our dedicate business center that provides
                back-end support, product information videos, digital and social
                tools for marketing etc.              
                <br />
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

      <div>
        <img
          src={AbdulKalam}
          alt=""
          style={{ width: "100%" }}
          className="non-display-things"
        />
        <img
          src={AbdulKalam2}
          alt=""
          style={{ width: "100%" }}
          className="display-mobile-abdul-image"
        />
      </div>
      <div style={{ marginTop: "60px" }}>
        <img src={benefitsOfDirectSelling} style={{ width: "100%" }}/>
      </div>
    </div>
  );
};

export default BoSectionThree;
