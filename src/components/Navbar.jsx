import React from "react";

const Navbar = () => {
  return (
    <div className="w-full h-16 bg-white fixed top-0 shadow-md flex items-center justify-between px-10">
      <div className="flex items-center w-3/4 justify-between ">
        <div className="text-red-700 font-extrabold text-xl">
          Dil <span className="text-gray-800">Store</span>
        </div>
        <input type="text" className="w-1/2 bg-gray-200 p-2 rounded-md" placeholder="search for products, brands and more" />
      </div>
      <div>
        <span className="text-lg font-bold text-red-600">🛒 Cart</span>
        <span className="w-4 h-4 bg-red-600 p-2 m-2 rounded-full text-white font-bold">
          0
        </span>
      </div>
    </div>
  );
};

export default Navbar;
