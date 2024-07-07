import React from "react";
import ProductsList from "../../Components/Products/ProductsList";
import { Card, Col, Container, Row } from "react-bootstrap";
import WebNavbarAdd from "../../Components/WebsiteNavbar/WebNavbarAdd";
import coverimageproductpage from "../../Assets/coverimageproductpage.jpeg";
const ProductsPage = () => {
  return (
    <>
      {/* <Container> */}
      <div>
        <WebNavbarAdd />
        <img
          className="cover-imag-product-page-cc"
          src={coverimageproductpage}
          alt=""
        />
      </div>
      {/* </Container> */}
      <div className="mt-5">
        <ProductsList />
      </div>
    </>
  );
};

export default ProductsPage;
