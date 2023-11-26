import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const ProductCard = ({data}) => {
  return (
    <div className="p-3 m-2 w-[340px] max-[]: shadow-sm">
      <Link href={`/`}>
        <div className="product_img">
          <Image width={500} height={500} src={data?.img} alt={""} />
        </div>
        <div className="product_details p-2">
          <p className="my-1 font-semibold text-ellipsis overflow-hidden whitespace-nowrap ">{data?.title}</p>
          <p className="text-[12px] text-black/[0.7]">{data?.category}</p>
          <div className="price_details flex justify-between">
            <div className="price flex gap-5 text-black/[0.6] font-semibold ">
              <p>&#8377;{data?.price}</p>
                <p className="line-through">&#8377;{data?.ori_price}</p>
            </div>
            {<p className="text-[#45df82]">10%</p>}
          </div>
        </div>
      </Link>
    </div>
  )
}

export default ProductCard
