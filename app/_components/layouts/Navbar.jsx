"use client";
import { links } from "@/helps/navbarLinks";
import Link from "next/link";
import { useState } from "react";
import { IoChevronDown } from "react-icons/io5";

export default function Navbar() {
  const [showDropDown, setShowDropDown] = useState(null);

  const handleMouseEnter = (index) => {
    setShowDropDown(index);
  };

  const handleMouseLeave = () => {
    setShowDropDown(null);
  };

  return (
    <nav>
      <ul className="flex justify-center items-center gap-4">
        {links.map((el, index) => (
          <li
            key={index}
            className="relative group px-3 flex justify-center items-center rounded text-black h-[50px]"
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            <Link className="capitalize text-[20px]" href={`/${el.path}`}>
              {el.name}
            </Link>
            {el.sublink && (
              <span className="ml-2 cursor-pointer">
                <IoChevronDown size={20} />
              </span>
            )}

            {/* Dropdown Menu */}
            {el.sublink && showDropDown === index && (
              <ul className="absolute left-0 top-[50px] w-48 bg-white border rounded shadow-lg">
                {el.sublink.map((sublink, subIndex) => (
                  <li key={subIndex} className="p-2 hover:bg-gray-100">
                    <Link
                      href={`/${sublink.path}`}
                      className="capitalize text-[16px]"
                    >
                      {sublink.name}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}
