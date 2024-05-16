import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FiPlusCircle, FiMinusCircle } from "react-icons/fi";
import EmptyCart from "./EmptyCart";
import eventBus from "./EventBus";

const CartPage = () => {
  const userId = localStorage.getItem("userId");
  const [cartData, setCartData] = useState([]);
  const [fetchApiData, setfetchApiData] = useState(false);
  const [cartCount, setCartCount] = useState(0);


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

  const handleUpdateProductQuantity = (productId, quantityChange) => {
    if (userId) {
      const product = cartData.find((item) => item.id === productId);
      const newQuantity = product.quantity + quantityChange;

      if (newQuantity <= 0) {
        handleRemoveFromCart(productId);
      } else {
        axios
          .put(`https://aversaherbals.com/api/cart/item/${productId}/`, {
            quantity: newQuantity,
          })
          .then((response) => {
            setfetchApiData(!fetchApiData);
          })
          .catch((error) => {
            console.error("Error updating product quantity:", error);
          });
      }
    }
  };

  const finalAmount = cartData
    .reduce((acc, index) => {
      const fixedPrice = parseFloat(index.product.fixed_price);
      const availableDiscount = parseFloat(index.product.available_discount);
      const sellingPrice = fixedPrice * (1 - availableDiscount / 100);
      const totalPrice = sellingPrice * index.quantity;
      return acc + totalPrice;
    }, 0)
    .toFixed(2);

  const totalItems = cartData.reduce((acc, index) => acc + index.quantity, 0);

  return (
    <div className="cart-page-of-aversa-bg">
      <Container>
      {cartData&&cartData.length == 0 ?
        <EmptyCart/>
      : 
        <Row>
          <Col sm={9} className="mb-2">
            <Card>
              <Card.Body>
                {cartData &&
                  cartData?.map((index) => {
                    const fixedPrice = parseFloat(index.product.fixed_price);
                    const availableDiscount = parseFloat(
                      index.product.available_discount
                    );
                    const sellingPrice = (
                      fixedPrice *
                      (1 - availableDiscount / 100)
                    ).toFixed(2);
                    const totalPrice = (sellingPrice * index.quantity).toFixed(
                      2
                    );

                    return (
                      <div key={index.id}>
                        <Row
                          style={{
                            borderBottom: "2px solid #8080802b",
                            paddingBottom: "30px",
                            paddingTop: "30px",
                          }}
                        >
                          <Col sm={3} style={{ textAlign: "center" }}>
                            <img
                              src={index.product.image1}
                              alt=""
                              style={{ height: "350px" }}
                            />
                          </Col>
                          <Col sm={7}>
                            <Link
                              to={`/aversa-herbal-product-details/${index.product.id}/${index.product.title}`}
                              style={{ textDecoration: "none" }}
                            >
                              <h3
                                style={{
                                  fontSize:
                                    index.product.title.length > 20
                                      ? "25px"
                                      : "",
                                  color: "#266431",
                                }}
                              >
                                {index.product.title.toUpperCase()}
                              </h3>
                            </Link>

                            <div>
                              <p
                                style={{
                                  color: "#676d75",
                                  fontSize: "15px",
                                  margin: "0px",
                                }}
                              >
                                {index.product && index.product.subtitle} |
                                Ayurvedic product
                              </p>
                            </div>
                            <div className="product-details-main-page-products-detail-naem">
                              <div className="mt-3">
                                <h3>₹ {sellingPrice}</h3>
                                <div className="product-details-main-page-products-detail-naem">
                                  <p>
                                    M.R.P.{" "}
                                    <span
                                      style={{ textDecoration: "line-through" }}
                                    >
                                      {" "}
                                      ₹{" "}
                                      {index.product &&
                                        index.product.fixed_price}
                                    </span>{" "}
                                    <span style={{ color: "red" }}>
                                      {" "}
                                      -
                                      {index.product &&
                                        index.product.available_discount}
                                      % Off
                                    </span>
                                  </p>
                                </div>
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
                              <FiMinusCircle
                                style={{
                                  color: "#266431",
                                  fontSize: "25px",
                                  cursor: "pointer",
                                }}
                                onClick={() =>
                                  handleUpdateProductQuantity(index.id, -1)
                                }
                              />
                              <p
                                style={{
                                  margin: "0px",
                                  color: "#50565E",
                                  fontSize: "18px",
                                }}
                              >
                                {index.quantity && index.quantity}
                              </p>
                              <FiPlusCircle
                                style={{
                                  color: "#266431",
                                  fontSize: "25px",
                                  cursor: "pointer",
                                }}
                                onClick={() =>
                                  handleUpdateProductQuantity(index.id, 1)
                                }
                              />
                            </div>
                            <div className="mt-3">
                              <h3>₹ {totalPrice}</h3>
                            </div>
                          </Col>
                          <Col sm={2} style={{ textAlign: "right" }}>
                            <Button
                              variant="danger"
                              onClick={() => handleRemoveFromCart(index.id)}
                            >
                              Delete
                            </Button>
                          </Col>
                        </Row>
                      </div>
                    );
                  })}
              </Card.Body>
            </Card>
          </Col>
          <Col sm={3} className="mb-2">
            <Card>
              <Card.Body>
                <h4>Subtotal : ₹ {finalAmount}</h4>

                <Button variant="warning" style={{ width: "100%" }}>
                  Proceed to Checkout
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        }

        <p style={{fontSize:"13px",marginTop:"20px",margin:"0px"}}>The price and availability of items at aversaherbals.com are subject to change. The shopping cart is a temporary place to store a list of your items and reflects each item's most recent price.</p>
      </Container>
    </div>
  );
};

export default CartPage;
