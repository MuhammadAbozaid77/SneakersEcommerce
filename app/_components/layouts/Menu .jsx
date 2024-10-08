"use client";
import React from "react";
import { data, subMenuData } from "@/helps/navbarLinks";
import Link from "next/link";
import { BsChevronDown } from "react-icons/bs";

export default function Menu({ setshowCategoryMenu, showCategoryMenu }) {
  return (
    <>
      <ul className="hidden md:flex justify-center items-center font-medium gap-8 text-black">
        {data.map((item) => {
          return (
            <React.Fragment key={item.id}>
              {!!item?.subMenu ? (
                // If SubMenu exists --------------------------------------------
                <li
                  className="cursor-pointer relative flex items-center gap-2"
                  onMouseEnter={() => setshowCategoryMenu(true)}
                  onMouseLeave={() => setshowCategoryMenu(false)}
                >
                  {item.name}
                  <BsChevronDown size={14} />
                  {showCategoryMenu && (
                    <ul className="bg-white p-1 absolute top-6 left-0 min-w-[250px] text-black shadow-lg">
                      {subMenuData.map((submenu) => {
                        return submenu?.path ? (
                          // Render as Link if path exists
                          <Link
                            key={submenu.id}
                            href={submenu.path}
                            onClick={() => setshowCategoryMenu(true)}
                          >
                            <li
                              className="h-12 px-3 flex justify-between items-center 
                                rounded-md hover:bg-black/[0.03]"
                            >
                              {submenu.name}
                              <span className="opacity-50 text-sm">22</span>
                            </li>
                          </Link>
                        ) : (
                          // Render as plain list item if no path
                          <li
                            key={submenu.id}
                            className="h-12 px-3 flex justify-between items-center 
                              rounded-md hover:bg-black/[0.03]"
                          >
                            {submenu.name}
                            <span className="opacity-50 text-sm">22</span>
                          </li>
                        );
                      })}
                    </ul>
                  )}
                </li>
              ) : (
                // If No SubMenu ---------------------------------
                <li className="cursor-pointer">
                  <Link href={item?.url}>{item.name}</Link>
                </li>
              )}
            </React.Fragment>
          );
        })}
      </ul>
    </>
  );
}
