import React, { useEffect } from "react";
import WebsiteHomepage from "../Container/WebsiteHomepage/WebsiteHomepage";
import { Route, Routes, useLocation } from "react-router-dom";
import WebsiteNavbar from "../Components/WebsiteNavbar/WebsiteNavbar";
import ProductsPage from "../Container/ProductsPage/ProductsPage";
import WellnessResourcesPage from "../Container/WellnessResourcesPage/WellnessResourcesPage";
import AboutUsPage from "../Container/AboutUsPage/AboutUsPage";
import ContactPage from "../Container/ContactPage/ContactPage";
import WebsiteFooter from "../Components/WebsiteFooter/WebsiteFooter";
import BusinessOpportunity from "../Container/BusinessOpportunityPage/BusinessOpportunity";
import RegistrationPage from "../Container/RegistrationPage/RegistrationPage";
import LoginPage from "../Container/LoginPage/LoginPage";
import ProductDetailsPage from "../Container/ProductDetailsPage/ProductDetailsPage";

const WebRoutes = () => {
  function ScrollToTop() {
    const { pathname } = useLocation();
  
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
  
    return null;
  }
  return (
    <div>
    <ScrollToTop/>
      <WebsiteNavbar />
      <div style={{marginTop:"75px"}}>
      <Routes>
        <Route path="/*" element=<WebsiteHomepage /> />
        <Route path="/aversa-herbal-products" element=<ProductsPage /> />
        <Route path="/aversa-herbal-product-details/:id/:title" element=<ProductDetailsPage/> />
        <Route path="/aversa-herbal-wellness-resources" element=<WellnessResourcesPage /> />
        <Route path="/aversa-herbal-about-us" element=<AboutUsPage /> />
        <Route path="/aversa-herbal-contact-us" element=<ContactPage /> />
        <Route path="/aversa-herbal-business-opportunity" element=<BusinessOpportunity/> />
        <Route path="/aversa-herbal-sign-up" element=<RegistrationPage/> />
        <Route path="/aversa-herbal-login" element=<LoginPage/> />
      </Routes>
    </div>
    <div style={{marginTop:"40px"}}>
    <WebsiteFooter/>
    </div>
    </div>
  );
};

export default WebRoutes;
