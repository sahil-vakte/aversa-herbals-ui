import React from "react";
import WebsiteHomepage from "../Container/WebsiteHomepage/WebsiteHomepage";
import { Route, Routes } from "react-router-dom";
import WebsiteNavbar from "../Components/WebsiteNavbar/WebsiteNavbar";
import ProductsPage from "../Container/ProductsPage/ProductsPage";
import WellnessResourcesPage from "../Container/WellnessResourcesPage/WellnessResourcesPage";
import AboutUsPage from "../Container/AboutUsPage/AboutUsPage";
import ContactPage from "../Container/ContactPage/ContactPage";

const WebRoutes = () => {
  return (
    <div>
      <WebsiteNavbar />
      <div style={{marginTop:"80px"}}>
      <Routes>
        <Route path="/*" element=<WebsiteHomepage /> />
        <Route path="/aversa-herbal-products" element=<ProductsPage /> />
        <Route path="/aversa-herbal-wellness-resources" element=<WellnessResourcesPage /> />
        <Route path="/aversa-herbal-about-us" element=<AboutUsPage /> />
        <Route path="/aversa-herbal-contact-us" element=<ContactPage /> />
      </Routes>
    </div>
    </div>
  );
};

export default WebRoutes;
