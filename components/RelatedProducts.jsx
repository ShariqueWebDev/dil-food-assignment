import React from "react";
import ProductCard from "./ProductCard";

const RelatedProducts = ({ categoryId, categorySlug, products, heading }) => {
  console.log(categoryId, categorySlug, products);

  const relatedProducts = products?.filter(
    (item) => item?.category === categoryId
  );
  const filterById = relatedProducts?.filter(
    (item) => item?.id !== categorySlug
  );

  console.log(relatedProducts);
  console.log(filterById);

  return (
    <>
      <div className="mx-auto mt-[90px]">
        <div className="">
          <h1 className="text-[30px] font-bold">{heading}</h1>
        </div>
        <div className="flex flex-wrap mx-auto mt-[20px]">
          {filterById?.slice?.(0, 3)?.map((item) => {
            return <ProductCard data={item} key={item?.id} />;
          })}
        </div>
      </div>
    </>
  );
};

export default RelatedProducts;
