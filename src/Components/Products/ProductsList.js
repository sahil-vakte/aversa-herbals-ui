import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import ImageDropper from "../../Assets/Rectangle 77.png";
import AdminLoader from "../../AdminView/AdminLoader/AdminLoader";

const ProductsList = () => {
  const [productsList, setProductsList] = useState([]);
  const [loading, setloading] = useState(false);
  useEffect(() => {
    setloading(true)
    axios
      .get(`https://aversaherbals.com/api/products/`)
      .then((response) => {
        const activeProducts = response.data.filter(
          (product) =>
            product.hasOwnProperty("active_status") &&
            product.active_status === true
        );
        setProductsList(activeProducts);
        setloading(false)
      })
      .catch((error) => {
        setloading(false)
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

  const [productTypeList, setproductTypeList] = useState([]);
  useEffect(() => {
    axios
      .get("https://aversaherbals.com/api/products-by-product/")
      .then((response) => {
        setproductTypeList(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
    {loading && <AdminLoader/>}
    <div className="product-list-component-padding">
      <Row>
        <Col sm={2}>
          <div className="aversa-products-category-sectiopn">
            <div className="product-category-card-in-list">
              <div>
                {diseaseList &&
                  diseaseList.map((index) => (
                    <p className="product-category-types-p-tag-in-list">
                      {index.name}
                    </p>
                  ))}
              </div>
              <div>
                {productTypeList &&
                  productTypeList.map((index) => (
                    <p className="product-category-types-p-tag-in-list">
                      {index.name}
                    </p>
                  ))}
              </div>
            </div>
            <div className="mt-5">
              <img src={ImageDropper} style={{ width: "100%" }} />
            </div>
          </div>
        </Col>
        <Col sm={10}>
          <Row>
            {productsList &&
              productsList.map((index) => (
                <Col sm={4} className="mb-5">
                  <div>
                    <div style={{ textAlign: "center" }}>
                      <img
                        className="product-list-product-image"
                        src={index.image1}
                      />
                    </div>
                    <div className="product-list-product-image-below-div">
                      <div className="product-list-product-image-below-div-two">
                        <Link
                          to={`/aversa-herbal-product-details/${index.id}/${index.title}`}
                          style={{ textDecoration: "none" }}
                        >
                          <h3>{index.title.toUpperCase()}</h3>
                        </Link>
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                          }}
                        >
                          <p>An Ayurvedic Product</p>
                          <p style={{ color: "#DC2626" }}>
                            -
                            {Number(index.available_discount)
                              .toFixed(2)
                              .slice(0, -3)}{" "}
                            %
                          </p>
                        </div>
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "baseline",
                          }}
                        >
                          <p>{index.subtitle}</p>
                          <p style={{ textAlign: "right" }}>
                            MRP.
                            <span style={{ textDecoration: "line-through" }}>
                              ₹{index.fixed_price}
                            </span>
                            <span className="product-list-price-span-tag">
                              ₹
                              {(
                                index.fixed_price *
                                (1 - index.available_discount / 100)
                              ).toFixed(2)}
                            </span>
                          </p>
                        </div>
                        <Row>
                          <Col sm={6}>
                            <button className="button-for-add-to-wishlist">
                              Add to Wishlist
                            </button>
                          </Col>
                          <Col sm={6}>
                            <button className="button-for-add-to-cart">
                              Add to Cart
                            </button>
                          </Col>
                        </Row>
                      </div>
                    </div>
                  </div>
                </Col>
              ))}
          </Row>
        </Col>
      </Row>
    </div>
    </div>
  );
};

export default ProductsList;
