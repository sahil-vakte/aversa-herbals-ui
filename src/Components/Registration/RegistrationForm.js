import React, { useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import axios from "axios";

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    username: "",
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    mobile: "",
    street: "",
    city: "",
    state: "",
    zip: "",
    usertype: null,
    main_sponsor_id: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async () => {
    try {
      const formDataToSend = {
        ...formData,
        username: formData.email,
        major_sponsor_id: null,
        head_sponsor_id: null,
        upper_head_sponsor_id: null,
        is_adhar_kyc: false,
        is_pan_kyc: false,
        is_driving_license_kyc: false,
        is_voter_id_kyc: false,
        is_passport_kyc: false,
      };

      await axios.post("https://aversaherbals.com/api/users/", formDataToSend);
      alert("User added successfully");
    } catch (error) {
      console.error("Error adding user:", error);
    }
  };

  return (
    <Container>
      <div className="registration-form-main-div">
        <Form>
          <Row>
            <Col sm={6}>
              <Form.Group controlId="first_name">
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  type="text"
                  name="first_name"
                  value={formData.first_name}
                  onChange={handleChange}
                  placeholder="Enter first name"
                />
              </Form.Group>
            </Col>
            <Col sm={6}>
              <Form.Group controlId="last_name">
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  type="text"
                  name="last_name"
                  value={formData.last_name}
                  onChange={handleChange}
                  placeholder="Enter last name"
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col sm={6}>
              <Form.Group controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter email"
                />
              </Form.Group>
            </Col>
            <Col sm={6}>
              <Form.Group controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Enter password"
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col sm={6}>
              <Form.Group controlId="mobile">
                <Form.Label>Mobile</Form.Label>
                <Form.Control
                  type="text"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  placeholder="Enter mobile"
                />
              </Form.Group>
            </Col>
            <Col sm={6}>
              <Form.Group controlId="city">
                <Form.Label>City/Villege</Form.Label>
                <Form.Control
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  placeholder="Enter city"
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col sm={12}>
              <Form.Group controlId="street">
                <Form.Label>Flat/House No , Apartment , Street</Form.Label>
                <Form.Control
                  type="text"
                  name="street"
                  value={formData.street}
                  onChange={handleChange}
                  placeholder="Enter street"
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col sm={6}>
              <Form.Group controlId="state">
                <Form.Label>State</Form.Label>
                <Form.Control
                  type="text"
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  placeholder="Enter state"
                />
              </Form.Group>
            </Col>
            <Col sm={6}>
              <Form.Group controlId="zip">
                <Form.Label>ZIP</Form.Label>
                <Form.Control
                  type="text"
                  name="zip"
                  value={formData.zip}
                  onChange={handleChange}
                  placeholder="Enter ZIP"
                />
              </Form.Group>
            </Col>
          </Row>

          <Form.Group controlId="usertype">
            <Form.Label>Please Select User Type</Form.Label>
            <Row>
              <Col sm={12}>
                <Form.Check
                  type="radio"
                  label="Purchase Products for Personal use."
                  name="usertype"
                  value="client"
                  checked={formData.usertype === "client"}
                  onChange={handleChange}
                />
              </Col>
              <Col sm={12}>
                <Form.Check
                  type="radio"
                  label="Start your own business, access exclusive offers, and earn income by selling products."
                  name="usertype"
                  value="distributor"
                  checked={formData.usertype === "distributor"}
                  onChange={handleChange}
                />
              </Col>
            </Row>
          </Form.Group>

          {formData.usertype === "distributor" && (
            <Form.Group controlId="main_sponsor_id">
              <Form.Label>
                Please Enter Your Sponsor ID to become a Distributor
              </Form.Label>
              <Form.Control
                type="text"
                name="main_sponsor_id"
                value={formData.main_sponsor_id}
                onChange={handleChange}
                placeholder="Enter Main Sponsor ID"
              />
            </Form.Group>
          )}

          <Button variant="success" onClick={handleSubmit} className="mt-3">
            Register
          </Button>
        </Form>
      </div>
    </Container>
  );
};

export default RegistrationForm;
