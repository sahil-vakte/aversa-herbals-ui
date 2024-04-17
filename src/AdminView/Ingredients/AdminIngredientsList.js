import React from 'react'
import { Button } from "react-bootstrap";
import { Link } from 'react-router-dom';

const AdminIngredientsList = () => {
  return (
    <div><div style={{textAlign:"end"}}>
      <Link to="/admin/create-ingredients">
    <Button>+ Add New Ingredients</Button>
</Link>
  </div></div>
  )
}

export default AdminIngredientsList