import Image from "next/image";
import Link from "next/link";
import React from "react";

const Product = ({ product }) => {
  return (
    <Link href={`/product/${product.id}`} className="lg:col-span-3 col-span-12 sm:col-span-6 rounded-xl bg-red-100 p-2 hover:transition-transform hover:scale-105">
      <div className="w-full relative h-[200px] ">
        <Image
          className="w-full rounded-xl object-scale-down"
          src={product.image}
          alt="product"
          layout="fill"
          // sizes="100"
          // width={100}
          // height={20}
        />
      </div>
      <div className="line-clamp-2 my-2 font-medium">{product.title}</div>
      <div className="flex items-center justify-between my-2">
      <div className="flex gap-1 items-center ">
        <div className="bg-red-200 p-1 w-fit rounded-md ">
          {product.rating.rate + "★"}
        </div>
        <div>{"(" + product.rating.count + ")"}</div>
      </div>
      <div className="font-bold text-lg flex items-center justify-center text-white bg-red-400 h-10 w-10 rounded-full">+</div>
      </div>

      <div className="font-bold text-md my-2">{"₹" + product.price * 10}</div>
    </Link>
  );
};

export default Product;
