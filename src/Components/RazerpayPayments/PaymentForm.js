import React, { useState } from "react";
import axios from "axios";

const PaymentForm = () => {
  const [orderId, setOrderId] = useState("");
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [paymentError, setPaymentError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const createOrder = async () => {
    try {
      const response = await axios.post("http://localhost:5000/create-order", {
        amount: 1,
        currency: "INR",
        receipt: "order_receipt",
      });

      setOrderId(response.data.id);
      return response.data.id; // Return the order ID to be used in loadRazorpay
    } catch (error) {
      console.error("Error creating order:", error);
      setPaymentError("Error creating order");
      setIsLoading(false);
    }
  };

  const loadRazorpay = async (orderId) => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    script.onload = () => handleRazorpayLoad(orderId);
    document.body.appendChild(script);
  };

  const handleRazorpayLoad = (orderId) => {
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
    setIsLoading(false);
  };

  const handlePayNow = async () => {
    setIsLoading(true);
    const orderId = await createOrder();
    if (orderId) {
      loadRazorpay(orderId);
    }
  };

  return (
    <div>
      {isLoading && <p>Loading...</p>}
      {!paymentSuccess && !isLoading && (
        <div>
          <button onClick={handlePayNow}>Pay Now</button>
        </div>
      )}
      {paymentSuccess && <p>Payment successful!</p>}
      {paymentError && <p>{paymentError}</p>}
    </div>
  );
};

export default PaymentForm;
