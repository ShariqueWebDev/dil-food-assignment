"use client";
import { createContext, useState } from "react";

export const Context = createContext({});

const AppContext = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [no, setNo] = useState("10222");

  const addToCartProduct = (product, quantity) => {
    let item = [...cartItems];
    const index = item.findIndex((p)=> p.id === product?.id);
    if (index !== -1) {
      item[index].quantity = +quantity;
    } else {
      product.quantity = quantity;
      item = [...item, product];
    }
    setCartItems(item);
  };

  console.log(cartItems);

  return (
    <Context.Provider value={{ no, addToCartProduct }}>
      {children}
    </Context.Provider>
  );
};

export default AppContext;
