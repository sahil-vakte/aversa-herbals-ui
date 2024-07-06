import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import LandingImage from "../../Assets/contactus.jpg";
import contactuscoverpage from "../../Assets/contactuscoverpage.jpeg";
import { FaPhone, FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { BiMessage } from "react-icons/bi";

const CuSectionOne = () => {
  return (
    <div>
      <Row className="first-row-contact">
        <Col
          className=""
          style={{ position: "relative", display: "inline-block" }}
        >
          <img
            src={contactuscoverpage}
            alt=""
            style={{
              height: "20em",
              width: "100%",
            }}
            className="object-cover"
          />
          <h1 className="title-cu sm:text-3xl sm:[top:0, left:0] md:text-4xl lg:text-5xl italic">
            Contact Us
          </h1>
        </Col>
        <p
          style={{
            color: "rgb(22, 98, 51)",
            fontSize: "1rem",
            display: "flex",
            justifyContent: "end",
            fontStyle: "italic",
            padding: "1em 6em 0 0",
            fontWeight: "600",
          }}
        >
          Get in touch !
        </p>
      </Row>
      <Container className="container-for-contact ">
        <Row className="">
          <Col sm={12} className="grid items-center  text-center">
            <h1 className="aversa-herbals-head-tag ">
              How Can We Assist You?​
            </h1>
            <p className="aversa-herbals-para-tag-one text-center">
              Feel free to reach out to us at your convenience.
            </p>
          </Col>
        </Row>
        <div className="action-btn-contact">
          <Row className="icons-row flex justify-center items-center text-[rgb(22,98,51)] email-contact-chat-with-us-cards-section">
            <Col>
              <div
                style={{
                  border: "1px solid gray",
                  padding: "3em",
                  borderRadius: "0.5em",
                  height: "18em",
                  width: "100%",
                }}
                className="flex flex-col gap-4 justify-center text-center items-center"
              >
                <h1 className="grid justify-center items-center">
                  <FaPhone className="contact-us-icon" />
                </h1>

                <section>
                  <i className="icon-texts">Talk to us</i>
                  <br />

                  <b
                    className="icon-texts-text"
                    onClick={() => {
                      window.location.href = "tel:+91 97332 42832 ";
                    }}
                  >
                    +91 97332 42832
                  </b>
                  <br />
                  <p className="icon-texts-text">All Days (11:00AM -06:00PM)</p>
                </section>
              </div>
            </Col>
            <Col>
              <div
                style={{
                  border: "1px solid gray",
                  padding: "3em",
                  borderRadius: "0.5em",
                  height: "18em",
                  width: "100%",
                }}
                className="flex flex-col gap-4 justify-center text-center items-center"
              >
                <h1 className="grid justify-center items-center">
                  <MdEmail className="contact-us-icon" />
                </h1>

                <span>
                  <i className="icon-texts">Write E-mail to us</i>
                  <br />

                  <b
                    className="icon-texts-text"
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                      window.location.href = "mailto:info@aversaherbals.com";
                    }}
                  >
                    info@aversaherbals.com
                  </b>
                  <p style={{ display: "" }}>.</p>
                </span>
              </div>
            </Col>
            <Col>
              <div
                style={{
                  border: "1px solid gray",
                  alignItems: "right",
                  borderRadius: "0.5em",
                  height: "18em",
                  width: "100%",
                }}
                className="flex flex-col gap-4 justify-center text-center items-center"
              >
                <h1 className="grid justify-center items-center">
                  <BiMessage className="contact-us-icon" />
                </h1>

                <section>
                  <i className="icon-texts">Chat with us</i>
                  <br />
                  <b className="icon-texts-text">On WhatsApp</b>
                  <br />
                  <b className="icon-texts-text">+91 97332 42832</b>
                </section>
              </div>
            </Col>
          </Row>
        </div>
        <Row className="py-12 text-[rgb(22,98,51)] address-and-the-map-section-contact-us">
          <Col sm={4} className="italic column-for-map-and-address-contact">
            <h4>ADDRESS</h4>
            <h6>AVERSA HEALTHCARE PRIVATE LIMITED</h6>
            <h6>Corporate Office</h6>
            <p>
              Aversa Herbals PRIVATE LIMITED, Plot No - 368, Niti Khand - 1,
              Indira Puram, Ghaziabad Uttar Pradesh - 201014
            </p>
            <h6> Registered Office</h6>
            <p>
              AVERSA HEALTHCARE PRIVATE LIMITED, Plot No - 368, Niti Khand - 1,
              Indira Puram, Ghaziabad Uttar Pradesh - 201014
            </p>
            <h6>GST No. 09AAOCA6460F1ZG</h6>
            <section className="flex ">
              {" "}
              <h6>Phone No. :</h6>
              <p>+91 97332 42832</p>
            </section>
            <h6>Customer Support :</h6>
            <p>Customer Care : +91 97332 42832</p>
            <section className="flex ">
              <h6>Email ID : </h6>
              <p>info@aversaherbals.com</p>
            </section>
            <h6>Timing :</h6>{" "}
            <p>
              Monday to Friday : 10:00 AM to 06:00 PMSaturday : 10 AM to 02:00
              PMSunday : Closed
            </p>
          </Col>
          <Col sm={4} className="column-for-map-and-address-contact">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.4627518005177!2d77.36190067554311!3d28.645859775657417!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfab1acc75e71%3A0xa26b7052c5b598c8!2s368%2C%20Niti%20Khand%20I%2C%20Indirapuram%2C%20Ghaziabad%2C%20Uttar%20Pradesh%20201014!5e0!3m2!1sen!2sin!4v1719257721953!5m2!1sen!2sin"
              style={{ border: 0 }}
              className="h-full w-full map"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default CuSectionOne;
