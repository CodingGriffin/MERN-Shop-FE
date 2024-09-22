"use client";
import React from "react";
import { put, post, get } from "../../api/axios";
const apiHost = "http://localhost:5050"
import { useState, useEffect } from 'react';
const ProductsPage: any = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const res: any = await get(`${apiHost}/api/products`, {}, {});
      await setProducts(res.data);
    }
    fetchData();
  }, []);

  return (
    <main className="container mx-auto px-6 py-8">

      <h1 className="text-4xl font-bold text-center mb-8 text-pink-600">המוצרים שלנו</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products?.map((product: any) => {
          return  <div className="bg-white p-6 rounded-lg shadow-md">
                    <a href="{{ url_for('product_details', product_id=product.id) }}">
                      <img src={`images/${product.image}`} alt={product.name} className="w-full h-48 object-cover rounded-lg mb-4" />
                      <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
                      <p className="text-gray-600 mb-4">₪{product.price}</p>
                    </a>
                    <button className="bg-pink-600 text-white px-4 py-2 rounded hover:bg-pink-700 transition duration-300">הוסף לסל</button>
                  </div>
        })}
      </div>
    </main>

  );
};

export default ProductsPage;
