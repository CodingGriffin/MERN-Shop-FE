"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";
export default function Header() {
  const router = useRouter();

  const handleLogin = () => {
    router.push("/login");
  };
  const handleSignup = () => {
    router.push("/signup");
  };
  const handleLogout = () => {
    if (typeof window !== 'undefined') {
      console.log("handleLogout ======>>>>>>>>>>");
      localStorage.setItem("token", "");
      router.push("/");
    }
  };
  const handleMyAccount = () => {
    router.push("/myAccount");
  };

  return (
    <header className="bg-white shadow-md">
        <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
            <a href="/" className="text-2xl font-bold text-pink-600">
                <Image src="images/logo.svg" alt="לוגו סלון מארי" width={200} height={400} />
            </a>
            <ul className="flex items-center space-x-reverse space-x-6">
                <li><a href="/" className="text-gray-700 hover:text-pink-600">דף הבית</a></li>
                <li><a href="/about" className="text-gray-700 hover:text-pink-600">אודות המספרה</a></li>
                <li><a href="/products" className="text-gray-700 hover:text-pink-600">מוצרים</a></li>
                <li><a href="/blogs" className="text-gray-700 hover:text-pink-600">בלוג</a></li>
                <li><a href="#contact-form" className="bg-pink-600 text-white px-4 py-2 rounded-lg hover:bg-pink-700 transition duration-300">הזמן תור</a></li>
            </ul>
        </nav>
    </header>
  );
}
