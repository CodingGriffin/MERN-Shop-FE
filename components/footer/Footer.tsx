"use client";
import React from "react";
import { useRouter,usePathname } from "next/navigation";
import "../css/style.css";
export default function Footer() {
  const router = useRouter();
  const path = usePathname();
  return (
      <div className="bg-gray-100 text-center py-4 mt-8">
        <p>&copy; 2023 סלון מארי - נתניה. כל הזכויות שמורות.</p>
      </div>
  );
}
