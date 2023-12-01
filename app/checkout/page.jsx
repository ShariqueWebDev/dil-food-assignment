"use client"
import { stringify } from "postcss";
import React, { useState } from "react";

const CheckoutPage = () => {

    const [userInfo, setUserInfo] = useState({
        fname:"sharique",
        lname:"shaikh",
        street:"",
        state:"",
        city:"",
        zcode:"",
        creditCard:""
    })
    const [userArray, setUserArray] = useState([])

    const onChangeHandler = (e) => {

        setUserInfo({...userInfo, [e.target.name] : e.target.value})        
    }

    const addUserHandler = (e) =>{
        e.preventDefault()
        let usersDetails= {
            fname:userInfo.fname,
            lname:userInfo.lname,
            street:userInfo.street,
            state:userInfo.state,
            city:userInfo.city,
            zcode:userInfo.zcode,
            creditCard:userInfo.creditCard
        }
        setUserArray([...userArray, usersDetails]);
        localStorage.setItem("user", JSON.stringify([...userArray, usersDetails]))
    }
    const getItems = localStorage.getItem("user")
    const res = JSON.parse(getItems)
    

    console.log(userArray);
    console.log(res);
    

  return (
    <div>
      <h2 className="">Shipping Details</h2>
      {res?.map((i)=>{
        console.log("local storage data reveal: " + res[0].fname);
        return(
            <h1>{"sdfadfdfadfadfad"+i.fname}</h1>
        )
      })}
      <form >
        <div className="">
          <div className="">
            <label htmlFor="">First Name</label>
            <input type="text" onChange={onChangeHandler} name="fname" value={userInfo.fname} />
          </div>
          <div className="">
            <label htmlFor="">Last Name</label>
            <input type="text" onChange={onChangeHandler} name="lname" value={userInfo.lname} />
          </div>
        </div>
        <div className="">
            <label htmlFor="">Street</label>
            <input type="text" onChange={onChangeHandler} name="street" value={userInfo.street}/>
        </div>
        <div className="">
            <div className="">
                <label htmlFor="">State</label>
                <input type="text" onChange={onChangeHandler} name="state" value={userInfo.state} />
            </div>
            <div className="">
                <label htmlFor="">City</label>
                <input type="text" onChange={onChangeHandler} name="city" value={userInfo.city} />
            </div>
            <div className="">
                <label htmlFor="">Zip Code</label>
                <input type="text" onChange={onChangeHandler} name="zcode" value={userInfo.zcode} />
            </div>
        </div>
        <div>
            <h2>Payment Information</h2>
            <div className="">
                <div className="">
                    <label htmlFor="">Credit Card</label>
                    <input type="text" onChange={onChangeHandler} name="creditCard" value={userInfo.creditCard} />
                </div>
            </div>
        
        </div>
        <button type="submit" onClick={addUserHandler}>submit</button>
      </form>
    </div>
  );
};

export default CheckoutPage;
