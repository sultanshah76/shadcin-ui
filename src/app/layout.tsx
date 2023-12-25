import Link from "next/link";
import "./globals.css";
import React from "react";
function rootlayout({
    children,
  }: {
    children: React.ReactNode;
  }){
    return <body>
      
     <header className="bg-gray-700 px-5 py-5 flex gap-5">
    <Link href="/">Home</Link>
    <Link href="/dashboard">Dashboard</Link>
    <Link href="/dashboard/settings">Settings</Link>
    <Link href="/blog">Blog</Link>
    <Link href="/contact-us">Contact Us</Link>
    <Link href="/about-us">About Us</Link>
    <Link href="/new/">NEW</Link>
    <Link href="/react">REACT</Link>
  </header>
        {children}
        <footer className="bg-gray-500 flex justify-center py-5">
          <p>&copy; 2023 - All rights reserved.</p>
        </footer>
    </body>
}
export default rootlayout;