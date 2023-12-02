"use client";
import ProductCard from "@/components/ProductCard";
import React, { useContext, useEffect, useState } from "react";
import { Context } from "@/utils/contextApi";
import "@/app/globals.css";

const CategoriesPage = ({ params }) => {

  const capitalizedWord = (word) =>{
    let changeWord = word.toLowerCase();
    let newWord = changeWord.charAt(0).toUpperCase() + changeWord.slice(1)
    return newWord
  }

  let slug = params.catId;

  const { filterByCategory } = useContext(Context);

  return (
    <>
    <div className="max-w-[1200px] mx-auto mt-[100px]">
      
      <h1 className="text-[35px] font-semibold ">{capitalizedWord(slug)}</h1>
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
