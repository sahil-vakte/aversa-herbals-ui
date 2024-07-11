import React from "react";
import SectionOne from "../../Components/HomePage/SectionOne";
import TopProducts from "../../Components/HomePage/TopProducts";
import BusinessOpportunityInfo from "../../Components/HomePage/BusinessOpportunityInfo";
import SectionTwo from "../../Components/HomePage/SectionTwo";
import SectionThree from "../../Components/HomePage/SectionThree";
import WebNavbarAdd from "../../Components/WebsiteNavbar/WebNavbarAdd";
import Category from "./../../Components/HomePage/Catageory/Category";
import { Card } from "./../../Components/HomePage/PopularProducts/Card";

const WebsiteHomepage = () => {
  return (
    <div>
      <div>
        <WebNavbarAdd />
      </div>
      <div>
        <SectionOne />
      </div>
      <div style={{ marginTop: "80px" }}>
        <SectionTwo />
      </div>
      <div style={{ marginTop: "80px" }}>
        <TopProducts />
      </div>
      <div style={{ marginTop: "80px" }}>
        <SectionThree />
      </div>
      {/* Best selling product section  */}
      <div className="flex justify-center pb-16">
        <div className="w-[80%]">
          <p className="best-selling-heading">
            <span
              style={{
                color: "transparent",
                // border: "1px solid #266431",
                WebkitTextStroke: "1px #266431",
              }}
            >
              Best
            </span>
            <span style={{ color: "#266431" }}> Selling Product </span>
          </p>
        </div>
      </div>
      <Card />

      <div className="flex justify-center pb-16">
        <div className="w-[80%] flex justify-start">
          <p className="text-[#266431] font-bold">See More >>>>></p>
        </div>
      </div>
      <div style={{ marginTop: "80px" }}>
        <BusinessOpportunityInfo />
      </div>

      <div className="flex justify-center">
        <Category />
      </div>
    </div>
  );
};

export default WebsiteHomepage;
