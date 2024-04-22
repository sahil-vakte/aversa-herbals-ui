import React, { useEffect, useRef } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { IoIosArrowDropright } from "react-icons/io";

import img1 from "../../Assets/aversa-products/IMG_0915.jpeg";
import img2 from "../../Assets/aversa-products/IMG_0918.jpeg";
import img3 from "../../Assets/aversa-products/IMG_0919.jpeg";
import img4 from "../../Assets/aversa-products/IMG_0920.jpeg";
import img5 from "../../Assets/aversa-products/IMG_0922.jpeg";
import img6 from "../../Assets/aversa-products/IMG_0928.jpeg";
import img7 from "../../Assets/aversa-products/IMG_0929.jpeg";
import img8 from "../../Assets/aversa-products/IMG_0932.jpeg";
import img9 from "../../Assets/aversa-products/IMG_0933.jpeg";
import img10 from "../../Assets/aversa-products/IMG_0934.jpeg";
import img11 from "../../Assets/aversa-products/IMG_0937.jpeg";
import img12 from "../../Assets/aversa-products/IMG_0942.jpeg";
import img13 from "../../Assets/aversa-products/IMG_0943.jpeg";
import img14 from "../../Assets/aversa-products/IMG_0949.jpeg";
import img15 from "../../Assets/aversa-products/IMG_0956.jpeg";
import img16 from "../../Assets/aversa-products/IMG_0959.jpeg";
import img17 from "../../Assets/aversa-products/IMG_0960.jpeg";
import img18 from "../../Assets/aversa-products/IMG_0961.jpeg";
import img19 from "../../Assets/aversa-products/IMG_0962.jpeg";
import img20 from "../../Assets/aversa-products/IMG_0964.jpeg";
import img21 from "../../Assets/aversa-products/IMG_0928.jpeg";

import bramdMark from "../../Assets/aversa_full_colour.svg";
import { Link } from "react-router-dom";

const TopProducts = () => {
  const productsData = [
    {
      id: 1,
      title: "Red Aloe Vera Juice",
      url: img1,
    },
    {
      id: 2,
      title: "Natural Hair Oil",
      url: img2,
    },
    {
      id: 3,
      title: "Platelet Care Syrup",
      url: img3,
    },
    {
      id: 4,
      title: "Anti Addiction",
      url: img4,
    },
    {
      id: 5,
      title: "Kids Energy Powder",
      url: img5,
    },
    {
      id: 6,
      title: "Anti Pain Oil",
      url: img6,
    },
    {
      id: 7,
      title: "Paralysis Oil",
      url: img7,
    },
    {
      id: 8,
      title: "Omega-369",
      url: img8,
    },
    {
      id: 9,
      title: "Ortho Care",
      url: img9,
    },
    {
      id: 10,
      title: "Stone Crush Tablet",
      url: img10,
    },
    {
      id: 11,
      title: "Uric Acid",
      url: img11,
    },
    {
      id: 12,
      title: "Anti Diabetic Dietry Supplement",
      url: img12,
    },
    {
      id: 13,
      title: "PCOD Care Tablet",
      url: img13,
    },
    {
      id: 14,
      title: "Anti Diabetic Juice",
      url: img14,
    },
    {
      id: 15,
      title: "Men Charge Capsule",
      url: img15,
    },
    {
      id: 16,
      title: "Paralysis Tablet",
      url: img16,
    },
    {
      id: 17,
      title: "Renzova Capsule",
      url: img17,
    },
    {
      id: 18,
      title: "Thyroid Care",
      url: img18,
    },
    {
      id: 19,
      title: "Heart Care Tablet",
      url: img19,
    },
    {
      id: 20,
      title: "BP Care Tablet",
      url: img20,
    },
    {
      id: 21,
      title: "NONI Juice",
      url: img21,
    },
  ];


  

  return (
    <div className="custom-div-in-top-products">
      {/* <Container> */}

      <Row style={{ padding: "10px" }} className="custom-row-in-top-products">
        <Col sm={3}>
          <h1 className="aversa-herbals-head-tag">
            <span style={{ fontWeight: "400" }}>Explore our Range of</span>{" "}
            <b>Products</b>
          </h1>
          <p
            style={{
              padding: "9px",
              margin: "0px",
              color: "rgb(22,98,51)",
              fontWeight: "600",
            }}
            className="aversa-herbals-para-tag"
          >
            including
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
            <button className="see-all-top-detail-button">
              Cardiovascular Health
            </button>
            <button className="see-all-top-detail-button">
              Planet Care Syrup
            </button>
            <button className="see-all-top-detail-button">Pain Relief</button>
            <button className="see-all-top-detail-button">
              Bone And Joint Health
            </button>
            <button className="see-all-top-detail-button">
              Thyroid Health
            </button>
            <button className="see-all-top-detail-button">
              Red Aloe Vera Juice
            </button>
            <button className="see-all-top-detail-button">
              Women Health Powder
            </button>
            <button className="see-all-top-detail-button">
              Protein Supplements
            </button>
            <button className="see-all-top-detail-button">
              Anti-Addiction Support
            </button>
          </div>
          <p
            style={{ padding: "9px", margin: "0px", color: "rgb(22,98,51)" }}
            className="aversa-herbals-para-tag"
          >
            Each Product promises a Great quality and excellence, delivering a
            delightful experience.
          </p>
        </Col>
        <Col sm={9}>
          <div className="landing-page-scroll-product">
            {productsData &&
              productsData.map((index) => (
                <Col>
                  <Card
                    style={{
                      height: "100%",
                      minWidth: "300px",
                      border: "none",
                    }}
                  >
                    <Card.Img
                      variant="top"
                      src={index.url}
                      style={{ height: "350px", borderRadius: "20px" }}
                    />
                    <Card.Body>
                      <Card.Title
                        style={{ color: "black" }}
                        className="aversa-product-title"
                      >
                        {index.title}
                      </Card.Title>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          flexWrap: "wrap",
                          alignItems: "center",
                        }}
                      ></div>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
          </div>
        </Col>
      </Row>
      <Container>
        <div style={{ textAlign: "right" }}>
          <Link to="/aversa-herbal-products">
            <button className="see-all-products-button">
              See All Products{" "}
              <IoIosArrowDropright
                style={{ color: "white", height: "20px", width: "20px" }}
              />
            </button>
          </Link>
        </div>
      </Container>

      <div style={{marginTop:"80px"}}>
    
    <div className="scroll-titles" style={{display:'flex',gap:"50px"}}>
        {productsData.map((product) => (
          <div key={product.id} style={{ display:'flex',alignItems:"center",gap:"50px"}}>
            <span style={{color:"rgb(22,98,51)",fontSize:"25px"}}>{product.title.toUpperCase()}</span>
              <img src={bramdMark} alt="" style={{ height: "50px", width: "50px" }} />
          </div>
        ))}
      </div>
      </div>
      {/* </Container> */}
    </div>
  );
};

export default TopProducts;
