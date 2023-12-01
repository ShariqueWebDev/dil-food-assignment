"use client";
import ProductCard from "@/components/ProductCard";
import React, { useContext, useEffect, useState } from "react";
import { Context } from "@/utils/contextApi";
import "@/app/globals.css";

const CategoriesPage = ({ params }) => {
  let slug = params.catId;

  const { filterByCategory } = useContext(Context);
  const heading = filterByCategory?.map((head) => head?.category);
  // console.log(slug);

  return (
    <>
    <div className="max-w-[1200px] mx-auto mt-[100px]">
      
      <h1 className="text-[35px] font-semibold ">{slug}</h1>
      <div className="flex justify-center flex-wrap">
        {filterByCategory?.map((item) => {
          return <ProductCard data={item} key={item?.id} />;
        })}
      </div>
        </div>
    </>
  );
};

export default CategoriesPage;
