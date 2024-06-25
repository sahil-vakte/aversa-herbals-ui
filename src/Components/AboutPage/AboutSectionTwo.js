import React from "react";
import { Col } from "react-bootstrap";
import { Row } from "react-bootstrap";
import bottomimgaboutcontact from "../../Assets/bottomimgaboutcontact.jpeg";

const AboutSectionTwo = () => {
  return (
    <div className="border-[2px] border-green-700 rounded-lg w-[75em] flex m-auto">
      <Row className="flex items-center justify-between">
        <Col sm={4} className="">
          <img
            src={bottomimgaboutcontact}
            alt=""
            className="w-[30em] h-[30em]"
          />
        </Col>
        <Col sm={6}>
          <p className="text-3xl sm:text-4xl md:text-1xl font-bold mb-6">
            Join Us
          </p>
          <p className="text-base sm:text-sm">
            Discover the benefits of Aversa Herbals and join our mission to
            empower dreams and transform lives. Together, we can achieve
            holistic well-being and financial freedom for all.
          </p>
          <div className="flex justify-center gap-8 py-2">
            <div className="sm:col-span-3">
              <div className="mt-2">
                <input
                  type="text"
                  className="border-[1px] border-green-800 p-2 rounded-lg w-full"
                  placeholder="Name *"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <div className="mt-2">
                <input
                  type="text"
                  className="border-[1px] border-green-800 p-2 rounded-lg w-full"
                  placeholder="Phone *"
                />
              </div>
            </div>
          </div>
          <div className="flex justify-center gap-8 py-2">
            <div className="sm:col-span-3">
              <div className="mt-2">
                <input
                  type="text"
                  className="border-[1px] border-green-800 p-2 rounded-lg w-full"
                  placeholder="Your Email Address *"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <div className="mt-2">
                <input
                  type="text"
                  className="border-[1px] border-green-800 p-2 rounded-lg w-full"
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
