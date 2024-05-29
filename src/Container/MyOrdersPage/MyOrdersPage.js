import axios from 'axios';
import React, { useEffect, useState } from 'react'

const MyOrdersPage = () => {
    const userId = localStorage.getItem("userId");
    const [orderData, setOrderData] = useState([]);
    const [fetchApiData, setfetchApiData] = useState(false);
    const [cartCount, setCartCount] = useState(0);
    console.log("orderData",orderData)
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
  return (
    <div>MyOrdersPage</div>
  )
}

export default MyOrdersPage