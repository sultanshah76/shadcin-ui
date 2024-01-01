import Link from "next/link";
import "./globals.css";
import React from "react";
import Image from "next/image";
import logo1 from "@/component/assets/icons/logo1.jpg"


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
    <Link href="/react/Advance-learning"><Image src={logo1} alt="REACT ADVANCE LEARNING"
    width={50} height={50}/></Link>
  </header>
        {children}
        <footer className="bg-gray-500 flex justify-center py-5">
          <p>&copy; 2023 - All rights reserved.</p>
        </footer>
    </body>
}
export default rootlayout;