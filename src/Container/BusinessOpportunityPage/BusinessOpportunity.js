import React from "react";
import BoSectionOne from "../../Components/BusinessOpportunity/BoSectionOne";
import BoSectionTwo from "../../Components/BusinessOpportunity/BoSectionTwo";
import BoSectionThree from "../../Components/BusinessOpportunity/BoSectionThree";
import { Container } from "react-bootstrap";

const BusinessOpportunity = () => {
  return (
    <div>
      <Container>
        <h1 className="aversa-herbals-head-tag" style={{ textAlign: "center" }}>
          Aversa Herbals Business Opportunity
        </h1>
        <p
          className="aversa-herbals-para-tag-one"
          style={{ textAlign: "center" }}
        >
          Welcome to Aversa Herbals, Where direct selling transforms lives
          discover the power of this unique business <br/> model and embark on a
          journey of empowerment and success. Learn what direct selling is<br/> all
          about and how becoming a distributor with Aversa Herbals, Can change
          your life.
        </p>
      </Container>
      <div style={{marginTop: "60px"}}>
        <BoSectionOne />
      </div>
      <div style={{ marginTop: "60px" }}>
        <BoSectionTwo />
      </div>
      <div style={{ marginTop: "60px" }}>
        <BoSectionThree />
      </div>
    </div>
  );
};

export default BusinessOpportunity;
