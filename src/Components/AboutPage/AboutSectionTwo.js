import React from "react";
import { Col } from "react-bootstrap";
import { Row } from "react-bootstrap";
import bottomimgaboutcontact from "../../Assets/bottomimgaboutcontact.jpeg";

const AboutSectionTwo = () => {
  return (
    <div className="border-2 border-green-700 rounded-lg w-full max-w-6xl flex flex-col sm:flex-row m-auto p-4">
      <Row className="flex items-center justify-between w-full">
        <Col sm={4} className="flex justify-center">
          <img
            src={bottomimgaboutcontact}
            alt=""
            className="w-60 sm:w-72 md:w-80 lg:w-96 h-auto"
          />
        </Col>
        <Col sm={6} className="flex flex-col items-center sm:items-start p-4">
          <p className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-center sm:text-left">
            Join Us
          </p>
          <p className="text-base sm:text-lg md:text-xl mb-6 text-center sm:text-left">
            Discover the benefits of Aversa Herbals and join our mission to
            empower dreams and transform lives. Together, we can achieve
            holistic well-being and financial freedom for all.
          </p>
          <div className="w-full">
            <div className="flex flex-col sm:flex-row justify-center sm:justify-between gap-4 py-2">
              <div className="w-full sm:w-1/2">
                <input
                  type="text"
                  className="border-1 border-green-800 p-2 rounded-lg w-full"
                  placeholder="Name *"
                />
              </div>
              <div className="w-full sm:w-1/2">
                <input
                  type="text"
                  className="border-1 border-green-800 p-2 rounded-lg w-full"
                  placeholder="Phone *"
                />
              </div>
            </div>
            <div className="flex flex-col sm:flex-row justify-center sm:justify-between gap-4 py-2">
              <div className="w-full sm:w-1/2">
                <input
                  type="text"
                  className="border-1 border-green-800 p-2 rounded-lg w-full"
                  placeholder="Your Email Address *"
                />
              </div>
              <div className="w-full sm:w-1/2">
                <input
                  type="text"
                  className="border-1 border-green-800 p-2 rounded-lg w-full"
                  placeholder="Location/Place"
                />
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default AboutSectionTwo;
