"use client"
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const CheckoutPage = () => {

    const [userInfo, setUserInfo] = useState({
        id:Date.now(),
        fname:"",
        lname:"",
        street:"",
        state:"",
        city:"",
        zcode:"",
        creditCard:""
    })
    const [userArray, setUserArray] = useState([]);

    const router = useRouter()
    let res;

    const onChangeHandler = (e) => {
        setUserInfo({...userInfo, [e.target.name] : e.target.value})        
    }

    const addUserHandler = (e) =>{
        e.preventDefault()
        let usersDetails= {
            id:userInfo.id,
            fname:userInfo.fname,
            lname:userInfo.lname,
            street:userInfo.street,
            state:userInfo.state,
            city:userInfo.city,
            zcode:userInfo.zcode,
            creditCard:userInfo.creditCard
        }
        setUserArray([...userArray, usersDetails]);
        setUserInfo({fname:"", lname:"", city:"", state:"", street:"", zcode:"", creditCard:""})
        localStorage.setItem("user", JSON.stringify([...userArray, usersDetails]))
        
        router.push("/successpage")
    }
    
    if(typeof window !== "undefined"){
     res = JSON.parse( localStorage.getItem("user"))
    }
    
  return (
    <div className="max-w-[1200px] mx-auto my-[50px] ">
      <h2 className="text-center text-[30px] font-semibold text-red-600 ">Shipping Details</h2>
      <div className="mx-[10px]">
        <form className="max-w-[800px] mx-auto text-[18px] font-medium " >
          <div className="flex gap-6 my-5 max-[768px]:flex-col  ">
            <div className=" flex gap-4   w-full">
              <label className="whitespace-nowrap">First Name</label>
              <input className="border w-full" type="text" onChange={onChangeHandler} name="fname" value={userInfo.fname} />
            </div>
            <div className="flex gap-4 w-full">
              <label className="whitespace-nowrap">Last Name</label>
              <input className="border w-full" type="text" onChange={onChangeHandler} name="lname" value={userInfo.lname} />
            </div>
          </div>
          <div className="flex gap-4 my-5">
              <label htmlFor="">Street</label>
              <input className="w-full border" type="text" onChange={onChangeHandler} name="street" value={userInfo.street}/>
          </div>
          <div className="flex gap-4 max-[768px]:flex-col">
              <div  className="flex gap-4">
                  <label className="w-fit whitespace-nowrap" >State</label>
                  <input type="text" className="border w-full" required  onChange={onChangeHandler} name="state" value={userInfo.state} />
              </div>
              <div  className="flex gap-4">
                  <label className="w-fit whitespace-nowrap" >City</label>
                  <input type="text"  className="border w-full " required onChange={onChangeHandler} name="city" value={userInfo.city} />
              </div>
              <div  className="flex gap-4">
                  <label className="w-fit whitespace-nowrap" >Zip Code</label>
                  <input type="text" className="border w-full" required  onChange={onChangeHandler} name="zcode" value={userInfo.zcode} />
              </div>
          </div>
          <div className="my-5">
              <h2 className="text-[23px]">Payment Information</h2>
              <div className="my-5 ">
                  <div className="flex gap-5">
                      <label className="w-fit whitespace-nowrap" >Credit Card</label>
                      <input type="text" className="border w-full" required onChange={onChangeHandler} name="creditCard" value={userInfo.creditCard} />
                  </div>
              </div>
          </div>
          <div className="text-center flex justify-center rounded-md" >
            <button className="rounded-md bg-red-600 p-1" disabled={userInfo.fname.length<5 || userInfo.lname.length<5 || userInfo.street.length < 5 || userInfo.creditCard.length < 8} onClick={addUserHandler}>Place your order</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CheckoutPage;
