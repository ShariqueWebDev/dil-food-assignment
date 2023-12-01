import Image from "next/image";
import { AiFillDelete } from "react-icons/ai";
import { VscChromeClose } from "react-icons/vsc";
import Link from "next/link";

const CartItems = ({ data, productRemoveHandler }) => {
  return (
    <div>
      <div className="flex w-full px-3 items-center mb-2 shadow-xl max-md:flex-col max-md:pb-2 mt-[20px]">
        <div className="img shrink-0 mr-2 max-w-[105px] max-md:max-w-[300px] overflow-hidden">
          <Link href={`/product`}>
            <Image
              src={data?.img}
              width={105}
              height={105}
              className=" w-[105px] h-[105px] "
            />
          </Link>
        </div>
        <div className="text w-full max-md:flex-col relative">
          <div className="absolute right-0 top-1 hidden max-md:block">
            <VscChromeClose size={18} />
          </div>
          <div className="flex justify-between max-md:flex-col ">
            <div className="overflow-hidden">
              <Link href={`/product`}>
                <h1 className="text-[20px] max-w-[300px] font-semibold text-ellipsis overflow-hidden whitespace-nowrap text-red-600">{data?.title}</h1>
              </Link>
              <p className="text-[14px] max-w-[500px] text-black/[0.7] text-ellipsis overflow-hidden whitespace-nowrap ">
                <span>
                  {data?.description}
                </span>
              </p>
            </div>
            <div className="font-semibold text-[14px] text-black/[0.7] ">
              MRP &#8377; {data?.price}
            </div>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex gap-5">
              <div className="">
                <span className="text-[13px] text-red-600 font-semibold">
                  Quantity: {data?.quantity}{" "}
                </span>
              </div>
            </div>
            <div className="delete" onClick={()=>{productRemoveHandler(data?.id)}}>
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
