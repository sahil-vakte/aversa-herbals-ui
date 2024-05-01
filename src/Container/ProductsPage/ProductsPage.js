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
        <p className="aversa-herbals-para-tag-one">
          Discover a world of natural wellness with our curated selection of
          premium herbal remedies. From time-tested traditional formulas to
          innovative blends backed by modern science, each Aversa Herbals
          product is crafted with care to support your journey towards optimal
          health and vitality.
        </p>
        </Container>
        <div>
        <ProductsList />
        </div>
    <Container>
        <h1 className="aversa-herbals-head-tag" style={{ textAlign: "center" }}>
        Why Choose Aversa Herbals Products?
        </h1>
      </Container>
      <div  className="products-page-linear-gradient-bg">
      <Container>
        <Row style={{paddingTop:"30px",paddingBottom:"30px"}}>
          <Col sm={4} className="mb-2">
            <Card>
              <Card.Body>
              <h1 className="aversa-product-title" style={{color:"rgb(22,98,51)"}}>Premium Quality</h1>
              <p className="aversa-herbals-para-tag-one">We're committed to sourcing the finest herbs and botanicals from trusted suppliers worldwide to ensure purity, potency, and effectiveness in every product.</p>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={4} className="mb-2">
            <Card>
              <Card.Body>
              <h1 className="aversa-product-title" style={{color:"rgb(22,98,51)"}}>Scientifically Formulated</h1>
              <p className="aversa-herbals-para-tag-one">Backed by a team of experts in herbal medicine and nutritional science, our formulas are carefully crafted to deliver optimal results without compromising on safety or efficacy.
</p>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={4} className="mb-2">
            <Card>
              <Card.Body>
              <h1 className="aversa-product-title" style={{color:"rgb(22,98,51)"}}>Ethical and Sustainable</h1>
              <p className="aversa-herbals-para-tag-one">We prioritize ethical sourcing practices and sustainable manufacturing processes to minimize our environmental footprint and support the communities we serve.
</p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        </Container>
      </div>
    </div>
  );
};

export default ProductsPage;
