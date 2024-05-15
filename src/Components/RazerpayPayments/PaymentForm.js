// PaymentForm.js
import React, { useState, useEffect } from "react";
import axios from "axios";

const PaymentForm = () => {
  const [orderId, setOrderId] = useState("");
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [paymentError, setPaymentError] = useState("");

  useEffect(() => {
    createOrder();
  }, []);

  const createOrder = async () => {
    try {
      const response = await axios.post("http://localhost:5000/create-order", {
        amount: 1,
        currency: "INR",
        receipt: "order_receipt",
      });

      setOrderId(response.data.id);
    } catch (error) {
      console.error("Error creating order:", error);
    }
  };

  const loadRazorpay = async () => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    script.onload = handleRazorpayLoad;
    document.body.appendChild(script);
  };

  const handleRazorpayLoad = () => {
    const options = {
      key: "rzp_test_8ML31thvWgYv8V",
      amount: 1,
      currency: "INR",
      name: "Aversa Herbals",
      description: "Test Payment",
      order_id: orderId,
      handler: handlePaymentSuccess,
      prefill: {
        name: "John Doe",
        email: "john@example.com",
        contact: "9999999999",
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#3399cc",
      },
    };
    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  const handlePaymentSuccess = (response) => {
    console.log("Payment successful:", response);
    setPaymentSuccess(true);
  };

  return (
    <div>
      {!orderId && <p>Creating order...</p>}
      {orderId && !paymentSuccess && (
        <div>
          <p>Order created successfully! Proceed to payment:</p>
          <button onClick={loadRazorpay}>Pay Now</button>
        </div>
      )}
      {paymentSuccess && <p>Payment successful!</p>}
      {paymentError && <p>{paymentError}</p>}
    </div>
  );
};

export default PaymentForm;
