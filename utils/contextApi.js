"use client";
import { products } from "@/data/products";
import { createContext, useEffect, useState } from "react";

export const Context = createContext({});

const AppContext = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [filterByCategory, setFilterByCategory] = useState()
  const [total, setTotal] = useState(0)

  let subTotal = 0;

  useEffect(()=>{
    window.scrollTo(0, 0)
    cartItems.map((item)=>{
      return(
        subTotal += item.price * item.quantity
      )
    })
    setTotal(subTotal)
  },[cartItems])


    
  const filterDataHandler = (type) =>{
    const categoryData = products?.filter((item)=>{
      return item.category === type
      
    })
    setFilterByCategory(categoryData);
    
  }

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

  const productRemoveHandler = (productId) =>{
    const delProduct = cartItems?.filter((item)=>item?.id !== productId)
    setCartItems(delProduct)
  }

  return (
    <Context.Provider value={{ addToCartProduct, cartItems, filterByCategory, filterDataHandler, productRemoveHandler, total }}>
      {children}
    </Context.Provider>
  );
};

export default AppContext;
