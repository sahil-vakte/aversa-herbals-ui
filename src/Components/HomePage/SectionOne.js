import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import BackgroundVideo from "../../Assets/figma - aversa video.mp4";

const SectionOne = () => {
  return (
    <div>
      <video autoPlay loop muted className="background-video">
        <source
          src={BackgroundVideo}
          type="video/mp4"
          className="landing-page-video"
        />
      </video>
    </div>
  );
};

export default SectionOne;
