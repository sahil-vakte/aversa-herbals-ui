import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { IoIosArrowDropright } from "react-icons/io";

import { Link } from "react-router-dom";

const BusinessOpportunityInfo = () => {
  return (
    <div className="landing-page-section-one-bg">
      <Container>
        <Row className="align-items-center">
          <Col sm={6}>
            <img
              src="https://media.istockphoto.com/id/1369199360/photo/portrait-of-a-handsome-young-businessman-working-in-office.jpg?s=612x612&w=0&k=20&c=ujyGdu8jKI2UB5515XZA33Tt4DBhDU19dKSTUTMZvrg="
              alt="landing-image"
              className="aversa-images-of-hexagone"
            />
          </Col>
          <Col sm={6}>
            <h1 className="aversa-herbals-head-tag">
              Unlock Your Potential with Aversa Herbals
            </h1>
            <p className="aversa-herbals-para-tag-one">
              Are you ready to take control of your financial future while
              promoting wellness and vitality? At Aversa Herbals, we offer an
              exciting business opportunity that empowers individuals to build
              their own successful ventures through multi-level marketing (MLM).
                          
            </p>
            <div style={{ textAlign: "right" }}>
              <Link to="/aversa-herbal-business-opportunity">
                <button className="see-all-products-button">
                  Read More about Business Opportunity{" "}
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

export default BusinessOpportunityInfo;
