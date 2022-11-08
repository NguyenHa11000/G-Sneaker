import React, { useState, useEffect } from "react";
import "./Product.css";

const Product = (prop) => {
  // console.log(JSON.parse(localStorage.getItem("item")));

  return (
    <>
      <div className="shop-item">
        <div
          className="shop-item_img"
          style={{ backgroundColor: `${prop.shoe.color}` }}
        >
          <img src={prop.shoe.image}></img>
        </div>
        <div className="shop-item_name">{prop.shoe.name}</div>
        <div className="shop-item_description">{prop.shoe.description}</div>
        <div className="shop-item_bottom">
          <div className="shop-item_price">{prop.shoe.price}</div>
          {localStorage.getItem("item") &&
          localStorage.getItem("item").includes(prop.shoe.id) ? (
            <>
              <div className="shop-item-button inactive">
                <div className="shop-item-button-cover">
                  <div className="shop-item-button-cover-check-icon"></div>
                </div>
              </div>
            </>
          ) : (
            <div
              className="shop-item-button"
              value={prop.shoe.id}
              onClick={(e) => prop.addProducttocart(prop.shoe.id)}
            >
              <p>ADD TO CART</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Product;
