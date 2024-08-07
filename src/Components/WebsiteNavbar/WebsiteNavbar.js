import React, { useEffect, useRef, useState } from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { BsCart4 } from "react-icons/bs";
import Aversalogo from "../../Assets/aversa_full_colour_1.svg";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./WebsiteNavbar.css";
import { FaUserCircle } from "react-icons/fa";
import NavProductList from "./NavProductList";
import eventBus from "../CartPage/EventBus";
import axios from "axios";

const WebsiteNavbar = () => {
  const location = useLocation();
  const [showProductList, setShowProductList] = useState(false);
  const userId = localStorage.getItem("userId");

  const handleProductLinkHover = () => {
    setShowProductList(true);
  };

  const handleProductLinkLeave = () => {
    setShowProductList(false);
  };

  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    if (userId) {
      axios
        .get(`https://aversaherbals.com/api/cart/${userId}/`)
        .then((response) => {
          setCartCount(response.data.length);
        })
        .catch((error) => {
          console.error("Error fetching cart data:", error);
        });
    }
  }, []);

  useEffect(() => {
    const subscription = eventBus.on("cartCountChanged", (newCount) => {
      setCartCount(newCount);
    });
  }, []);
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const navigate = useNavigate();
  const handleClearLocalStorage = () => {
    localStorage.clear();
    setIsOpen(!isOpen);
    setCartCount(0);
    // navigate("/aversa-herbal-login")
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
                // onMouseEnter={handleProductLinkHover}
                // onMouseLeave={handleProductLinkLeave}
                style={{ position: "relative" }}
              >
                <Link
                  // className={
                  //   location.pathname === "/aversa-herbal-products"
                  //     ? "selected-nav-link-navbar"
                  //     : "nav-link"
                  // }
                  className={
                    location.pathname === "/aversa-herbal-products"
                      ? "selected-nav-link-navbar"
                      : "nav-link"
                  }
                  to="/aversa-herbal-products"
                  style={{ display: "flex", gap: "5px", alignItems: "center" }}
                >
                  Products
                  {/* <FaChevronDown /> */}
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

              <FaUserCircle
                className="nav-bar-icons"
                onClick={toggleDropdown}
                style={{ marginTop: "8px" }}
              />
              {isOpen && (
                <div className="web-navba-profile-screen">
                  {userId ? (
                    <div>
                      <Link
                        className="nav-link"
                        to="/aversa-herbal-my-orders-page"
                        onClick={toggleDropdown}
                      >
                        My Orders
                      </Link>
                      <Link
                        className="nav-link"
                        onClick={handleClearLocalStorage}
                        to="/aversa-herbal-login"
                      >
                        Log Out
                      </Link>
                    </div>
                  ) : (
                    <div>
                      <Link
                        className="nav-link"
                        to="/aversa-herbal-sign-up"
                        onClick={toggleDropdown}
                      >
                        Sign Up
                      </Link>
                      <Link
                        className="nav-link"
                        onClick={toggleDropdown}
                        to="/aversa-herbal-login"
                      >
                        Login
                      </Link>
                    </div>
                  )}
                </div>
              )}

              <Link
                style={{ display: "flex", alignItems: "center" }}
                className={
                  location.pathname === "/aversa-herbal-cart"
                    ? "selected-nav-link-navbar"
                    : "nav-link"
                }
                to="/aversa-herbal-cart"
              >
                <div className="nav-bar-of-aversa-cart-count-div">
                  <div
                    style={{
                      position: "absolute",
                      top: 11,
                      right: 20,
                      backgroundColor: "red",
                      borderRadius: "50%",
                      width: 22,
                      height: 22,
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      color: "white",
                    }}
                  >
                    {cartCount}
                  </div>
                </div>
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
              width: "100%",
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
