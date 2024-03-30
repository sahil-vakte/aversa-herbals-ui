import React from "react";
import AboutSectionOne from "../../Components/AboutPage/AboutSectionOne";
import AboutSectionTwo from "../../Components/AboutPage/AboutSectionTwo";

const AboutUsPage = () => {
  return (
    <div>
      <div>
        <AboutSectionOne />
      </div>
      <div style={{ marginTop: "30px" }}>
        <AboutSectionTwo />
      </div>
    </div>
  );
};

export default AboutUsPage;
