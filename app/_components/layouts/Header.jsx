"use client";
import HeaderCart from "./HeaderCart";
import HeaderLogo from "./HeaderLogo";
import Navbar from "./Navbar";

export default function Header() {
  return (
    <div className="w-[100%] h-[100px] flex justify-between items-center px-5 py-3">
      <HeaderLogo />
      <Navbar />
      <HeaderCart />
    </div>
  );
}
