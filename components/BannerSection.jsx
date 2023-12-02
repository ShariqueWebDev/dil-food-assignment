import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { BiArrowBack } from "react-icons/bi";

const imgData = [
    { img: "/earbuds-prod-2.jpg", ShopBtn: "Shop Now", id:"1"},
    { img: "/headphone-prod-6.webp", ShopBtn: "Shop Now", id:"2" },
    { img: "/speaker-prod-2.webp", ShopBtn: "Shop Now", id:"3" },
  ];

const BannerSection = () => {
  return (
    <div className="w-full relative max-w-[1280px] mx-auto my-10 bg-red-100">
    <Carousel
      autoPlay={true}
      infiniteLoop={true}
      showThumbs={false}
      showIndicators={false}
      showStatus={false}
      renderArrowPrev={(handlerClick, hasPrev) => (
        <div className=" cursor-pointer absolute z-[1] right-[40px] bottom-0 p-2 bg-black text-white max-md:right-[30px] " onClick={handlerClick}>
          <BiArrowBack  className="text-[22px] max-md:text-[13px]  " />
        </div>
      )}
      renderArrowNext={(handlerClick, hasNex) => (
        <div className=" cursor-pointer absolute z-[1] right-0 bottom-0 p-2 bg-black text-white " onClick={handlerClick}>
          <BiArrowBack className="rotate-180 text-[22px] max-md:text-[13px]"  />
        </div>
      )}
    >
      {imgData?.map((data) => {
        return (
          <div className="max-w-[600px] mx-auto" key={data?.id}>
            <img
              src={data?.img}
              className="w-full "
            />
            <div className=" w-full max-w-[150px] absolute cursor-pointer bottom-10 left-0 bg-red-500 text-white h-[50px] flex justify-center items-center uppercase font-bold sm:max-w-[120px] sm:h-[45px] sm:text-[12px] max-md:max-w-[80px] max-md:text-[10px] max-md:h-[35px] ">
              {data?.ShopBtn}
            </div>
          </div>
        );
      })}
    </Carousel>
  </div>
  )
}

export default BannerSection
