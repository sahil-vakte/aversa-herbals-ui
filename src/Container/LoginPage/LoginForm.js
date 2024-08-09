import React, { useState } from "react";
import axios from "axios";
import { Col, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import AdminLoader from "../../AdminView/AdminLoader/AdminLoader";
import eventBus from "../../Components/CartPage/EventBus";

const LoginForm = () => {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
    contact_number: "",
    loginOption: "email",
  });

  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };

  const handleLoginOptionChange = (option) => {
    setLoginData({ ...loginData, loginOption: option });
    setErrors({});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      let response;
      if (loginData.loginOption === "email") {
        response = await axios.post("https://aversaherbals.com/api/login/", {
          username: loginData.email,
          password: loginData.password,
        });
      } else if (loginData.loginOption === "phone") {
        response = await axios.post("https://aversaherbals.com/api/login/", {
          contact_number: loginData.contact_number,
          password: loginData.password,
        });
      }
      console.log("Response:", response.data);

      localStorage.setItem("userData", JSON.stringify(response.data.user));
      localStorage.setItem("userId", response.data.user.id);
      localStorage.setItem("token", response.data.token);
      setLoading(false);
      Swal.fire({
        title: "Login Successful!",
        // text: "Login to Your Account to Start Shopping!",
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
          setLoading(false);
          navigate("/aversa-herbal-products");
          if (response.data.user.id) {
            axios
              .get(
                `https://aversaherbals.com/api/cart/${response.data.user.id}/`
              )
              .then((response) => {
                // setCartCount(response.data.length);
                eventBus.emit("cartCountChanged", response.data.length);
              })
              .catch((error) => {
                console.error("Error fetching cart data:", error);
              });
          }
        }, 1000);
      });
    } catch (error) {
      setLoading(false);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please Enter Correct Login Credentials!",
        confirmButtonColor: "#266431",
      });
    }
  };

  return (
    <div className="regi-stration-from-bg">
      {loading && <AdminLoader />}
      <form onSubmit={handleSubmit}>
        {loginData.loginOption === "email" && (
          <Col className="mb-2">
            <Form.Label className="label-for-sign-up-form">
              Email Address
            </Form.Label>
            <Form.Control
              type="text"
              placeholder="Registered Email Address"
              name="email"
              value={loginData.email}
              onChange={handleChange}
              required
              className="registration-input-form-input-tag  "
              style={{ fontSize: "12px" }}
            />
          </Col>
        )}
        {loginData.loginOption === "phone" && (
          <Col className="mb-2">
            <Form.Label className="label-for-sign-up-form">
              Phone Number
            </Form.Label>
            <Form.Control
              type="number"
              name="contact_number"
              placeholder="Registered Phone Number"
              value={loginData.contact_number}
              onChange={handleChange}
              required
              className="registration-input-form-input-tag  "
              style={{ fontSize: "12px" }}
            />
          </Col>
        )}
        <Col className="mb-2">
          <Form.Label className="label-for-sign-up-form">Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Password"
            value={loginData.password}
            onChange={handleChange}
            required
            className="registration-input-form-input-tag  "
            style={{ fontSize: "12px" }}
          />
        </Col>
        {Object.keys(errors).length > 0 && (
          <div>
            {Object.values(errors).map((error, index) => (
              <span key={index}>{error}</span>
            ))}
          </div>
        )}
        {message && <div>{message}</div>}
        <div style={{ textAlign: "right" }}>
          <button type="submit" className="see-all-products-button">
            Login
          </button>
        </div>
      </form>
      {/* <div>
        <button onClick={() => handleLoginOptionChange('email')}>Login with Email</button>
        <button onClick={() => handleLoginOptionChange('phone')}>Login with Phone Number</button>
      </div> */}
    </div>
  );
};

export default LoginForm;
