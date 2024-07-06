import React from "react";
import ProductsList from "../../Components/Products/ProductsList";
import { Card, Col, Container, Row } from "react-bootstrap";

const ProductsPage = () => {
  return (
    <div>
      <Container>
        <h1 className="aversa-herbals-head-tag" style={{ textAlign: "center" }}>
          Welcome to the Aversa Herbals Product Collection
        </h1>
        <p
          className="aversa-herbals-para-tag-one"
          style={{ textAlign: "center" }}
        >
          Discover a world of natural wellness with our curated selection of
          premium herbal remedies. From time-tested traditional formulas to
          innovative blends backed by modern science, each Aversa Herbals
          product is crafted with care to support your journey towards optimal
          health and vitality.
        </p>
      </Container>
      <div className="mt-5">
        <ProductsList />
      </div>
    </div>
  );
};

export default ProductsPage;
