import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { BsCart4 } from "react-icons/bs";
import { RiUserFill } from "react-icons/ri";
import Aversalogo from "../../Assets/aversalogo.jpg";
import { Link, useLocation } from "react-router-dom"; // Import useLocation hook
import "./WebsiteNavbar.css";

const WebsiteNavbar = () => {
  const location = useLocation(); // Get current location
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
            <Nav className="me-auto d-flex justify-content-center w-100 navbar-content-gap">
              <Link className={location.pathname === '/' ? 'selected-nav-link-navbar' : "nav-link"} to="/"> 
                Home
              </Link>
              <Link className={location.pathname === '/aversa-herbal-products' ? 'selected-nav-link-navbar' : "nav-link"} to="/aversa-herbal-products"> 
                Products
              </Link>
              <Link className={location.pathname === '/aversa-herbal-wellness-resources' ? 'selected-nav-link-navbar' : "nav-link"} to="/aversa-herbal-wellness-resources"> 
                Wellness Resources
              </Link>
              <Link className={location.pathname === '/aversa-herbal-about-us' ? 'selected-nav-link-navbar' : "nav-link"} to="/aversa-herbal-about-us"> 
                About Us
              </Link>
              <Link className={location.pathname === '/aversa-herbal-business-opportunity' ? 'selected-nav-link-navbar' : "nav-link"} to="/aversa-herbal-business-opportunity"> 
               Business Opportunity
              </Link>
              <Link className={location.pathname === '/aversa-herbal-contact-us' ? 'selected-nav-link-navbar' : "nav-link"} to="/aversa-herbal-contact-us"> 
                Contact US
              </Link>
            </Nav>
            <Nav>
              <Nav.Link href="#deets">
                <BsCart4 className="nav-bar-icons" />
              </Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                <RiUserFill className="nav-bar-icons" />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </div>
  );
};

export default WebsiteNavbar;
