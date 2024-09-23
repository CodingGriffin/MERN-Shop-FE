"use client";
import React from "react";
import { put, post, get } from "../../api/axios";
const apiHost = "https://mern-shop-be.onrender.com"
import { useState, useEffect } from 'react';
const BlogsPage: any = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const res: any = await get(`${apiHost}/api/blogs`, {}, {});
      await setBlogs(res.data);
    }
    fetchData();
  }, []);

  return (
    <main className="container mx-auto px-6 py-8">
      <h1 className="text-4xl font-bold text-center mb-8 text-pink-600">הבלוג של סלון מארי</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <article className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4 text-pink-600">טיפים לטיפוח שיער מתולתל</h2>
          <p className="mb-4">שיער מתולתל דורש טיפול מיוחד. בפוסט זה נשתף איתכם את הטיפים הטובים ביותר לשמירה על תלתלים בריאים ויפים.</p>
          <a href="#" className="text-pink-600 hover:text-pink-700">קרא עוד...</a>
        </article>
        <article className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4 text-pink-600">מדריך לבחירת פאה מושלמת</h2>
          <p className="mb-4">בחירת פאה יכולה להיות מאתגרת. בפוסט זה נעבור על השיקולים החשובים ביותר בבחירת פאה שתתאים לך בצורה מושלמת.</p>
          <a href="#" className="text-pink-600 hover:text-pink-700">קרא עוד...</a>
        </article>
        <article className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4 text-pink-600">טרנדים חמים בעיצוב שיער לקיץ הקרוב</h2>
          <p className="mb-4">מהם הסגנונות החמים ביותר לקיץ הקרוב? בפוסט זה נחשוף בפניכם את הטרנדים האחרונים בעולם עיצוב השיער.</p>
          <a href="#" className="text-pink-600 hover:text-pink-700">קרא עוד...</a>
        </article>
        <article className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4 text-pink-600">כיצד לשמור על צבע השיער לאורך זמן</h2>
          <p className="mb-4">צביעת שיער היא השקעה, וחשוב לדעת כיצד לשמור על הצבע לאורך זמן. בפוסט זה נשתף טיפים מקצועיים לשמירה על צבע השיער.</p>
          <a href="#" className="text-pink-600 hover:text-pink-700">קרא עוד...</a>
        </article>
      </div>
    </main>

  );
};

export default BlogsPage;
