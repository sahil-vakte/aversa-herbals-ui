import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Col, Form, Modal, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import ImageDropper from "../../Assets/Rectangle 77.png";
import AdminLoader from "../../AdminView/AdminLoader/AdminLoader";
import eventBus from "../CartPage/EventBus";

const ProductsList = () => {
  const [productsList, setProductsList] = useState([]);
  const [loading, setloading] = useState(false);
  const [fetchApiData, setfetchApiData] = useState(false);
  const userId = localStorage.getItem("userId");
  const [showModal, setShowModal] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    setloading(true);
    axios
      .get(`https://aversaherbals.com/api/products/`)
      .then((response) => {
        const activeProducts = response.data.filter(
          (product) =>
            product.hasOwnProperty("active_status") &&
            product.active_status === true
        );
        setProductsList(activeProducts);
        setloading(false);
      })
      .catch((error) => {
        setloading(false);
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

  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredProducts = productsList.filter((product) =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const groupedProducts = {};
  filteredProducts.forEach((product) => {
    const typeName = product.product_by_product[0]?.name;
    if (typeName) {
      if (!groupedProducts[typeName]) {
        groupedProducts[typeName] = [];
      }
      groupedProducts[typeName].push(product);
    }
  });

  const [cartData, setCartData] = useState([]);
  useEffect(() => {
    if (userId) {
      axios
        .get(`https://aversaherbals.com/api/cart/${userId}/`)
        .then((response) => {
          setCartData(response.data);
          setCartCount(response.data.length);
        })
        .catch((error) => {
          console.error("Error fetching cart data:", error);
        });
    }
  }, [userId, fetchApiData]);

  const handleAddToCart = (productId) => {
    const userId = localStorage.getItem("userId");

    if (userId) {
      axios
        .post("https://aversaherbals.com/api/cart/add/", {
          user_id: userId,
          product_id: productId,
          quantity: 1,
        })
        .then((response) => {
          setfetchApiData(!fetchApiData);
          const newCartCount = cartCount + 1;
          setCartCount(newCartCount);
          eventBus.emit("cartCountChanged", newCartCount);
        })
        .catch((error) => {
          console.error("Error adding to cart:", error);
        });
    } else {
      setShowModal(true);
    }
  };

  const handleRemoveFromCart = (productId) => {
    if (userId) {
      axios
        .delete(`https://aversaherbals.com/api/cart/item/delete/${productId}/`)
        .then((response) => {
          setfetchApiData(!fetchApiData);
          const newCartCount = cartCount - 1;
          setCartCount(newCartCount);
          eventBus.emit("cartCountChanged", newCartCount);
        })
        .catch((error) => {
          console.error("Error removing from cart:", error);
        });
    }
  };

  return (
    <div>
      {loading && <AdminLoader />}
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
            <Form.Control
              type="text"
              placeholder="SEARCH PRODUCTS BY PRODUCT NAME..."
              value={searchQuery}
              onChange={handleSearch}
              className="mb-3"
            />

            {Object.entries(groupedProducts).map(([type, products]) => (
              <div key={type}>
                <div style={{ textAlign: "center" }} className="mb-3">
                  <h2>
                    <span style={{ fontWeight: "300" }}>SHOP </span>
                    {type.toUpperCase()}
                  </h2>
                </div>
                <Row>
                  {products &&
                    products.map((index) => (
                      <Col sm={4} className="mb-5">
                        <div>
                          <div
                            style={{
                              textAlign: "center",
                              display: "flex",
                              justifyContent: "center",
                            }}
                          >
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
                                {console.log(index.title.length)}
                                <h3
                                  style={{
                                    fontSize:
                                      index.title.length > 20 ? "25px" : "",
                                  }}
                                >
                                  {index.title.toUpperCase()}
                                </h3>
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
                                  <span
                                    style={{ textDecoration: "line-through" }}
                                  >
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
                                  {cartData &&
                                  cartData?.some(
                                    (item) => item.product.id === index.id
                                  ) ? (
                                    <button
                                      className="button-for-add-to-cart"
                                      style={{
                                        backgroundColor: "red",
                                        border: "1px solid red",
                                      }}
                                      onClick={() => {
                                        const cartItem = cartData.find(
                                          (item) => item.product.id === index.id
                                        );
                                        handleRemoveFromCart(cartItem.id);
                                      }}
                                    >
                                      Remove from Cart
                                    </button>
                                  ) : (
                                    <button
                                      className="button-for-add-to-cart"
                                      onClick={() => handleAddToCart(index.id)}
                                    >
                                      Add to Cart
                                    </button>
                                  )}
                                </Col>
                              </Row>
                            </div>
                          </div>
                        </div>
                      </Col>
                    ))}
                </Row>
              </div>
            ))}
          </Col>
        </Row>

        <Modal show={showModal} onHide={() => setShowModal(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Sign Up or Login</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>Please sign up or login to add products to the cart.</p>

            <div
              className="mt-3"
              style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}
            >
              <Link to="/aversa-herbal-login">
                <Button variant="secondary">Login to your Account</Button>
              </Link>
              <Link to="/aversa-herbal-sign-up">
                <Button variant="warning">Sign Up now</Button>
              </Link>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setShowModal(false)}>
              Close
            </Button>
            <Link to="/login">
              <Button variant="primary">Login</Button>
            </Link>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
};

export default ProductsList;
