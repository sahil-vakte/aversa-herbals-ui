import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card, Col, Container, Row, Tooltip, OverlayTrigger } from "react-bootstrap";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

const MyOrdersPage = () => {
  const userId = localStorage.getItem("userId");
  const [orderData, setOrderData] = useState([]);
  const [newOrderData, setNewOrderData] = useState([]);
  const [fetchApiData, setFetchApiData] = useState(false);
  const [productsList, setProductsList] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (userId) {
      axios
        .get(`https://aversaherbals.com/api/orders/user/${userId}/`)
        .then((response) => {
          setOrderData(response.data);
        })
        .catch((error) => {
          console.error("Error fetching cart data:", error);
        });
    }
  }, [userId, fetchApiData]);

  useEffect(() => {
    setLoading(true);
    axios
      .get("https://aversaherbals.com/api/products/")
      .then((response) => {
        const activeProducts = response.data.filter(
          (product) =>
            product.hasOwnProperty("active_status") &&
            product.active_status === true
        );
        setProductsList(activeProducts);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        console.error("Error fetching products:", error);
      });
  }, []);

  useEffect(() => {
    if (orderData.length && productsList.length) {
      const updatedOrderData = orderData.map((order) => {
        const updatedItems = order.items.map((item) => {
          const product = productsList.find(
            (product) => product.id === item.product
          );
          return product
            ? {
                ...item,
                title: product.title,
                subtitle: product.subtitle,
                image1: product.image1,
                available_discount: product.available_discount,
              }
            : item;
        });
        return { ...order, items: updatedItems };
      });
      setNewOrderData(updatedOrderData);
    }
  }, [orderData, productsList]);

  const renderTooltip = (order) => (
    <Tooltip id="button-tooltip">
      {`${order.street}, ${order.city}, ${order.state}, ${order.zip} | Mobile: ${order.mobile}`}
    </Tooltip>
  );

  return (
    <div style={{ marginTop: "100px" }}>
      <Container>
        <Col sm={12} className="mb-2">
          {newOrderData &&
            newOrderData.map((order) => (
              <Card className="mt-5" key={order.id}>
                <Card.Header>
                  <Row style={{ textAlign: "center" }}>
                    <Col sm={3}>
                      <div>TOTAL : ₹{order.subtotalAmountOfProduct}</div>
                    </Col>
                    <Col sm={3}>
                      <OverlayTrigger
                        placement="top"
                        overlay={renderTooltip(order)}
                      >
                        <div>SHIP TO</div>
                      </OverlayTrigger>
                    </Col>
                    <Col sm={3}>ORDER STATUS : {order.orderstatus}</Col>
                    <Col sm={3}>DOWNLOAD INVOICE</Col>
                  </Row>
                </Card.Header>
                <Card.Body>
                  <div>
                    {order.items.map((item) => (
                      <Row
                        key={item.id}
                        style={{
                          borderBottom: "2px solid #8080802b",
                          paddingBottom: "30px",
                          paddingTop: "30px",
                        }}
                      >
                        <Col
                          sm={3}
                          style={{
                            textAlign: "center",
                            display: "flex",
                            justifyContent: "center",
                          }}
                        >
                          <img
                            src={item.image1}
                            alt=""
                            style={{ height: "350px" }}
                          />
                        </Col>
                        <Col sm={7}>
                          <Link
                            to={`/aversa-herbal-product-details/${item.product}/${item.title}`}
                            style={{ textDecoration: "none" }}
                          >
                            <h3
                              style={{
                                fontSize: item.title.length > 20 ? "25px" : "",
                                color: "#266431",
                              }}
                            >
                              {item.title.toUpperCase()}
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
                              {item.subtitle} | Ayurvedic product
                            </p>
                          </div>
                          <div className="product-details-main-page-products-detail-naem">
                            <div className="mt-3">
                              <h3>
                                M.R.P. ₹ {item.singleproductsellingprice}
                              </h3>
                              <div className="product-details-main-page-products-detail-naem">
                                <p>
                                  Quantity :{" "}
                                  <span>{item.paidquantity}</span>{" "}
                                </p>
                              </div>
                              <div className="product-details-main-page-products-detail-naem">
                                <p>
                                  Total : <span>₹ {item.totalprice}</span>{" "}
                                </p>
                              </div>
                            </div>
                          </div>

                          <div className="mt-3">
                            {/* <h3>₹ {totalPrice}</h3> */}
                          </div>
                        </Col>
                      </Row>
                    ))}
                  </div>
                </Card.Body>
              </Card>
            ))}
        </Col>
      </Container>
    </div>
  );
};

export default MyOrdersPage;
