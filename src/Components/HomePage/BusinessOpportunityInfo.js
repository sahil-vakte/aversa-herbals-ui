import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import DreamImage from "../../Assets/dream 1.png";
import TravelImage from "../../Assets/SM519080 1.png";
import CraftImage from "../../Assets/220-SM555154 1.png";
import ConnectImage from "../../Assets/220-SM910322 3.png";
import { Link } from "react-router-dom";

const BusinessOpportunityInfo = () => {
  return (
    <>
      <Container>
        <Row>
          <div className="flex gap-4 items-end">
            <h1 className="explore-our-range-of-text-home-page">
              <b>Discover</b> <br />
              <span style={{ fontWeight: "400" }}>
                The Business Opportunity
              </span>
            </h1>
            <Link
              to="/aversa-herbal-business-opportunity-form"
              className="no-underline"
            >
              <button className="Join-Us-Now-btn-home">
                Join Us Now
                {/* <IoIosArrowDropright
                  style={{ color: "white", height: "20px", width: "20px" }}
                /> */}
              </button>
            </Link>
          </div>
        </Row>
      </Container>
      <div className="business-opportunity-bg-padding">
        <div className="business-opportunity-bg">
          <Row className="custom-business-opportunity-home-page-row">
            <Col sm={3} style={{ textAlign: "center" }}>
              <img
                src={DreamImage}
                alt=""
                className="images-in-business-in-home-page"
              />
              <div>
                <h3 className="images-in-business-in-home-page-h3-tag">
                  Make your dreams real
                </h3>
                <p className="images-in-business-in-home-page-p-tag">
                  No investment, no risk. Start now and pave your path to
                  success hassle-free.{" "}
                </p>
              </div>
            </Col>
            <Col sm={3} style={{ textAlign: "center" }}>
              <img
                src={TravelImage}
                alt=""
                className="images-in-business-in-home-page"
              />
              <div>
                <h3 className="images-in-business-in-home-page-h3-tag">
                  Travel & Celebrate
                </h3>
                <p className="images-in-business-in-home-page-p-tag">
                  Your success celebrated worldwide, Your hard work never goes
                  unnoticed!
                </p>
              </div>
            </Col>
            <Col sm={3} style={{ textAlign: "center" }}>
              <img
                src={CraftImage}
                alt=""
                className="images-in-business-in-home-page"
              />
              <div>
                <h3 className="images-in-business-in-home-page-h3-tag">
                  Craft your life, your way
                </h3>
                <p className="images-in-business-in-home-page-p-tag">
                  Unlock your entrepreneurial spirit, Be your own boss. Earn
                  more.
                </p>
              </div>
            </Col>
            <Col sm={3} style={{ textAlign: "center" }}>
              <img
                src={ConnectImage}
                alt=""
                className="images-in-business-in-home-page"
              />
              <div>
                <h3 className="images-in-business-in-home-page-h3-tag">
                  Connect, Collaborate & Grow
                </h3>
                <p className="images-in-business-in-home-page-p-tag">
                  Opportunity to meet India's top leaders and business Gurus.
                </p>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
};

export default BusinessOpportunityInfo;
