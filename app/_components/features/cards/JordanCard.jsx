"use client";
import Image from "next/image";
import Link from "next/link";
import { IoMdHeartEmpty } from "react-icons/io";
import { useState } from "react";

export default function JordanCard({ item }) {
  return (
    <>
      <div className="relative shadow border-gray-200 transform duration-200 hover:scale-105 overflow-hidden bg-white border rounded-lg flex justify-between flex-col p-1">
        <div className="absolute top-3 right-3 cursor-pointer w-[40px] h-[40px] flex justify-center items-center">
          <IoMdHeartEmpty size={50} />
        </div>
        {item?.foldernamepic?.[0] && (
          <Image
            src={item.foldernamepic[1] || ""}
            alt={item.foldernamepic[1] || ""}
            width={500} // Replace with the appropriate width
            height={500} // Replace with the appropriate height
            className="rounded-md w-full min-h-auto min-h-[300px]"
          />
        )}
        <Link href="/pages/categories/jordans/1">
          <div className="py-3 p-3 flex justify-between flex-col gap-1">
            <h2 className="text-lg font-medium min-h-[50px] overflow-hidden">
              {item?.productName}
            </h2>
            <div className="flex gap-1 items-center">
              <p className="font-medium text-base line-through">
                {item?.productPrice} $
              </p>
              <p className="ml-auto bg-green-500 p-1 rounded-md text-base">
                20% OFF
              </p>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
}
