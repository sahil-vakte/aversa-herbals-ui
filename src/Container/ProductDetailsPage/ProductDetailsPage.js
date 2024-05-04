import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { FiPlusCircle, FiMinusCircle } from "react-icons/fi";
import { FaShareAlt } from "react-icons/fa";
import { IoMdCart, IoIosHeartEmpty } from "react-icons/io";
import AdminLoader from "../../AdminView/AdminLoader/AdminLoader";

const ProductDetailsPage = () => {
  const paramsData = useParams();
  const [ProductDetails, setProductDetails] = useState(null);
  const [loading, setloading] = useState(false);

  useEffect(() => {
    setloading(true)
    axios
      .get(`https://aversaherbals.com/api/products/${paramsData.id}`)
      .then((response) => {
        const data = response.data;
        setProductDetails(data);
        setloading(false)
      })
      .catch((error) => {
        console.log(error);
        setloading(false)
      });
  }, [paramsData.id]); // Adding paramsData.id to the dependency array


  const calculateSellingPrice = () => {
    if (
      ProductDetails &&
      ProductDetails.fixed_price &&
      ProductDetails.available_discount
    ) {
      const fixedPrice = parseFloat(ProductDetails.fixed_price);
      const discountPercentage = parseFloat(ProductDetails.available_discount);
      const discountedPrice =
        fixedPrice - (fixedPrice * discountPercentage) / 100;
      return discountedPrice.toFixed(2);
    }
    return null;
  };
  const openInNewWindow = (url) => {
    const width = 600;
    const height = 400;
    const left = (window.innerWidth - width) / 2;
    const top = (window.innerHeight - height) / 2;
    window.open(
      url,
      "_blank",
      `width=${width}, height=${height}, left=${left}, top=${top}`
    );
  };

  return (
    <div style={{ paddingTop: "30px" }}>
    {loading && <AdminLoader/>}
      <Container>
        <Row>
          <Col sm={6}>
            <div
              style={{
                padding: "25px",
                backgroundColor: "#D9D9D9",
                borderRadius: "29px",
                width: "100%",
                textAlign: "center",
              }}
            >
              {ProductDetails && (
                <img src={ProductDetails.image1} alt="Product" />
              )}
            </div>
          </Col>
          <Col sm={1}>
            <div className="share-button-in-product-details">
              <FaShareAlt style={{ color: "#266431", fontSize: "25px" }} />
            </div>
          </Col>
          <Col sm={5}>
            <div className="product-details-main-page-products-detail-naem">
              <h1>
                {ProductDetails &&
                  ProductDetails.title &&
                  ProductDetails.title.toUpperCase()}
              </h1>
              <p>
                {ProductDetails && ProductDetails.subtitle} | Ayurvedic product
              </p>
            </div>
            <div className="mt-3">
              <h3>₹ {calculateSellingPrice()}</h3>
              <div className="product-details-main-page-products-detail-naem">
                <p>
                  M.R.P.{" "}
                  <span style={{ textDecoration: "line-through" }}>
                    {" "}
                    ₹ {ProductDetails && ProductDetails.fixed_price}
                  </span>{" "}
                  <span style={{ color: "red" }}>
                    {" "}
                    -{ProductDetails && ProductDetails.available_discount}% Off
                  </span>
                </p>
              </div>
            </div>
            <div
              style={{
                backgroundColor: "#D9D9D9",
                padding: "10px",
                borderRadius: "11px",
                maxWidth: "150px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
              className="mt-3"
            >
              <FiPlusCircle style={{ color: "#266431", fontSize: "25px" }} />
              <p style={{ margin: "0px", color: "#50565E", fontSize: "18px" }}>
                01
              </p>
              <FiMinusCircle style={{ color: "#266431", fontSize: "25px" }} />
            </div>
            <div className="mt-3">
              <Row>
                <Col sm={6} className="mt-3">
                  <button className="add-to-cart-product-details-btn">
                    <IoMdCart style={{ fontSize: "38px" }} />
                    {"  "} ADD TO CART
                  </button>
                </Col>
                <Col sm={6} className="mt-3">
                  <button className="add-to-wishlist-product-details-btn">
                    <IoIosHeartEmpty style={{ fontSize: "38px" }} />
                    {"  "} ADD TO WISHLIST
                  </button>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
        <Row className="mt-3">
          <Col sm={6} className="mt-3">
            <div
              style={{
                display: "flex",
                alignItems: "center",
                // justifyContent: "space-around",
                flexWrap: "wrap",
                gap: "10px",
              }}
            >
              {ProductDetails &&
                ProductDetails.benefits.length > 0 &&
                ProductDetails.benefits.map((index) => (
                  <div className="product-details-benefits-div">
                    {index.title}
                  </div>
                ))}
            </div>
          </Col>
          <Col sm={1}></Col>
          <Col sm={5} className="mt-3">
            <h2 style={{ fontSize: "19px" }}>Benefits and Properties :</h2>
            <div>
              {ProductDetails && ProductDetails.properties && (
                <ul style={{ listStyleType: "square" }}>
                  {ProductDetails.properties.map((index, i) => (
                    <li key={i}>{index.title}</li>
                  ))}
                </ul>
              )}
            </div>
          </Col>
        </Row>
        <Row className="mt-3">
          <div style={{ display: "flex", alignItems: "center" }}>
            <hr style={{ flexGrow: 1, borderTop: "2px solid #266431" }} />
            <span style={{ padding: "0 20px", fontWeight: "bold" }}>
              INGREDIENTS
            </span>
            <hr style={{ flexGrow: 1, borderTop: "2px solid #266431" }} />
          </div>
        </Row>
        <Row className="mt-3">
          {ProductDetails &&
            ProductDetails.ingredients &&
            ProductDetails.ingredients.map((index) => (
              <Col sm={3} className="mt-3">
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <div>
                    <div className="ingredients-background-div-in-product-details">
                      <img
                        src={`http://aversaherbals.com/${index.image}`}
                        className="ingredients-image-inproduct-details"
                      />
                    </div>
                    <div className="mt-3">
                      <p
                        onClick={() => openInNewWindow(index.url)}
                        style={{ cursor: "pointer" }}
                      >
                        {" "}
                        <span style={{ borderBottom: "1px solid black" }}>
                          {index.name}
                        </span>{" "}
                        | {index.hindi_name}
                      </p>
                    </div>
                  </div>
                </div>
              </Col>
            ))}
        </Row>
        <Row className="mt-5">
          <h2 style={{ fontSize: "19px" }}>Directions for Use :</h2>
          {ProductDetails && ProductDetails.howtouse && (
            <ul style={{ listStyleType: "square" }}>
              {ProductDetails.howtouse.map((index, i) => (
                <li key={i}>{index.title}</li>
              ))}
            </ul>
          )}
        </Row>
        <Row className="mt-5">
          <h2 style={{ fontSize: "19px" }}>Note :</h2>
          {ProductDetails && ProductDetails.note && (
            <ul style={{ listStyleType: "square" }}>
              {ProductDetails.note.map((index, i) => (
                <li key={i}>{index.title}</li>
              ))}
            </ul>
          )}
        </Row>
      </Container>
    </div>
  );
};

export default ProductDetailsPage;
