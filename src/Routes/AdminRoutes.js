import React, { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import AdminProductList from "../AdminView/Products/AdminProductList";
import AdminIngredientsList from "../AdminView/Ingredients/AdminIngredientsList";
import CreateIngredients from "../AdminView/Ingredients/CreateIngredients";
import CreateProductNew from "../AdminView/Products/CreateProductNew";
import ProductDiseaseTypeList from "../AdminView/ProductDiseaseType/ProductDiseaseTypeList";
import ProductTypeList from "../AdminView/ProductType/ProductTypeList";
import UpdateProductData from "../AdminView/Products/UpdateProductData";

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
        <Route path="/create-products" element=<CreateProductNew/> />
        <Route path="/update-product-data/:id/:title" element=<UpdateProductData/> />
        <Route path="/admin-aversa-all-ingredients" element=<AdminIngredientsList/> />
        <Route path="/create-ingredients" element=<CreateIngredients/> />
        <Route path="/admin-aversa-all-disease-types-of-product" element=<ProductDiseaseTypeList/> />
        <Route path="/admin-aversa-all-product-types-of-product" element=<ProductTypeList/> />
      </Routes>
    </div>
  );
};

export default AdminRoutes;
