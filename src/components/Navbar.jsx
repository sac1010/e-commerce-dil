"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useSelector } from "react-redux";

const Navbar = () => {
  const cartItems = useSelector((state) => state.cart.cart);
  const prod = useSelector((state) => state.products.products);
  const router = useRouter();
  const [searchRes, setSearchRes] = useState([]);
  const [search, setSearch] = useState("");
  return (
    <div className="w-full h-16 bg-white fixed top-0 shadow-md flex items-center justify-between md:px-10 px-1 z-10">
      <div className="flex items-center w-3/4 justify-between ">
        <Link href={"/"} className="text-red-700 font-extrabold text-xl">
          Dil <span className="text-gray-800">Store</span>
        </Link>
        <div className="w-1/2 relative">
          <input
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              if (e.target.value.trim() === "") {
                setSearchRes([]);
                return;
              }
              const result = prod.filter((item) => {
                return item.title.toLowerCase().includes(e.target.value);
              });
              // console.log(result, "ress");
              setSearchRes(result.slice(0, 5));
            }}
            type="text"
            className="w-full bg-gray-200 p-2 rounded-md"
            placeholder="search for products, brands and more"
          />
          <div className="absolute w-full">
            {searchRes.length > 0 &&
              searchRes.map((res) => {
                return (
                  <div
                    onClick={() => {
                      setSearchRes([]);
                      setSearch("")
                      router.push(`/product/${res.id}`);
                    }}
                    key={res.id}
                    className="w-full h-10 border-gray-300 border-b hover:cursor-pointer hover:bg-red-100 bg-white flex items-center px-2 line-clamp-1 text-sm"
                  >
                    {res.title}
                  </div>
                );
              })}
          </div>
        </div>
      </div>
      <Link className="flex items-center justify-center " href={"/cart"}>
        <span className="text-lg font-bold text-red-600 hidden md:block">
          🛒 Cart
        </span>
        <span className="p-1 px-2 md:ml-2 rounded-full bg-red-600  text-white font-bold">
          {cartItems.length}
        </span>
      </Link>
    </div>
  );
};

export default Navbar;
