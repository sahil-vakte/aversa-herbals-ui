import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FiPlusCircle, FiMinusCircle } from "react-icons/fi";
import EmptyCart from "./EmptyCart";
import eventBus from "./EventBus";

const CartPage = () => {
  const userId = localStorage.getItem("userId");
  const userData = JSON.parse(localStorage.getItem("userData"));
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

  const [formData, setFormData] = useState({
    street: userData ? userData.street : "",
    city: userData ? userData.city : "",
    state: userData ? userData.state : "",
    zip: userData ? userData.zip : "",
    mobile: userData ? userData.mobile : "",
    orderstatus: "Order Placed",
    orderAccepted: false,
    totalitemincart: totalItems,
    customerID: userId,
    // orderID: 1,
    subtotalAmountOfProduct: finalAmount,
    shippingCharges: 0,
    gstcharges: 0,
    razorpayTransactionId: "",
    FinalAmountToPaid: finalAmount,
    items: cartData.map((item) => ({
      cartItemid: item.id,
      paidquantity: item.quantity,
      giftquantity: 0,
      singleproductsellingprice: item.product.fixed_price,
      totalprice: (
        item.product.fixed_price *
        (1 - item.product.available_discount / 100) *
        item.quantity
      ).toFixed(2),
      product: item.product.id,
    })),
  });

  useEffect(() => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      totalItemsInCart: totalItems,
      subtotalAmountOfProduct: finalAmount,
      items: cartData.map((item) => ({
        cartItemid: item.id,
        paidquantity: item.quantity,
        giftquantity: 0,
        singleproductsellingprice: item.product.fixed_price,
        totalprice: (
          item.product.fixed_price *
          (1 - item.product.available_discount / 100) *
          item.quantity
        ).toFixed(2),
        product: item.product.id,
      })),
    }));
  }, [cartData, totalItems, finalAmount]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem("token");
    const currentDate = new Date().toISOString().split('T')[0];
    try {
      const response = await axios.post(
        "https://aversaherbals.com/api/orders/create/",
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log("Response:", response.data);
      if (response.data.id) {
        axios.post("https://aversaherbals.com/api/sales/", {
          user: 1,
          sale_id: response.data.id,
          amount: finalAmount,
          date: currentDate,
        });
      }
      const deletePromises = cartData.map((item) =>
        axios.delete(`https://aversaherbals.com/api/cart/item/delete/${item.id}/`)
      );
      await Promise.all(deletePromises);

      setfetchApiData(!fetchApiData)
      setCartCount(0);
      eventBus.emit("cartCountChanged", 0);
    
    } catch (error) {
      console.error("Error:", error.response.data);
    }
  };

  return (
    <div className="cart-page-of-aversa-bg">
      <Container>
        {cartData && cartData.length === 0 ? (
          <EmptyCart />
        ) : (
          <Row>
            <Col sm={9} className="mb-2">
              <Card>
                <Card.Body>
                  {cartData &&
                    cartData.map((index) => {
                      const fixedPrice = parseFloat(index.product.fixed_price);
                      const availableDiscount = parseFloat(
                        index.product.available_discount
                      );
                      const sellingPrice = (
                        fixedPrice *
                        (1 - availableDiscount / 100)
                      ).toFixed(2);
                      const totalPrice = (
                        sellingPrice * index.quantity
                      ).toFixed(2);

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
                                        style={{
                                          textDecoration: "line-through",
                                        }}
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
                  <Col>
                    <div>
                      <div>
                        <Form.Label htmlFor="street">
                          Flat/House No , Apartment , Street:
                        </Form.Label>
                        <Form.Control
                          type="text"
                          id="street"
                          name="street"
                          value={formData.street}
                          onChange={handleInputChange}
                        />
                      </div>
                      <div>
                        <Form.Label htmlFor="city">City:</Form.Label>
                        <Form.Control
                          type="text"
                          id="city"
                          name="city"
                          value={formData.city}
                          onChange={handleInputChange}
                        />
                      </div>
                      <div>
                        <Form.Label htmlFor="state">State:</Form.Label>
                        <Form.Control
                          type="text"
                          id="state"
                          name="state"
                          value={formData.state}
                          onChange={handleInputChange}
                        />
                      </div>
                      <div>
                        <Form.Label htmlFor="zip">Zip:</Form.Label>
                        <Form.Control
                          type="text"
                          id="zip"
                          name="zip"
                          value={formData.zip}
                          onChange={handleInputChange}
                        />
                      </div>
                      <div>
                        <Form.Label htmlFor="mobile">Mobile:</Form.Label>
                        <Form.Control
                          type="text"
                          id="mobile"
                          name="mobile"
                          value={formData.mobile}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>
                  </Col>
                  <Button
                    variant="warning"
                    style={{ width: "100%" }}
                    className="mt-3"
                    onClick={handleSubmit}
                  >
                    Proceed to Checkout
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        )}

        <p style={{ fontSize: "13px", marginTop: "20px", margin: "0px" }}>
          The price and availability of items at aversaherbals.com are subject
          to change. The shopping cart is a temporary place to store a list of
          your items and reflects each item's most recent price.
        </p>
      </Container>
    </div>
  );
};

export default CartPage;
