import React, { useEffect, useRef, useState } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { IoIosArrowDropright } from "react-icons/io";

import bramdMark from "../../Assets/aversa_full_colour.svg";
import { Link } from "react-router-dom";
import axios from "axios";

const TopProducts = () => {
  const [productsList, setProductsList] = useState([]);

  useEffect(() => {
    axios
      .get(`https://aversaherbals.com/api/products/`)
      .then((response) => {
        const activeProducts = response.data.filter(
          (product) =>
            product.hasOwnProperty("active_status") &&
            product.active_status === true
        );
        setProductsList(activeProducts);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []);

  const [diseaseList, setdiseaseList] = useState([]);

  useEffect(() => {
    axios
      .get("https://aversaherbals.com/api/products-by-disease/")
      .then((response) => {
        setdiseaseList(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="custom-div-in-top-products">
      {/* <Container> */}

      <Row style={{ padding: "10px" }} className="custom-row-in-top-products">
        <Col sm={4} className="left-side-column-for-all-product-page">
          <h1 className="explore-our-range-of-text-home-page">
            <span style={{ fontWeight: "400" }}>Explore our Range of</span>{" "}
            <b>Products</b>
          </h1>
          <p className="including-text-for-home-products">Including</p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
            {diseaseList &&
              diseaseList.map((index) => (
                <button className="see-all-top-detail-button">
                  {index.name}
                </button>
              ))}
          </div>
          <p
            style={{ padding: "9px", margin: "0px", color: "rgb(22,98,51)" }}
            className="aversa-herbals-para-tag"
          >
            Each Product promises a Great quality and excellence, delivering a
            delightful experience.
          </p>
          <div style={{ textAlign: "right" }}>
            <Link to="/aversa-herbal-products" className="no-underline">
              <button className="see-all-products-button">
                See All Products{" "}
                {/* <IoIosArrowDropright
                  style={{ color: "white", height: "20px", width: "20px" }}
                /> */}
              </button>
            </Link>
          </div>
        </Col>
        <Col sm={8}>
          <div className="landing-page-scroll-product">
            {productsList &&
              productsList.map((index) => (
                <Col>
                  <Card
                    style={{
                      minWidth: "300px",
                      border: "none",
                    }}
                  >
                    <Card.Img
                      variant="top"
                      src={index.image1}
                      style={{ width: "82%" }}
                      className="images-of-top-products-in-home-slider-section"
                    />
                    <Card.Body>
                      <Card.Title
                        style={{ color: "black" }}
                        className="aversa-product-title"
                      >
                        {index.title}
                      </Card.Title>
                      <Link
                        to={`/aversa-herbal-product-details/${index.id}/${index.title}`}
                        style={{ textDecoration: "none" }}
                      >
                        <p style={{ color: "#266431" }}>See More {">"}</p>
                      </Link>
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
      {/* <Container> */}

      {/* </Container> */}

      <div style={{ marginTop: "80px" }}>
        <div className="scroll-titles" style={{ display: "flex", gap: "50px" }}>
          {productsList &&
            productsList.map((product) => (
              <div
                key={product.id}
                style={{ display: "flex", alignItems: "center", gap: "50px" }}
              >
                <span style={{ color: "rgb(22,98,51)", fontSize: "25px" }}>
                  {product.title.toUpperCase()}
                </span>
                <img
                  src={bramdMark}
                  alt=""
                  style={{ height: "50px", width: "50px" }}
                />
              </div>
            ))}
        </div>
      </div>
      {/* </Container> */}
    </div>
  );
};

export default TopProducts;
