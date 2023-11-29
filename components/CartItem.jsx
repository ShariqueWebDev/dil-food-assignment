import Image from "next/image";
import { AiFillDelete } from "react-icons/ai";
import { VscChromeClose } from "react-icons/vsc";
import Link from "next/link";
import Img from "@/public/watch-prod-1.webp"

const CartItems = ({ }) => {

  return (
    <div>
      <div className="flex w-full px-3 items-center mb-2 shadow-xl max-md:flex-col max-md:pb-2">
        <div className="img aspect-square mr-2 max-w-[105px] max-md:max-w-[300px] overflow-hidden">
       <Link href={`/product`}>
          <Image
            src={Img}
            width={105}
            height={105}
            className="w-full"
          />
        </Link>
        </div>
        <div className="text w-full max-md:flex-col relative">
          <div className="absolute right-0 top-1 hidden max-md:block">
            <VscChromeClose size={18} />
          </div>
          <div className="flex justify-between max-md:flex-col">

            <div className="">
            <Link href={`/product`}>
              <h1 className="text-[20px] font-semibold">
                {"smart Watch 105F"}
              </h1>
            </Link>
              <p className="text-[14px] text-black/[0.7]">
                {"Description"}
              </p>
            </div>
            <div className="font-semibold text-[14px] text-black/[0.7] ">
              MRP &#8377; {1020}
            </div>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex gap-5">
              <div className="">
                <span className="text-[13px] font-semibold">Quantity: 2 </span>
              </div>
            </div>
            <div className="delete">
              <AiFillDelete
                size={18}
                className="text-black/[0.7] max-md:hidden cursor-pointer"
              />
            </div>
          </div>
          <div className=""></div>
        </div>
      </div>
     
    </div>
  );
};

export default CartItems;



