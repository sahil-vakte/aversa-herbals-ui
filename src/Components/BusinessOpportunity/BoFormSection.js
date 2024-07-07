import React, { useEffect } from "react";
import { Col } from "react-bootstrap";
import { Row } from "react-bootstrap";
import bottomimgaboutcontact from "../../Assets/bottomimgaboutcontact.jpeg";
import backgroundShade from "../../Assets/backgroundshade.png";
const BoFormSection = () => {
  return (
    <div className=" w-full max-w-7xl flex flex-col sm:flex-row m-auto join-us-form-containers">
      <Row
        className="flex items-center justify-between w-full h-96 "
        style={{
          backgroundImage: `url(${backgroundShade})`,
          backgroundRepeat: "repeat",
        }}
      >
        <Col
          sm={4}
          className="flex justify-center image-container-for-join-us-section-two-business-opportunity-page"
        ></Col>
        <Col sm={6} className="flex flex-col items-center sm:items-start">
          <p className="sm:text-4xl md:text-5xl font-bold mb-6 sm:text-left header-text-join-us-section">
            Start your story now !
          </p>
          <p className="text-base sm:text-lg md:text-xl mb-6 sm:text-left bottom-text-join-us-section text-custom-green">
            Send us your details and we’ll get in touch in regards to your
            queries and steps towards your very own business.. <br />
            <b>
              <u>Business Opportunity</u>
            </b>
          </p>
          <div className="w-full">
            <div className="flex flex-col sm:flex-row justify-center sm:justify-between gap-4 py-2">
              <div className="w-full sm:w-1/2">
                <input
                  type="text"
                  className="border-[1px] border-custom-green p-2 rounded-[41px] w-full"
                  placeholder="Name *"
                />
              </div>
              <div className="w-full sm:w-1/2">
                <input
                  type="text"
                  className="border-[1px] border-custom-green p-2 rounded-[41px] w-full"
                  placeholder="Phone *"
                />
              </div>
            </div>
            <div className="flex flex-col sm:flex-row justify-center sm:justify-between gap-4 py-2">
              <div className="w-full sm:w-1/2">
                <input
                  type="text"
                  className="border-[1px] border-custom-green p-2 rounded-[41px] w-full"
                  placeholder="Your Email Address *"
                />
              </div>
              <div className="w-full sm:w-1/2">
                <input
                  type="text"
                  className="border-[1px] border-custom-green p-2 rounded-[41px] w-full"
                  placeholder="Location/Place"
                />
              </div>
            </div>
          </div>
          <div className="check-box-agree-and-send-btn">
            <input type="checkbox" name="" id="" />
            <text className="I-agree-to-the-privacy-policy flex gap-1">
              I agree to the
              <text className="text-custom-green">privacy policy</text>
            </text>
            <button className="send-button-for-join-us-form">Send</button>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default BoFormSection;
