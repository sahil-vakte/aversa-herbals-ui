import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import missionlogo from "../../Assets/missionlogo.jpg";
import ourvalue from "../../Assets/ourvaluelogo.jpg";
import { FaHandPointRight } from "react-icons/fa";
import { IoIosArrowDropright } from "react-icons/io";
import businessopportunitybg from "../../Assets/businessopportunitybg.webp";
import contactus from "../../Assets/contactus.jpg";
import branch from "../../Assets/BRANCH.png";
import foundingvison from "../../Assets/Rahul K Jha.jpg";
import growthandexpansion from "../../Assets/growthandexpansion.jpeg";
import drvikassharma from "../../Assets/Leadership Team.jpeg";
import urvashipathak from "../../Assets/MD Urvashi Pathak.jpeg";
import rahulkjha from "../../Assets/rahul jha ceo.jpeg";
import aboutusimage from "../../Assets/aboutusimg.jpeg";
const AboutSectionOne = () => {
  return (
    <>
      <Row>
        <Col className="relative inline-block">
          <img
            src={aboutusimage}
            alt=""
            className="object-cover w-full h-80 sm:h-96 md:h-112 lg:h-128"
          />
          <h1 className="title-cu sm:text-3xl sm:[top:0, left:0] md:text-4xl lg:text-5xl italic">
            About Us
          </h1>
        </Col>
      </Row>
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
        Creating change | Empowering people | Enhancing lives
      </p>{" "}
      <Container>
        <Row>
          <Col
            className=""
            style={{
              color: "rgb(22, 98, 51)",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1em",
              }}
            >
              <h3 className="text-2xl sm:text-3xl md:text-4xl">
                Welcome To,
                <br /> <b className="font-bold">Aversa Herbals</b>
              </h3>
              <h5 className="text-lg italic">
                ON A MISSION TO HEALTHY & WEALTHY BHARAT
              </h5>

              <p
                className="text-base sm:text-lg italic"
                style={{ fontStyle: "italic" }}
              >
                Aversa Herbals has evolved from a small, traditional business
                delivering services from shop to shop in its early days to a
                prominent player in the direct selling industry. Our journey,
                led by visionary founders and dedicated leaders, has been marked
                by a commitment to empowering individuals and enhancing health
                through quality herbal products.
              </p>
            </div>
          </Col>
        </Row>
        <Row>
          <p className="about-section-heading sm:text-4xl md:text-1xl font-bold mb-6 ">
            Our Story
          </p>
        </Row>
        <Row className="align-items-center flex justify-center gap-12 py-8">
          <Col sm={5}>
            <div className="contain-image-for-founding-vision ">
              <img
                src={foundingvison}
                style={{ borderRadius: "11px" }}
                alt="Contact Us"
                className="w-full sm:w-[25em] h-[500px] "
              />
            </div>
          </Col>
          <Col sm={5}>
            <div className="contain-text-para-for-founding-vision">
              <h3 className="text-xl sm:text-2xl  mb-2 about-sub-heading">
                Founding Vision
              </h3>
              <p className="font-bold text-xl mb-4">Rahul K.Jha</p>
              <p className="text-base sm:text-lg para-sub-heading-about">
                The inception of Aversa Herbals was driven by the vision of
                &nbsp;<b>Rahul K. Jha</b>, whose innovative approach transformed
                the direct selling industry.
                <br />
                <br />
                This vision has been further expanded and shaped by{" "}
                <b>Dr. Vikas Sharma </b>, Chairman of the Aversa Group. Their
                leadership has guided Aversa Herbals to new heights, making it a
                trusted name in herbal healthcare.
              </p>
            </div>
          </Col>
        </Row>
        <Row className="align-items-center flex justify-center gap-12 py-8 ">
          <Col sm={5}>
            <div className="contain-text-para-for-founding-vision">
              <h2 className="text-xl sm:text-2xl font-semibold mb-2 about-sub-heading">
                Growth and Expansion
              </h2>

              <p className="text-base sm:text-lg para-sub-heading-about">
                Under the leadership of <b>MD Urvashi Pathak </b>,{" "}
                <b>Dr. Vikas Sharma </b>, and <b> Rahul K. Jha </b>, Aversa
                Herbals has grown exponentially. <br />
                <br />
                We have not only made a significant impact in <b> India </b> but
                are also expanding our reach to neighboring countries like
                <b> Bhutan </b> and <b> Nepal </b>.
                <br />
                <br />
                With more than <b> 65+ products </b> catering to diverse health
                needs, we are opening doors to endless possibilities and
                empowering people to unlock their full potential.
              </p>
            </div>
          </Col>{" "}
          <Col sm={5}>
            <div
              className="contain-image-for-founding-vision  "
              style={{ display: "flex", justifyContent: "end" }}
            >
              <img
                src={growthandexpansion}
                style={{ borderRadius: "11px" }}
                alt="Contact Us"
                className="w-full sm:w-[25em] h-[500px] "
              />
            </div>
          </Col>
        </Row>
        <Row className="align-items-center flex justify-center gap-12 py-8 ">
          <Col sm={5}>
            <div className="contain-image-for-founding-vision ">
              <img
                src={drvikassharma}
                style={{ borderRadius: "11px" }}
                alt="Contact Us"
                className="w-full sm:w-[25em] h-[500px] "
              />
            </div>
          </Col>
          <Col sm={5}>
            <div className="contain-text-para-for-founding-vision">
              <h3 className="about-sub-heading text-xl sm:text-2xl font-semibold mb-4">
                Leadership Team
              </h3>
              <h2 className="font-medium ">DR. Vikas Sharma</h2>
              <p className="para-sub-heading-about">Occupation</p>
              <p className="text-base sm:text-lg para-sub-heading-about">
                An alumnus of Government JIWAJI University, Dr. Sharma's deep
                understanding of Ayurveda and herbal medicines was shaped during
                his tenure in BAMS.
                <br /> <br />
                His passion for providing better health and financial freedom
                drives Aversa Herbals to bring international quality products at
                the best prices.
              </p>
            </div>
          </Col>
        </Row>
        <Row className="align-items-center flex justify-center gap-12 py-8 ">
          <Col sm={5}>
            <div className="contain-text-para-for-founding-vision">
              <h2 className="font-medium">MD Urvashi Pathak</h2>
              <p className=" mb-4 para-sub-heading-about">
                M.Sc. Clinical Research
              </p>
              <p className="text-base sm:text-lg para-sub-heading-about">
                Born to an Army serving father and currently residing in
                Indirapuram, Ghaziabad, Urvashi Pathak completed her schooling
                from K.V. and higher studies from Patiala University, Punjab.
                <br />
                <br />
                With an MSc in Clinical Research and a career start at GSKCH,
                she later joined multinational direct selling companies, gaining
                extensive industry knowledge before becoming the MD of Aversa
                Herbals. Her dedication to serving her country and people is
                inherited from her father.
              </p>
            </div>
          </Col>
          <Col sm={5}>
            <div
              className="contain-image-for-founding-vision "
              style={{ display: "flex", justifyContent: "end" }}
            >
              <img
                src={urvashipathak}
                style={{ borderRadius: "11px" }}
                alt="Contact Us"
                className="w-full sm:w-[25em] h-[500px] "
              />
            </div>
          </Col>
        </Row>
        <Row className="align-items-center flex justify-center gap-12 py-8 ">
          <Col sm={5}>
            <div className="contain-image-for-founding-vision ">
              <img
                src={rahulkjha}
                style={{ borderRadius: "11px" }}
                alt="Contact Us"
                className="w-full sm:w-[25em] h-[500px] "
              />
            </div>
          </Col>
          <Col sm={5}>
            <div className="contain-text-para-for-founding-vision">
              <h2 className="font-medium">Rahul K. Jha</h2>{" "}
              <p className="mb-4 para-sub-heading-about">founder and CMO </p>
              <p className="text-base sm:text-lg para-sub-heading-about">
                The founder whose vision laid the foundation for{" "}
                <b>Aversa Herbals’</b>&nbsp; success and transformation in the
                direct selling landscape.
              </p>
            </div>
          </Col>
        </Row>
        <Row className="py-4">
          <p className=" about-sub-heading text-3xl sm:text-4xl md:text-1xl font-bold mb-6">
            Our Mission
          </p>
        </Row>
        <Row>
          <Col sm={8}>
            <p className="text-base sm:text-lg para-sub-heading-about">
              Aversa Herbals aims to empower individuals by providing a platform
              for personal and professional growth. We are driven by a passion
              to help people take charge of their destiny, unlock their full
              potential, and achieve financial freedom. Our mission is to create
              a healthy and wealthy Bharat.
            </p>
          </Col>
        </Row>
        <Row className="py-4">
          <p className="about-sub-heading text-3xl sm:text-4xl md:text-1xl font-bold mb-6">
            Our Commitment
          </p>
        </Row>
        <Row className="py-4">
          <Col sm={12}>
            <div className="w-full para-sub-heading-about">
              <ol className="space-y-2">
                <ListItem
                  count={1}
                  text1="Quality and Purity :"
                  text2=" We offer international quality herbal products that are safe, effective, and affordable."
                />
                <ListItem
                  count={2}
                  text1="Empowerment: "
                  text2="We enable individuals from all walks of life to dream beyond the ordinary, transform into successful entrepreneurs, and achieve their aspirations."
                />
                <ListItem
                  count={3}
                  text1="Community and Growth:"
                  text2="With over XXX+ distributors nationwide, more than XX,XXX direct sellers, and XX,XXX new direct sellers joining each month, Aversa Herbals is a growing community dedicated to better health and financial independence."
                />
              </ol>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default AboutSectionOne;
const ListItem = ({ count, text1, text2 }) => {
  return (
    <>
      <div className="flex items-center">
        <p className="text-body-color dark:text-dark-6 flex text-base h-[40px] w-full max-w-[60px]">
          <span className="bg-green-700 mr-2.5 flex h-[40px] w-full max-w-[40px] items-center justify-center rounded-full text-base text-white">
            {count}
          </span>
        </p>
        <section>
          <h5 className="font-bold">{text1}</h5>
          <p className="text-base">{text2}</p>
        </section>
      </div>
    </>
  );
};
