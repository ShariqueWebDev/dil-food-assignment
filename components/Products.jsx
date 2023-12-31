import React from "react";
import ProductCard from "./ProductCard";
import { products } from "@/data/products";

const Products = ({ headingText }) => {
  return (
    <>
      {headingText && (
        <h1 className="text-[32px] font-bold pt-10">
          {headingText}
        </h1>
      )}
    <div className="py-6 flex flex-wrap gap-5 justify-center">
      {products?.map((pro) => {
        return <ProductCard data={pro} key={pro?.id}/>;
      })}
    </div>
        </>
  );
};

export default Products;
