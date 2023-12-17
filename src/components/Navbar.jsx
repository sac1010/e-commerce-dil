"use client";
import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";

const Navbar = () => {
  const cartItems = useSelector((state) => state.cart.cart);
  return (
    <div className="w-full h-16 bg-white fixed top-0 shadow-md flex items-center justify-between px-10 z-10">
      <div className="flex items-center w-3/4 justify-between ">
        <Link href={"/"} className="text-red-700 font-extrabold text-xl">
          Dil <span className="text-gray-800">Store</span>
        </Link>
        <input
          type="text"
          className="w-1/2 bg-gray-200 p-2 rounded-md"
          placeholder="search for products, brands and more"
        />
      </div>
      <Link href={'/cart'}>
        <span className="text-lg font-bold text-red-600">🛒 Cart</span>
        <span className="w-4 h-4 bg-red-600 p-2 m-2 rounded-full text-white font-bold">
          {cartItems.length}
        </span>
      </Link>
    </div>
  );
};

export default Navbar;
