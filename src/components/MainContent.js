import React, { useState, useEffect } from "react";
import Cart from "./Cart";
import "./MainContent.css";
import ProductCard from "./ProductCard";

const MainContent = () => {
  const [cartId, setCartId] = useState(
    localStorage.getItem("item") ? JSON.parse(localStorage.getItem("item")) : []
  );

  const addProducttocart = (id) => {
    const temp = [...cartId];
    const item = { amount: 1, id: id };
    temp.push(item);
    // console.log(temp);
    setCartId([...temp]);
    // console.log(cartId);
    localStorage.setItem("item", JSON.stringify(temp));
  };

  const plusAmount = (id) => {
    const temp = [...cartId];
    temp.map((item, index) => {
      if (item.id == id) {
        item.amount = item.amount + 1;
      }
    });
    setCartId([...temp]);
    localStorage.setItem("item", JSON.stringify(temp));
  };
  const minusAmount = (id) => {
    const temp = [...cartId];
    temp.map((item, index) => {
      if (item.id == id) {
        item.amount = item.amount - 1;
      }
    });
    const new_temp = temp.filter((item) => item.amount > 0);
    console.log(new_temp);
    setCartId([...new_temp]);
    localStorage.setItem("item", JSON.stringify(new_temp));
  };
  const removeItem = (id) => {
    const temp = [...cartId];
    temp.map((item, index) => {
      if (item.id == id) {
        item.amount = 0;
      }
      const new_temp = temp.filter((item) => item.amount > 0);
      console.log(new_temp);
      setCartId([...new_temp]);
      localStorage.setItem("item", JSON.stringify(new_temp));
    });
  };
  useEffect(() => {
    // console.log(cartId);
  }, [cartId]);
  return (
    <>
      <div className="main-content">
        <ProductCard addProducttocart={addProducttocart} cartId={cartId} />
        <Cart
          addProducttocart={addProducttocart}
          cartId={cartId}
          plusAmount={plusAmount}
          minusAmount={minusAmount}
          removeItem={removeItem}
        />
      </div>
    </>
  );
};

export default MainContent;
