import React, { useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import axios from "axios";
import Swal from "sweetalert2";
import AdminLoader from "../../AdminView/AdminLoader/AdminLoader";
import { useNavigate } from "react-router-dom";

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
    errors: {},
  });
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
      errors: {
        ...formData.errors,
        [name]: "",
      },
    });
  };

  const validateFields = () => {
    const newErrors = {};
    Object.keys(formData).forEach((key) => {
      if (
        key !== "main_sponsor_id" &&
        key !== "errors" &&
        key !== "username" &&
        !formData[key]
      ) {
        newErrors[key] = "This field is required";
      }
    });

    if (formData.usertype === "distributor" && !formData.main_sponsor_id) {
      newErrors.main_sponsor_id = "This field is required";
    }

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = validateFields();
    if (Object.keys(errors).length > 0) {
      setFormData({ ...formData, errors });
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please Fill All Required Fields!",
        confirmButtonColor: "#266431",
      });
      return;
    }
    setLoading(true);
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
      setLoading(false);

      Swal.fire({
        title: "Account Registered Successfully!",
        text: "Login to Your Account to Start Shopping!",
        confirmButtonColor: "#266431",
        showClass: {
          popup: `
            animate__animated
            animate__fadeInUp
            animate__faster
          `,
        },
        hideClass: {
          popup: `
            animate__animated
            animate__fadeOutDown
            animate__faster
          `,
        },
      }).then(() => {
        setTimeout(() => {
          navigate("/aversa-herbal-login");
        }, 1000);
      });
      setFormData({
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
        errors: {},
      });
    } catch (error) {
      console.error("Error adding user:", error);
      setLoading(false);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "This Email and Mobile Number is Already Registered!",
        confirmButtonColor: "#266431",
      });
    }
  };

  return (
    <div>
      {loading && <AdminLoader />}
      <Container>
        <div className="registration-form-main-div">
          <Form onSubmit={handleSubmit} className="grid gap-2">
            <Row>
              <Col sm={6} className="">
                <Form.Group controlId="first_name">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="first_name"
                    value={formData.first_name}
                    onChange={handleChange}
                    style={{ fontSize: "13px" }}
                    placeholder="Enter first name"
                    isInvalid={!!formData.errors.first_name}
                  />
                  <Form.Control.Feedback type="invalid">
                    {formData.errors.first_name}
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
              <Col sm={6}>
                {" "}
                <Form.Group controlId="last_name">
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="last_name"
                    value={formData.last_name}
                    onChange={handleChange}
                    style={{ fontSize: "13px" }}
                    placeholder="Enter last name"
                    isInvalid={!!formData.errors.last_name}
                  />
                  <Form.Control.Feedback type="invalid">
                    {formData.errors.last_name}
                  </Form.Control.Feedback>
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
                    style={{ fontSize: "13px" }}
                    placeholder="Enter email"
                    isInvalid={!!formData.errors.email}
                  />
                  <Form.Control.Feedback type="invalid">
                    {formData.errors.email}
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
              <Col sm={6}>
                <Form.Group controlId="password">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    style={{ fontSize: "13px" }}
                    placeholder="Enter password"
                    isInvalid={!!formData.errors.password}
                  />
                  <Form.Control.Feedback type="invalid">
                    {formData.errors.password}
                  </Form.Control.Feedback>
                  <Form.Check
                    type="checkbox"
                    label="Show Password"
                    checked={showPassword}
                    onChange={() => setShowPassword(!showPassword)}
                    className="mt-2 label-for-sign-up-form"
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col sm={6}>
                <Form.Group controlId="mobile">
                  <Form.Label>Mobile</Form.Label>
                  <Form.Control
                    type="number"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleChange}
                    style={{ fontSize: "13px" }}
                    placeholder="Enter mobile"
                    isInvalid={!!formData.errors.mobile}
                  />
                  <Form.Control.Feedback type="invalid">
                    {formData.errors.mobile}
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
              <Col sm={6}>
                <Form.Group controlId="city">
                  <Form.Label>City/Village</Form.Label>
                  <Form.Control
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    style={{ fontSize: "13px" }}
                    placeholder="Enter city"
                    isInvalid={!!formData.errors.city}
                  />
                  <Form.Control.Feedback type="invalid">
                    {formData.errors.city}
                  </Form.Control.Feedback>
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
                    style={{ fontSize: "13px" }}
                    placeholder="Enter street"
                    isInvalid={!!formData.errors.street}
                  />
                  <Form.Control.Feedback type="invalid">
                    {formData.errors.street}
                  </Form.Control.Feedback>
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
                    style={{ fontSize: "13px" }}
                    placeholder="Enter state"
                    isInvalid={!!formData.errors.state}
                  />
                  <Form.Control.Feedback type="invalid">
                    {formData.errors.state}
                  </Form.Control.Feedback>
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
                    style={{ fontSize: "13px" }}
                    placeholder="Enter ZIP"
                    isInvalid={!!formData.errors.zip}
                  />
                  <Form.Control.Feedback type="invalid">
                    {formData.errors.zip}
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
            </Row>

            <Form.Group controlId="usertype" className="py-4">
              <Form.Label>Please Select User Type</Form.Label>
              <Row>
                <Col sm={12}>
                  <Form.Check
                    type="radio"
                    label="Purchase Products for Personal use."
                    className="label-for-sign-up-form"
                    name="usertype"
                    value="client"
                    checked={formData.usertype === "client"}
                    onChange={handleChange}
                    isInvalid={!!formData.errors.usertype}
                  />
                </Col>
                <Col sm={12}>
                  <Form.Check
                    type="radio"
                    label="Start your own business, access exclusive offers, and earn income by selling products."
                    className="label-for-sign-up-form"
                    name="usertype"
                    value="distributor"
                    checked={formData.usertype === "distributor"}
                    onChange={handleChange}
                    isInvalid={!!formData.errors.usertype}
                  />
                </Col>
              </Row>
              <Form.Control.Feedback type="invalid">
                {formData.errors.usertype}
              </Form.Control.Feedback>
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
                  style={{ fontSize: "13px" }}
                  placeholder="Enter Main Sponsor ID"
                  isInvalid={!!formData.errors.main_sponsor_id}
                />
                <Form.Control.Feedback type="invalid">
                  {formData.errors.main_sponsor_id}
                </Form.Control.Feedback>
              </Form.Group>
            )}

            <Button
              variant="success"
              type="submit"
              className=""
              disabled={loading}
            >
              {loading ? "Registering..." : "Register"}
            </Button>
          </Form>
        </div>
      </Container>
    </div>
  );
};

export default RegistrationForm;
