import React, { useState, useEffect } from "react";
import "./ProductCard.css";
import "./Cart.css";
import data from "../app/data/shoes.json";
import logo from "../app/assets/nike.png";
import CartItem from "./CartItem";

const Cart = ({ addProducttocart, cartId, plusAmount, minusAmount }) => {
  const shoes = data.shoes;
  var sum = 0;
  cartId.map(
    (cartItem, index) =>
      (sum = sum + shoes[cartItem.id - 1].price * cartItem.amount)
  );
  console.log(sum);

  // console.log(cartItems);
  return (
    <>
      <div className="card">
        <div className="card-top">
          <img src={logo} alt="logo-nike" className="card-top-logo"></img>
        </div>
        <div className="card-title">
          Your Cart
          <span className="card-title-amuount">{sum.toFixed(2)}</span>
        </div>
        <div className="card-body">
          <div className="cart-items">
            {cartId && cartId != [] ? (
              <>
                <div>
                  {cartId.map((cartItem, index) => (
                    <>
                      <CartItem
                        shoe={shoes[cartItem.id - 1]}
                        cartItem={cartItem}
                        cartId={cartId}
                        plusAmount={plusAmount}
                        minusAmount={minusAmount}
                      />
                    </>
                  ))}
                </div>
              </>
            ) : (
              <>
                <div className="cart-empty">
                  <p className="cart-empty-text">Your cart is empty</p>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
