"use client";
import React from "react";
import { get } from "../../api/axios";
import { useState, useEffect } from 'react';
import { useSearchParams  } from "next/navigation";
import apiHost from "../../api/axios/common";

type Product = {
  image: string
  name: string
  price: number
  description: string
}

const DetailPage: any = () => {
  const searchParams = useSearchParams()
  const id = searchParams.get('id');
  const [product, setProduct] = useState<Product>({} as Product);
  useEffect(() => {
    const fetchData = async () => {
      const res: any = await get(`${apiHost}/api/products/${id}`, {}, {});
      await setProduct(res.data);
    }
    fetchData();
  }, []);

  return (
    <main className="container mx-auto px-6 py-8">

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full md:w-1/2 px-4 mb-8 md:mb-0">
            <img src={`images/${product.image}`} alt={product.name} className="w-full h-auto object-cover rounded-lg shadow-md" />
          </div>
          <div className="w-full md:w-1/2 px-4">
            <h1 className="text-3xl font-bold mb-4 text-pink-600">{product.name}</h1>
            <p className="text-xl font-semibold mb-4 text-gray-700">₪{product.price}</p>
            <p className="text-gray-600 mb-6">{product.description}</p>
            <button className="bg-pink-600 text-white px-6 py-3 rounded-lg hover:bg-pink-700 transition duration-300">הוסף לסל</button>
          </div>
        </div>
      </div>
    </main>

  );
};

export default DetailPage;
