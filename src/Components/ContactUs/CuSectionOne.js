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
      <Row>
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
          <h1
            className="aversa-herbals-head-tag sm:text-3xl sm:[top:0, left:0] md:text-4xl lg:text-5xl italic"
            style={{
              position: "absolute",
              top: "93%",
              left: "90%",
              transform: "translate(-50%, -50%)",
              color: "white",
              textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
              fontSize: "5rem",
              width: "41%",
              fontStyle: "italic",
            }}
          >
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
      <Container>
        <Row className="flex justify-center">
          <Col sm={12} className="grid items-center justify-center text-center">
            <h1 className="aversa-herbals-head-tag">How Can We Assist You?​</h1>
            <p className="aversa-herbals-para-tag-one text-center">
              Feel free to reach out to us at your convenience.
            </p>
          </Col>
        </Row>
        <Row className="flex justify-center items-center text-[rgb(22,98,51)]">
          <Col sm={3}>
            <div
              style={{
                border: "1px solid gray",
                padding: "3em",
                borderRadius: "0.5em",
                height: "18em",
                width: "18em",
              }}
              className="flex flex-col gap-4 justify-center text-center items-center"
            >
              <h1
                className="grid justify-center items-center"
                style={{ fontSize: "2rem" }}
              >
                <FaPhone />
              </h1>
              <h4>
                <i>Talk to us</i>
              </h4>

              <section>
                <b
                  onClick={() => {
                    window.location.href = "tel:+91 97332 42832 ";
                  }}
                >
                  +91 97332 42832
                </b>
                <br />
                All Days (11:00AM -06:00PM)
              </section>
            </div>
          </Col>
          <Col sm={3}>
            <div
              style={{
                border: "1px solid gray",
                padding: "2em",
                borderRadius: "0.5em",
                height: "18em",
                width: "18em",
              }}
              className="flex flex-col gap-4 justify-center text-center items-center"
            >
              <h1
                className="grid justify-center items-center"
                style={{ fontSize: "2rem" }}
              >
                <BiMessage />
              </h1>
              <h4>
                <i>Chat with us</i>
              </h4>
              <section>
                <b>On WhatsApp</b>
                <br />
                +91 97332 42832
              </section>
            </div>
          </Col>{" "}
          <Col sm={3}>
            <div
              style={{
                border: "1px solid gray",
                padding: "3em",
                borderRadius: "0.5em",
                height: "18em",
                width: "18em",
              }}
              className="flex flex-col gap-4 justify-center text-center items-center"
            >
              <h1
                className="grid justify-center items-center"
                style={{ fontSize: "2rem" }}
              >
                <MdEmail />
              </h1>
              <h4>
                <i>Write E-mail to us</i>
              </h4>
              <span
                style={{ cursor: "pointer" }}
                onClick={() => {
                  window.location.href = "mailto:info@aversaherbals.com";
                }}
              >
                info@aversaherbals.com
              </span>
            </div>
          </Col>
        </Row>
        <Row className="flex justify-center gap-40 py-20 text-[rgb(22,98,51)]">
          <Col sm={4} className="italic flex flex-col gap-3">
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
          <Col sm={4}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.4627518005177!2d77.36190067554311!3d28.645859775657417!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfab1acc75e71%3A0xa26b7052c5b598c8!2s368%2C%20Niti%20Khand%20I%2C%20Indirapuram%2C%20Ghaziabad%2C%20Uttar%20Pradesh%20201014!5e0!3m2!1sen!2sin!4v1719257721953!5m2!1sen!2sin"
              style={{ border: 0 }}
              className="h-full w-full"
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
