import React from 'react'
import { Button } from "react-bootstrap";
import { Link } from 'react-router-dom';

const AdminProductList = () => {
  return (
    <div>
      <div style={{textAlign:"end"}}>
      <Link to="/admin/create-products">
        <Button>+ Add New Products</Button>
      </Link>
      </div>
    </div>
  )
}

export default AdminProductList