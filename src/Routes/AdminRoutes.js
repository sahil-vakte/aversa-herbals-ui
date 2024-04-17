import React, { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import CreateProduct from "../AdminView/Products/CreateProduct";
import AdminProductList from "../AdminView/Products/AdminProductList";
import AdminIngredientsList from "../AdminView/Ingredients/AdminIngredientsList";
import CreateIngredients from "../AdminView/Ingredients/CreateIngredients";

const AdminRoutes = () => {
  function ScrollToTop() {
    const { pathname } = useLocation();
  
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
  
    return null;
  }
  return (
    <div>
    <ScrollToTop/>
      <Routes>
        <Route path="/" element=<AdminProductList/> />
        <Route path="/admin-aversa-all-products" element=<AdminProductList/> />
        <Route path="/create-products" element=<CreateProduct/> />
        <Route path="/admin-aversa-all-ingredients" element=<AdminIngredientsList/> />
        <Route path="/create-ingredients" element=<CreateIngredients/> />
      </Routes>
    </div>
  );
};

export default AdminRoutes;
