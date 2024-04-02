import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FaPhone,FaLocationDot  } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const CuSectionTwo = () => {
  return (
    <div className="products-page-linear-gradient-bg" style={{paddingTop:"20px",paddingBottom:"20px"}}>
      <Container>
        <Row>
          <Col sm={5}>
            <h1 className="aversa-herbals-head-tag">​​We’re here to help.​</h1>
            <p className="aversa-herbals-para-tag-one">
              Whether you have product questions or an interest in the Herbalife
              business opportunity, we encourage you to reach out to your local
              Herbalife Independent Associate. They are dedicated to answering
              your questions and providing you with the personalised support you
              need.
              <br />
              <br />
              We also understand that you may need to contact Herbalife directly
              for a question. Here’s how to connect with your local Herbalife
              Customer Service.             
            </p>
          </Col>
          <Col sm={1}></Col>
          <Col sm={6}>
            <div style={{ borderBottom: "2px solid gray" }}>
              <h1
                className="aversa-herbals-head-tag"
                style={{ fontSize: "2rem" }}
              >
                <FaPhone /> Telephone
              </h1>
              <p className="aversa-herbals-para-tag-one">
              +91 97332 42832
                <br />
                Monday - Saturday | 10a.m. - 6p.m. India Standard Time
                            
              </p>
            </div>
            <div style={{ borderBottom: "2px solid gray" }}>
              <h1
                className="aversa-herbals-head-tag"
                style={{ fontSize: "2rem" }}
              >
                <MdEmail /> Email
              </h1>
              <p className="aversa-herbals-para-tag-one">
              Your satisfaction is everything to Herbalife, and that's why we want to be sure you receive accurate, personalised answers. As email responses can often be short, unsatisfying or incomplete, we choose to focus on meaningful customer service, preferably through a personal conversation with Herbalife Head Office or your local Herbalife Independent Associate.
                <br />
                <br />
                If you have a marketing inquiry or idea you’d like to share, email us 
                <br />
                at aversaherbals@gmail.com
                            
              </p>
            </div>
            <div>
              <h1
                className="aversa-herbals-head-tag"
                style={{ fontSize: "2rem" }}
              >
                <FaLocationDot  /> Head Office
              </h1>
              <p className="aversa-herbals-para-tag-one">
              
                Plot No - 368, Niti Khand - 1,
Indira Puram, Ghaziabad
                <br />
Uttar Pradesh - 201014
                            
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default CuSectionTwo;
