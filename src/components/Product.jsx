import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "@/redux/features/cartSlice";

const Product = ({ product }) => {
  const dispatch = useDispatch();
  const addCart = () => {
    const cartItem = { ...product, quantity: 1 };
    dispatch(addToCart(cartItem));
  };
  return (
    <div className="lg:col-span-3 col-span-12 sm:col-span-6 rounded-xl bg-red-100 p-2 hover:transition-transform hover:scale-105 ">
      <Link href={`/product/${product.id}`}>
        <div
          href={`/product/${product.id}`}
          className="w-full relative h-[200px] "
        >
          <Image
            className="w-full rounded-xl object-scale-down"
            src={product.image}
            alt="product"
            layout="fill"
          />
        </div>
      </Link>

      <Link
        href={`/product/${product.id}`}
        className="line-clamp-2 my-2 font-medium"
      >
        {product.title}
      </Link>
      <div className="flex items-center justify-between my-2">
        <div className="flex gap-1 items-center ">
          <div className="bg-red-200 p-1 w-fit rounded-md ">
            {product.rating.rate + "★"}
          </div>
          <div>{"(" + product.rating.count + ")"}</div>
        </div>
        <div
          onClick={() => {
            addCart();
          }}
          className="font-bold text-lg flex items-center justify-center text-white bg-red-400 h-10 w-10 rounded-full hover:cursor-pointer "
        >
          +
        </div>
      </div>

      <div className="font-bold text-md my-2">{"₹" + product.price * 100}</div>
    </div>
  );
};

export default Product;
