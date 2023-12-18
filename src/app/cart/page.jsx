"use client";
import Modal from "@/components/Modal";
import { emptyCart, removeFromCart } from "@/redux/features/cartSlice";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cart);
  const router = useRouter();
  const dispatch = useDispatch();
  //   const [open, setOpen] = useState(true)

  useEffect(() => {}, []);

  const confirmOrder = () => {
    dispatch(emptyCart());
    router.push("/");
  };

  if (cartItems.length > 0) {
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
        <div className="w-full flex flex-col items-center justify-center gap-4 py-8">
          <div className="flex gap-3">
            <input checked type="checkbox" />
            <div>use saved address</div>
          </div>
          <button
            onClick={confirmOrder}
            className="bg-red-500 text-white text-lg font-semibold px-4 py-3 rounded-md"
          >
            Confirm Order
          </button>
        </div>
      </div>
    );
  }else{
    return(
        <div className="w-full flex h-[500px] justify-center items-center font-bold text-xl"> Cart empty!</div>
    )
  }
};

export default Cart;
