"use client";
import { addToCart } from "@/redux/features/cartSlice";
import axios from "axios";
import Image from "next/image";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

const ProductDetails = () => {
  const [data, setData] = useState();
  const params = useParams();
  const { productId } = params;
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);

  const fetchData = async () => {
    const res = await axios.get(
      `https://fakestoreapi.com/products/${productId}`
    );
    console.log(res.data);
    setData(res.data);
  };
  useEffect(() => {
    fetchData();
  }, []);
  const handleCart = () => {
    const updatedData = { ...data, quantity };
    dispatch(addToCart(updatedData));
  };

  return (
    <div className="mt-28 lg:w-3/4 w-full mx-auto">
      <div className=" w-full grid grid-cols-12 gap-6 ">
        <div className="col-span-6 items-center justify-center flex">
          <div className="w-3/4 h-[500px] relative object-contain">
            <Image src={data?.image} alt="img" layout="fill" />
          </div>
        </div>
        <div className="col-span-6 bg-red-50 p-8">
          <div className="font-semibold text-2xl">{data?.title}</div>
          <div className="flex justify-between items-center lg:mr-20">
            <div className="font-semibold text-xl my-2">
              {"₹" + data?.price * 10}
            </div>
            <div className="flex gap-1 items-center ">
              <div className="bg-red-200 p-1 w-fit rounded-md ">
                {data?.rating.rate + "★"}
              </div>
              <div>{"(" + data?.rating.count + ")"}</div>
            </div>
          </div>
          <hr />
          <div className="my-8">{data?.description}</div>
          <div className="flex items-center mt-24 ">
            <select
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              className="w-20 h-12 px-4"
              id=""
            >
              {[1, 2, 3, 4, 5].map((value) => (
                <option key={value} value={value}>
                  {value}
                </option>
              ))}
            </select>
            <div
              onClick={handleCart}
              className="bg-red-500 px-6 py-3 text-white font-semibold text-lg w-fit "
            >
              Add to cart
            </div>
          </div>
        </div>

        <div></div>
      </div>
    </div>
  );
};

export default ProductDetails;
