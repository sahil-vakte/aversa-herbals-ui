import React, { useState } from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { BsCart4 } from "react-icons/bs";
import Aversalogo from "../../Assets/aversa_full_colour_1.svg";
import { Link, useLocation } from "react-router-dom"; 
import "./WebsiteNavbar.css";
import { FaChevronDown } from "react-icons/fa";
import NavProductList from "./NavProductList"; 

const WebsiteNavbar = () => {
  const location = useLocation(); 
  const [showProductList, setShowProductList] = useState(false);

  const handleProductLinkHover = () => {
    setShowProductList(true);
  };

  const handleProductLinkLeave = () => {
    setShowProductList(false);
  };

  

  return (
    <div>
      <div className="fixed-navbar-classname">
        <Navbar
          collapseOnSelect
          expand="lg"
          style={{ paddingLeft: "20px", paddingRight: "20px" }}
        >
          <img src={Aversalogo} alt="" className="brandlogo-styling" />
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto d-flex justify-content-end w-100 navbar-content-gap">
              <Link
                className={
                  location.pathname === "/"
                    ? "selected-nav-link-navbar"
                    : "nav-link"
                }
                to="/"
              >
                Home
              </Link>
              <Link
                className={
                  location.pathname === "/aversa-herbal-about-us"
                    ? "selected-nav-link-navbar"
                    : "nav-link"
                }
                to="/aversa-herbal-about-us"
              >
                About
              </Link>
              <div
                onMouseEnter={handleProductLinkHover}
                onMouseLeave={handleProductLinkLeave}
                style={{ position: "relative" }}
              >
                <Link
                  className={
                    location.pathname === "/aversa-herbal-products"
                      ? "selected-nav-link-navbar"
                      : "nav-link"
                  }
                  to="/aversa-herbal-products"
                  style={{ display: "flex", gap: "5px", alignItems: "center" }}
                >
                  Products <FaChevronDown />
                </Link>
              </div>
              <Link
                className={
                  location.pathname === "/aversa-herbal-business-opportunity"
                    ? "selected-nav-link-navbar"
                    : "nav-link"
                }
                to="/aversa-herbal-business-opportunity"
              >
                Business Opportunity
              </Link>
              <Link
                className={
                  location.pathname === "/aversa-herbal-contact-us"
                    ? "selected-nav-link-navbar"
                    : "nav-link"
                }
                to="/aversa-herbal-contact-us"
              >
                Contact
              </Link>
              {/* <Link
                className={
                  location.pathname === "/aversa-herbal-login"
                    ? "selected-nav-link-navbar"
                    : "nav-link"
                }
                to="/aversa-herbal-login"
              >
                Login
              </Link> */}
              <Link
                className={
                  location.pathname === "/aversa-herbal-sign-up"
                    ? "selected-nav-link-navbar"
                    : "nav-link"
                }
                to="/aversa-herbal-sign-up"
              >
                Sign Up
              </Link>
              <Link
                style={{ display: "flex", alignItems: "center" }}
                className={
                  location.pathname === "/aversa-herbal-contact-us"
                    ? "selected-nav-link-navbar"
                    : "nav-link"
                }
                to="/cart"
              >
                 <BsCart4 className="nav-bar-icons" />
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        {showProductList && (
        <div
          style={{
            position: "absolute",
            top: "80px",
            width:"100%",
            left: "50%",
            transform: "translateX(-50%)",
            zIndex: 1000, 
            backgroundColor: "#fff", 
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", 
            padding: "10px",
          }}
        >
          <NavProductList />
        </div>
      )}
      </div>
      
    </div>
  );
};

export default WebsiteNavbar;
