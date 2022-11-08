import "./ProductCard.css";
import logo from "../app/assets/nike.png";
import ProductList from "./ProductList";
import React, { useState, useEffect } from "react";

const ProductCard = ({ addProducttocart, cartId }) => {
  return (
    <>
      <div className="card">
        <div className="card-top">
          <img src={logo} alt="logo-nike" className="card-top-logo"></img>
        </div>
        <div className="card-title">Our Products</div>
        <div className="card-body">
          <ProductList addProducttocart={addProducttocart} cartId={cartId} />
        </div>
      </div>
    </>
  );
};

export default ProductCard;
