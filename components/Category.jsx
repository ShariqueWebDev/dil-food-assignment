import React from "react";
import Wrapper from "./Wrapper";
import Image from "next/image";
import { categoriesImgs} from "@/data/category";

const Category = () => {
  return (
      <div className="flex gap-4 mt-[70px] flex-wrap justify-center" >
      {categoriesImgs.map((image) => {
          // console.log(img);
          return (
              <div key={image.id} className="max-w-[280px] overflow-hidden rounded-md cursor-pointer ">
            <img src={image.img} alt="" className="hover:scale-125 transition-all"/>
          </div>
        );
    })}
    </div>
  );
};

export default Category;
