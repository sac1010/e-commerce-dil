"use client";
import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";

const Navbar = () => {
  const cartItems = useSelector((state) => state.cart.cart);
  return (
    <div className="w-full h-16 bg-white fixed top-0 shadow-md flex items-center justify-between md:px-10 px-1 z-10">
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
      <Link className="flex items-center justify-center " href={'/cart'}>
        <span className="text-lg font-bold text-red-600 hidden md:block">🛒 Cart</span>
        <span className="p-1 px-2 md:ml-2 rounded-full bg-red-600  text-white font-bold">
          {cartItems.length}
        </span>
      </Link>
    </div>
  );
};

export default Navbar;
