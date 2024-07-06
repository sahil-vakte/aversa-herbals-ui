import React from "react";
import BoSectionOne from "../../Components/BusinessOpportunity/BoSectionOne";
import BoSectionTwo from "../../Components/BusinessOpportunity/BoSectionTwo";
import BoSectionThree from "../../Components/BusinessOpportunity/BoSectionThree";
import { Container } from "react-bootstrap";
import BoFormSection from "../../Components/BusinessOpportunity/BoFormSection";

const BusinessOpportunity = () => {
  return (
    <div>
      <div style={{ marginTop: "60px" }}>
        <BoSectionOne />
      </div>
      <div style={{ marginTop: "60px" }}>
        <BoSectionTwo />
      </div>
      <div style={{ marginTop: "60px" }}>
        <BoSectionThree />
      </div>
      <div style={{ marginTop: "60px" }}>
        <BoFormSection />
      </div>
    </div>
  );
};

export default BusinessOpportunity;
