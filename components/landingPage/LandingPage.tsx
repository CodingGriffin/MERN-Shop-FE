"use client";
import React from "react";
import Carousel from "../carousel/Carsoul";
import { put, post, get } from "../../api/axios";
const apiHost = "http://localhost:5050"
import { useState, useEffect } from 'react';
const LandingPage: any = () => {
  const [products, setProducts] = useState([]);
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const res: any = await get(`${apiHost}/api/landing`, {}, {});
      await setProducts(res.data.products);
      await setBlogs(res.data.blogs);
    }
    fetchData();
  }, []);

  const sendEmail = (e: any) => {
    console.log(e)
  }
  return (
    <div className="">
      <Carousel/>

      <h1 className="text-4xl font-bold text-center mb-8 text-pink-600">סלון מארי - המוסד הותיק ביותר בנתניה לתלתלים ופאות</h1>

      <div className="mb-12">
          <p className="text-lg mb-4">ברוכים הבאים לסלון מארי, המוסד הוותיק ביותר בנתניה לטיפול בתלתלים ופאות. כבר למעלה מ-50 שנה אנו מספקים שירות מקצועי ואיכותי לתושבי נתניה והסביבה.</p>
          <p className="text-lg mb-4">אנו מתמחים בטיפול בשיער מתולתל ובהתאמת פאות איכותיות. הצוות המיומן שלנו מעניק טיפולי שיער לכל סוגי התלתלים, וכן שירותי התאמה והתאמת פאות.</p>
      </div>

      <section className="mb-16">
          <h2 className="text-3xl font-semibold text-center mb-8 text-pink-600">מוצרים מובחרים</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products?.map((product: any) => {
                return  <div className="bg-white p-6 rounded-lg shadow-md text-center">
                          <img src={`images/${product.image}`} alt={product.name} className="w-full h-48 object-cover rounded-lg mb-4" />
                          <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                          <p className="text-gray-600 mb-4">₪{product.price}</p>
                          <a href="{{ url_for('product_details', product_id=product.id) }}" className="bg-pink-600 text-white px-4 py-2 rounded-lg hover:bg-pink-700 transition duration-300">לפרטים נוספים</a>
                        </div>
            })}
          </div>
      </section>      

      <section className="mb-16 bg-pink-100 py-12 px-4 rounded-lg">
          <h2 className="text-3xl font-semibold text-center mb-8 text-pink-600">מה הלקוחות שלנו אומרים</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="mb-4">"הצוות של סלון מארי מקצועי ביותר. הם הצליחו לטפל בשיער המתולתל שלי בצורה מדהימה!"</p>
              <p className="font-semibold">- רחל כהן</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="mb-4">"הפאה שהתאימו לי בסלון מארי נראית טבעית להפליא. אני מרגישה ביטחון מחודש!"</p>
              <p className="font-semibold">- שרה לוי</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="mb-4">"השירות בסלון מארי תמיד אדיב ומקצועי. אני לקוחה קבועה כבר שנים רבות."</p>
              <p className="font-semibold">- מרים אברהם</p>
            </div>
          </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-semibold text-center mb-8 text-pink-600">מהבלוג שלנו</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs?.map((post: any) => {
            return <article className="bg-white p-6 rounded-lg shadow-md">
                    <img src={`images/${post.image}`} alt={post.title } className="w-full h-48 object-cover rounded-lg mb-4" />
                    <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                    <p className="mb-4">{post.excerpt}</p>
                    <a href="{{ url_for('blog') }}#{{ post.id }}" className="text-pink-600 hover:text-pink-700">קרא עוד...</a>
                    </article>
          })}
        </div>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4 text-pink-600">
            <i className="fas fa-cut mr-2"></i>השירותים שלנו
          </h2>
          <ul className="list-disc list-inside">
            <li>עיצוב שיער לכל סוגי התלתלים</li>
            <li>התאמת פאות איכותיות</li>
            <li>תיקונים והתאמות לפאות קיימות</li>
            <li>טיפולי שיער מתקדמים</li>
          </ul>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4 text-pink-600">
              <i className="fas fa-clock mr-2"></i>שעות פעילות
            </h2>
            <p>ראשון-חמישי: 9:00-19:00</p>
            <p>שישי: 9:00-14:00</p>
            <p>שבת: סגור</p>
        </div>
      </div>

      <div className="text-center mb-12">
        <h2 className="text-3xl font-semibold mb-4 text-pink-600">
          <i className="fas fa-phone-alt mr-2"></i>צרו קשר
        </h2>
        <p className="mb-2"><i className="fas fa-map-marker-alt text-pink-600 mr-2"></i>רחוב ויצמן 45, נתניה</p>
        <p className="mb-2"><i className="fas fa-phone text-pink-600 mr-2"></i>09-8765432</p>
        <p><i className="fas fa-envelope text-pink-600 mr-2"></i>info@salonmarie.co.il</p>
      </div>

      <section className="text-center mb-12">
        <h2 className="text-3xl font-semibold mb-4 text-pink-600">השאירו פרטים ונחזור אליכם</h2>
        <form className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-md">
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">שם מלא</label>
            <input type="text" id="name" name="name" required className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-600" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">כתובת אימייל</label>
            <input type="email" id="email" name="email" required className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-600" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">הודעה</label>
            <textarea id="message" name="message" required className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-600" rows={4}></textarea>
          </div>
          <button type="submit" className="bg-pink-600 text-white px-6 py-3 rounded-lg hover:bg-pink-700 transition duration-300" onClick={(e) => sendEmail(e)}>שלח הודעה</button>
        </form>
      </section>
    </div>
  );
};

export default LandingPage;
