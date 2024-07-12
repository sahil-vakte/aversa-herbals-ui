import React from "react";
import { Col } from "react-bootstrap";
import { Row } from "react-bootstrap";
import bottomimgaboutcontact from "../../Assets/bottomimgaboutcontact.jpeg";
import backgroundShade from "../../Assets/backgroundshade.png";
const CuSectionTwo = () => {
  return (
    <div className="w-full max-w-7xl flex flex-col sm:flex-row m-auto join-us-form-containers sm:mb-64">
      <Row
        className="flex items-center justify-between w-full pb-3 pl-5 bg-repeat"
        style={{
          backgroundImage: `url(${backgroundShade})`,
        }}
      >
        <Col
          sm={4}
          className="flex justify-center image-container-for-join-us-section-two-contact-page"
        ></Col>
        <Col sm={6} className="flex flex-col items-center sm:items-start">
          <p className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-center sm:text-left header-text-join-us-section">
            Join Us
          </p>
          <p className="text-sm sm:text-base md:text-lg mb-6 text-center sm:text-left bottom-text-join-us-section text-custom-green">
            Discover the benefits of Aversa Herbals and join our mission to
            empower dreams and transform lives. Together, we can achieve
            holistic well-being and financial freedom for all.
          </p>
          <div className="w-full">
            <div className="flex flex-col sm:flex-row justify-center sm:justify-between gap-4 py-2">
              <div className="w-full sm:w-1/2">
                <input
                  type="text"
                  className="border border-custom-green p-2 rounded-full w-full"
                  placeholder="Name *"
                />
              </div>
              <div className="w-full sm:w-1/2">
                <input
                  type="text"
                  className="border border-custom-green p-2 rounded-full w-full"
                  placeholder="Phone *"
                />
              </div>
            </div>
            <div className="flex flex-col sm:flex-row justify-center sm:justify-between gap-4 py-2">
              <div className="w-full sm:w-1/2">
                <input
                  type="text"
                  className="border border-custom-green p-2 rounded-full w-full"
                  placeholder="Your Email Address *"
                />
              </div>
              <div className="w-full sm:w-1/2">
                <input
                  type="text"
                  className="border border-custom-green p-2 rounded-full w-full"
                  placeholder="Location/Place"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-2 mt-4">
            <input type="checkbox" name="agree" id="agree" className="mr-2" />
            <label
              htmlFor="agree"
              className="text-sm sm:text-base flex items-center gap-1"
            >
              I agree to the
              <a href="#" className="text-custom-green">
                privacy policy
              </a>
            </label>
            <button className="send-button-for-join-us-form mt-2 sm:mt-0 sm:ml-4">
              Send
            </button>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default CuSectionTwo;
