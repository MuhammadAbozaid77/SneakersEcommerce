"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Wrapper from "../ui/Wrapper";
import MobileMenu from "./MobileMenu";
import { IoMdHeartEmpty } from "react-icons/io";
import { BsCart } from "react-icons/bs";
import { BiMenuAltRight } from "react-icons/bi";
import { VscChromeClose } from "react-icons/vsc";
import Menu from "./Menu ";
import HeaderLogo from "./HeaderLogo";

export default function Header() {
  let [showCategoryMenu, setshowCategoryMenu] = useState(false);
  let [mobileMemu, setmobileMemu] = useState(false);
  let [show, setsetShow] = useState("translate-y-0");
  let [lastScrolly, setlastScrolly] = useState(0);

  let controlNavbar = () => {
    if (window.scrollY > 200) {
      if (window.scrollY > lastScrolly && !mobileMemu) {
        setsetShow("-translate-y-[80px]");
      } else {
        setsetShow("shadow-sm");
      }
    } else {
      setsetShow("translate-y-0");
    }
    setlastScrolly(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrolly]);

  return (
    <>
      <header
        className={`w-full h-[50px] md:h-[80px]  bg-white flex justify-between items-center z-20 sticky top-0 
            transition-transform duration-300 ${show}`}
      >
        <Wrapper className="h-[60px] flex justify-between items-center">
          <Link href="/">
            <HeaderLogo />
            {/* <Image
              src="/logo.svg"
              width={100}
              height={100}
              className="w-[40px] md:w-[60px]"
              alt=""
            /> */}
          </Link>

          <Menu
            showCategoryMenu={showCategoryMenu}
            setshowCategoryMenu={setshowCategoryMenu}
          />

          {mobileMemu && (
            <MobileMenu
              showCategoryMenu={showCategoryMenu}
              setshowCategoryMenu={setshowCategoryMenu}
              setmobileMemu={setmobileMemu}
            />
          )}

          <div className="flex gap-2 items-center text-black">
            {/* Icon Start */}
            <Link href="/whishlist">
              <div
                className="w-8  w:md-12 h:md-12 h-8  rounded-full flex justify-center items-center 
                                    relative cursor-pointer hover:bg-black/[0.05]  gap-1"
              >
                <IoMdHeartEmpty className="text-[19px] md:text-[24px]" />
                <div
                  className="h-[14px] md:h-[18px] min-w-[14px] md:min-w-[18px] rounded-full
                            bg-red-600 absolute top-[-5px] left-[20px] text-white text-[10px] md:text-[12px] 
                              flex items-center justify-center px-[2px] md:px-[5px]"
                >
                  5
                </div>
              </div>
            </Link>
            {/* Icon End */}

            {/* Icon Start */}
            <Link href="/cart">
              <div
                className="w-8 h-8  w:md-12 h:md-12 rounded-full flex justify-center items-center 
                                    relative cursor-pointer hover:bg-black/[0.05]  gap-1"
              >
                <BsCart className="text-[15px] md:text-[20px]" />
                <div
                  className="h-[14px] md:h-[18px] min-w-[14px] md:min-w-[18px] rounded-full
                            bg-red-600 absolute top-[-5px] left-[20px] text-white text-[10px] md:text-[12px] 
                              flex items-center justify-center px-[2px] md:px-[5px]"
                >
                  5
                </div>
              </div>
            </Link>
            {/* Icon End */}

            {/* Mobile Icon Start */}
            <div
              className="w-8 h-8  w:md-12 h:md-12 rounded-full flex justify-center items-center 
                  relative cursor-pointer hover:bg-black/[0.05]  gap-1 md:hidden"
            >
              {mobileMemu ? (
                <VscChromeClose
                  className=" text-[20px]"
                  onClick={() => setmobileMemu(false)}
                />
              ) : (
                <BiMenuAltRight
                  className=" text-[20px]"
                  onClick={() => setmobileMemu(true)}
                />
              )}
            </div>
            {/* Mobile Icon End */}
          </div>
        </Wrapper>
      </header>
    </>
  );
}
