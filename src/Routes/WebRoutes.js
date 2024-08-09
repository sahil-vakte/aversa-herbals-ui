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
import PaymentForm from "../Components/RazerpayPayments/PaymentForm";
import TermsandConditions from "../Components/Policies/TermsandConditions";
import CartPage from "../Components/CartPage/CartPage";
import PrivacyPolicy from "../Components/Policies/PrivacyPolicy";
import RefundandCancellation from "../Components/Policies/RefundandCancellation";
import ShippingPolicy from "../Components/Policies/ShippingPolicy";
import MyOrdersPage from "../Container/MyOrdersPage/MyOrdersPage";
import BoFormSection from "../Components/BusinessOpportunity/BoFormSection";

const WebRoutes = () => {
  function ScrollToTop() {
    const { pathname } = useLocation();
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);

    return null;
  }

  const { pathname } = useLocation();

  return (
    <div>
      <ScrollToTop />
      <WebsiteNavbar />
      <div style={{ marginTop: "75px" }}>
        <Routes>
          <Route path="/*" element=<WebsiteHomepage /> />
          <Route path="/aversa-herbal-products" element=<ProductsPage /> />
          <Route
            path="/aversa-herbal-product-details/:id/:title"
            element=<ProductDetailsPage />
          />
          <Route
            path="/aversa-herbal-wellness-resources"
            element=<WellnessResourcesPage />
          />
          <Route path="/aversa-herbal-about-us" element=<AboutUsPage /> />
          <Route path="/aversa-herbal-contact-us" element=<ContactPage /> />
          <Route
            path="/aversa-herbal-business-opportunity"
            element=<BusinessOpportunity />
          />
          <Route path="/aversa-herbal-sign-up" element=<RegistrationPage /> />
          <Route path="/aversa-herbal-login" element=<LoginPage /> />
          <Route path="/aversa-herbal-cart" element=<CartPage /> />
          <Route
            path="/aversa-herbal-terms-and-conditions"
            element=<TermsandConditions />
          />
          <Route
            path="/aversa-herbal-privacy-policy"
            element=<PrivacyPolicy />
          />
          <Route
            path="/aversa-herbal-refund-and-cancellation-policy"
            element=<RefundandCancellation />
          />
          <Route
            path="/aversa-herbal-shipping-policy"
            element=<ShippingPolicy />
          />
          <Route
            path="/aversa-herbal-my-orders-page"
            element=<MyOrdersPage />
          />{" "}
          <Route
            path="/aversa-herbal-business-opportunity-form"
            element=<BoFormSection />
          />
          <Route path="/checkout" element=<PaymentForm/> />
        </Routes>
      </div>
      <div
        style={{
          marginTop:
            pathname === "/aversa-herbal-sign-up" ||
            pathname === "/aversa-herbal-cart"
              ? "0px"
              : "40px",
        }}
      >
        <WebsiteFooter />
      </div>
    </div>
  );
};

export default WebRoutes;
