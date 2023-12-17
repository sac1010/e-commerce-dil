"use client";
import Product from "../components/Product";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Home() {
  const [data, setData] = useState([]);

  const getProducts = async () => {
    const res = await axios.get("https://fakestoreapi.com/products");
    setData(res.data);
    console.log(res.data);
  };
  useEffect(() => {
    getProducts();
  }, []);
  return (
    <div className="mt-16">
      <div className="w-full  bg-red-500 flex items-center justify-center h-10 text-white font-medium">
        🎁 Christmas offer: up to 50% off. Shop now and unwrap the joy!
      </div>
      <div className="xl:w-3/4 mx-auto grid grid-cols-12 gap-20 py-12">
        {data.map((product) => {
          return <Product key={product.id} product={product} />;
        })}
      </div>
    </div>
  );
}
