"use client";
import React, { useContext, useState } from "react";
import { products } from "@/data/products";
// import { useRouter } from "next/router";
import "./singleProduct.scss";
import "@/app/globals.css"
import Header from "@/components/Header";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaCartPlus,
  FaPinterest,
} from "react-icons/fa";
console.log(products);
import { Context } from "@/utils/contextApi";

const ProductDetails = ({params}) => {

    const slug = params.productId
    
  const {addToCartProduct}= useContext(Context);

  const [quantity, setQuantity] = useState(1)
  
//   const router = useRouter();
//   const {slug}= router.query;
 


  const increaseQuantity = () =>{
    setQuantity((inc)=> inc + 1)
  };
  
  const decreaseQuantity = () =>{
    setQuantity((dec)=>{
      if(quantity === 1) return 1;
      return dec - 1;

    })
  }

  // console.log(obj);

  return (
    <>
      <Header/>
    <div className="single-product-main-content">
        <div className="single-product-page">
          <div className=" layout">
            <div className="left w-[500px]">
              <img src={products?.[slug]?.img} alt="" />
            </div>
            <div className="right  mt-10 ">
              <div className="name text-red-500">{products?.[slug]?.title}</div>
              <span className="price">&#8377;{products?.[slug]?.price}</span>
              <span className="desc">{products?.[slug]?.description}</span>
              <div className="cart-button">
                <div className="quantity-button">
                  <span onClick={decreaseQuantity}>-</span>
                  <span>{quantity}</span>
                  <span onClick={increaseQuantity}>+</span>
                </div>
                <button className="add-to-cart-button" onClick={()=>{addToCartProduct(products?.[slug], quantity)}}>
                  <FaCartPlus />
                  ADD TO CART
                </button>
              </div>
              <span className="divider" />
              <div className="info-item">
                <span className="text-bold">
                  Category : <span>{" " + products?.[slug]?.category}</span>
                </span>
                <div className="text-bold ">
                    <span>
                        Share :
                    </span>
                  <span className="social-icons flex ">
                    <FaFacebookF />
                    <FaInstagram />
                    <FaLinkedinIn />
                    <FaPinterest />
                    <FaTwitter />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="related-product-container">
          {/* <RelatedProducts  />         */}
        </div>
    
    </div>
    </>
  );
};

export default ProductDetails;
