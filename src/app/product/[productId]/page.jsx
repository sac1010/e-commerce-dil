"use client";
import { addToCart } from "@/redux/features/cartSlice";
import { setLoading, setProductDetail } from "@/redux/features/productsSlice";
import axios from "axios";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const ProductDetails = () => {
  //   const [data, setData] = useState();
  const params = useParams();
  const router = useRouter();
  const { productId } = params;
  const dispatch = useDispatch();
  const productDetails = useSelector((state) => state.products.productDetails);
  const loading = useSelector((state) => state.products.loading);

  const [quantity, setQuantity] = useState(1);

  const fetchData = async () => {
    dispatch(setLoading(true));

    const res = await axios.get(
      `https://fakestoreapi.com/products/${productId}`
    );
    // dispatch(setLoading(false));
    dispatch(setProductDetail(res.data));
  };
  useEffect(() => {
    fetchData();
  }, []);
  const handleCart = () => {
    const updatedData = { ...productDetails, quantity };
    dispatch(addToCart(updatedData));
    router.push("/cart");
  };

  if (loading || !productDetails) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="w-16 h-16 bg-red-500 animate-spin"></div>
      </div>
    );
  }
  return (
    <div className="mt-28 lg:w-3/4 w-full mx-auto">
      <div className=" w-full grid grid-cols-12 gap-6 ">
        <div className="md:col-span-6 col-span-12 items-center justify-center flex">
          <div className="w-3/4 md:h-[500px] h-[300px] relative object-scale-down">
            <Image src={productDetails?.image} alt="img" layout="fill" />
          </div>
        </div>
        <div className="md:col-span-6 col-span-12 bg-red-50 p-8">
          <div className="font-semibold text-2xl">{productDetails?.title}</div>
          <div className="flex justify-between items-center lg:mr-20">
            <div className="font-semibold text-xl my-2">
              {"₹" + productDetails?.price * 100}
            </div>
            <div className="flex gap-1 items-center ">
              <div className="bg-red-200 p-1 w-fit rounded-md ">
                {productDetails?.rating?.rate + "★"}
              </div>
              <div>{"(" + productDetails?.rating?.count + ")"}</div>
            </div>
          </div>
          <hr />
          <div className="my-8">{productDetails?.description}</div>
          <div className="flex items-center mt-24 ">
            <select
              value={quantity}
              onChange={(e) => setQuantity(parseInt(e.target.value))}
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
