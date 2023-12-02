"use client";
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import {BsCheckCircle} from "react-icons/bs"

const SuccessPage = () => {

  const [loading, setLoading] = useState(false);

  useEffect(()=>{
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 2000);
  },[])
    let res;

    if(typeof window !== "undefined"){
       res = JSON.parse( localStorage.getItem("user"))
    }
    console.log(res[0]?.fname);

    
  return (
    <>
      {!!loading ? <div className="h-[300px] text-[25px] mt-[200px] text-center font-bold">Loading...</div>: <div className="flex border justify-center items-center h-screen ">
      <div className='max-w-[600px] rounded-lg border mx-[10px] my-[100px] p-[10px] text-center bg-red-600 '>
          {res?.map((item)=>{
              return(
                  <div key={item?.id}>
                      <p className='text-[30px] font-semibold'> Hi {item?.fname} Your order has been placed</p>
                      <div className="mt-[15px] flex justify-center text-white">
                          <BsCheckCircle size={50}/>
                      </div>
                      <div className="text-[20px] font-semibold my-2">Thank you for your purchase</div>
                      <div className="text-[17px] my-2">Your order ID is: {item?.id}</div>
                      <div className="text-[15px]">You will recieve your order in 3 days</div>
                  </div>
            )
          })}
        <Link href="/">
          <button className='bg-red-600 my-3 max-w-[200px] text-center p-2 rounded-md text-white font-semibold '>CONTINUE SHOPPING</button>
        </Link>

      </div>
          </div>}
    </>
  )
}

export default SuccessPage
