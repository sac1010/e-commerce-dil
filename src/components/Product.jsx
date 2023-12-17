import Image from "next/image";
import React from "react";

const Product = ({ product }) => {
  return (
    <div className="col-span-3 rounded-xl bg-red-100 p-2">
      <div className="w-full relative h-[200px] ">
        <Image
          className="w-full rounded-xl object-scale-down"
          src={product.image}
          alt="product"
          layout="fill"
          // width={100}
          // height={20}
        />
      </div>
    </div>
  );
};

export default Product;
