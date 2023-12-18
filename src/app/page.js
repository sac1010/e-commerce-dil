"use client";
import { setLoading, setProducts } from "@/redux/features/productsSlice";
import Product from "../components/Product";
import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Home() {
  // const [data, setData] = useState([]);
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);
  const loading = useSelector((state) => state.products.loading);

  const getProducts = async () => {
    dispatch(setLoading(true));
    const res = await axios.get("https://fakestoreapi.com/products");
    dispatch(setProducts(res.data));
  };
  useEffect(() => {
    getProducts();
  }, []);
  return (
    <div className="mt-16">
      <div className="w-full  bg-red-500 flex items-center justify-center h-10 text-white font-medium">
        🎁 Christmas offer: up to 50% off. Shop now and unwrap the joy!
      </div>
      <div className="xl:w-3/4 w-full mx-auto grid grid-cols-12 lg:gap-20 gap-4 py-12">
        {!loading
          ? products.map((product) => {
              return <Product key={product.id} product={product} />;
            })
          : [1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <div
                key={i}
                className="lg:col-span-3 h-[300px] col-span-12 sm:col-span-6 rounded-xl bg-gray-300 animate-pulse p-2"
              ></div>
            ))}
      </div>
    </div>
  );
}
