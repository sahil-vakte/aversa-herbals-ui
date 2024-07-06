import React from "react";
import CuSectionOne from "../../Components/ContactUs/CuSectionOne";
import CuSectionTwo from "../../Components/ContactUs/CuSectionTwo";

const ContactPage = () => {
  return (
    <div>
      <div>
        <CuSectionOne />
      </div>
      <div className="py-12">
        <CuSectionTwo />
      </div>
    </div>
  );
};

export default ContactPage;
