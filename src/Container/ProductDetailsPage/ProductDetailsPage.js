import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const ProductDetailsPage = () => {
    const paramsData = useParams();
    const[ProductDetails,setProductDetails]=useState(null)
    useEffect(() => {
        axios
          .get(`https://aversaherbals.com/api/products/${paramsData.id}`)
          .then((response) => {
            const data = response.data;
            setProductDetails(data);
          })
          .catch((error) => {
            console.log(error);
          });
      }, [paramsData]);

      console.log("ProductDetails",ProductDetails)
  return (
    <div>ProductDetailsPage</div>
  )
}

export default ProductDetailsPage