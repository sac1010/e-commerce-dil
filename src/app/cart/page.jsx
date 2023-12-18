"use client";
import { removeFromCart } from "@/redux/features/cartSlice";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();
  const [total, setTotal] = useState(
    cartItems.reduce((acc, item) => acc + parseFloat(item.price * 100 || 0), 0)
  );

  useEffect(() => {}, []);
  return (
    <div className="w-full lg:w-3/4 mx-auto mt-32 ">
      <div className="w-10/12 mx-auto flex flex-col gap-4">
        {cartItems.map((item) => {
          return (
            <div
              key={item.title}
              className="w-full h-24 bg-red-100 flex justify-between items-center px-4"
            >
              <div className="flex items-center gap-4 ">
                <div className="bg-gray-200 w-[80px] h-[80px] relative">
                  <Image
                    src={item.image}
                    layout="fill"
                    className="object-scale-down"
                  />
                </div>
                <div className="w-[250px] line-clamp-3 font-semibold">
                  {item.title}
                </div>
                <div className="md:pl-10">qty: {item.quantity}</div>
                <div className="md:pl-20">₹ {item.price * 100}</div>
              </div>
              <div
                onClick={() => dispatch(removeFromCart(item))}
                className="text-red-500 font-semibold cursor-pointer"
              >
                remove
              </div>
            </div>
          );
        })}
        <div className="w-full flex justify-end font-extrabold text-lg">
          Total: ₹
          {cartItems.reduce(
            (acc, item) => acc + parseFloat(item.price * 100 || 0),
            0
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
