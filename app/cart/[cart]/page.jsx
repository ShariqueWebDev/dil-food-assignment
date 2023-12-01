"use client";
import Link from "next/link";
import CartItem from "@/components/CartItem";
import Wrapper from "@/components/Wrapper";
import { Context } from "@/utils/contextApi";
import { useContext } from "react";


const Cart = () => {

    const {cartItems, productRemoveHandler, total} = useContext(Context)

  return (
    <>
    <div className="max-w-[1280px] mb-10 mx-auto ">
      <h1 className="heading text-center text-[35px] font-semibold my-8 ">
        Shopping Cart
      </h1>
      <Wrapper>
        <>
         {cartItems.length >= 1 && <div className="cart_container flex justify-between max-lg:flex-col relative">
            {/* CART ITEMS */}
            <div className="left flex-1 mr-6 max-md:mr-0 h-[400px] overflow-auto  ">
              <div className="font-semibold mb-4 max-md:text-center text-[20px] max-md:text-[18px]">
                Cart Items
              </div>
              {cartItems.map((item)=>{
                return(
                    <CartItem data={item} productRemoveHandler={productRemoveHandler}/>
                )
              })}
              </div>
            {/* ITEMS SUMMARY */}
            <div className="right flex-2 p-2 max-lg:my-10 ">
              <div className="font-semibold text-[20px] max-md:[18px] mb-4 ">
                Summary
              </div>
              <div className=" p-4">
                <div className="flex justify-between mb-5 font-semibold">
                  <span className="uppercase">Subtotal:</span>
                  <span>&#8377;{total}</span>
                </div>
                <div className="max-w-[300px] text-[14px]  ">
                  The subtotal reflects the total price of your order. including
                  duties and taxes. before only applicable discount it doesn't
                  include delivery costs and international costs fee.
                </div>
                <Link href={"/checkout"}>
                  <button className="w-full cursor-pointer bg-black text-white p-3 mt-6 flex justify-center items-center rounded-full bg-red-600 font-semibold">
                    Checkout
                  </button>
                </Link>
              </div>
            </div>
          </div>}
        </>

        {/* THIS IS EMPTY SCREEN COMPONENT */}
          {cartItems.length <= 0 && <div className="empty mx-auto flex flex-col justify-center items-center">
            <div className="w-[400px] h-[400px] max-sm:w-[250px] max-sm:h-[250px]">
              <img src="/empty-cart.jpg" alt="" />
            </div>
            <div className="text-[30px] font-semibold my-2 max-sm:text-[25px]">
              Your Cart is Empty
            </div>
            <div className="text-[14px] ">Explore your Choice</div>
            <div className=" cursor-pointer bg-black py-4 px-6 text-white my-5 rounded-full font-semibold max-sm:py-3 max-sm:px-4 max-sm:text-[px]">
              <Link href="/">
                <button>Continue shopping</button>
              </Link>
            </div>
          </div>}
      </Wrapper>
    </div>
                  </>
  );
};
export default Cart;


