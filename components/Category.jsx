import React, { useContext } from "react";
import { categoriesImgs} from "@/data/category";
import Link from "next/link";
import { Context } from "@/utils/contextApi";

const Category = () => {
  
  const {filterDataHandler} = useContext(Context)

  return (
      <div className="flex gap-4 mt-[70px] flex-wrap justify-center" >
      {categoriesImgs?.map((image) => {
          // console.log(img);
          return (
            <div key={image?.id} className="max-w-[280px] overflow-hidden rounded-md cursor-pointer ">
                <Link href={`/categorypage/${image?.category}`} onClick={()=>{filterDataHandler(image?.category)}}><img src={image?.img} alt="" className="hover:scale-125 transition-all"/></Link>
            </div>
        );
    })}
    </div>
  );
};

export default Category;
