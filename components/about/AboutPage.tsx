"use client";
import React from "react";
const AboutPage: any = () => {
  return (
    <main className="container mx-auto px-6 py-8">
      <h1 className="text-4xl font-bold text-center mb-8 text-pink-600">אודות סלון מארי</h1>

      <div className="mb-12">
        <p className="text-lg mb-4">סלון מארי הוא המוסד הוותיק ביותר בנתניה לטיפול בתלתלים ופאות. כבר למעלה מ-50 שנה אנו מספקים שירות מקצועי ואיכותי לתושבי נתניה והסביבה.</p>
        <p className="text-lg mb-4">המומחיות שלנו היא בטיפול בשיער מתולתל ובהתאמת פאות איכותיות. הצוות המיומן שלנו, בעל ניסיון רב שנים, מעניק טיפולי שיער מותאמים אישית לכל סוגי התלתלים, וכן שירותי התאמה והתאמת פאות מקצועיים.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4 text-pink-600">המומחיות שלנו</h2>
          <ul className="list-disc list-inside">
            <li>טיפול בשיער מתולתל</li>
            <li>התאמת פאות איכותיות</li>
            <li>תספורות ועיצובי שיער מתקדמים</li>
            <li>טיפולי שיער מקצועיים</li>
          </ul>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4 text-pink-600">הערכים שלנו</h2>
          <ul className="list-disc list-inside">
            <li>מקצועיות ללא פשרות</li>
            <li>שירות אישי ולבבי</li>
            <li>חדשנות וטכניקות מתקדמות</li>
            <li>שביעות רצון מלאה של הלקוחות</li>
          </ul>
        </div>
      </div>

      <div className="text-center mb-12">
        <h2 className="text-3xl font-semibold mb-4 text-pink-600">בואו לבקר אותנו</h2>
        <p className="mb-2"><i className="fas fa-map-marker-alt text-pink-600 mr-2"></i>רחוב ויצמן 45, נתניה</p>
        <p className="mb-2"><i className="fas fa-phone text-pink-600 mr-2"></i>09-8765432</p>
        <p><i className="fas fa-envelope text-pink-600 mr-2"></i>info@salonmarie.co.il</p>
      </div>
    </main>
  );
};

export default AboutPage;
