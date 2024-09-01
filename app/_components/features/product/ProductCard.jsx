"use client";
import Image from "next/image";
import Link from "next/link";
import pic from "@/public/p1.png";
import { IoMdHeartEmpty } from "react-icons/io";
import { useState } from "react";

export default function ProductCard({ item }) {
  // const [whishListArray, setWhishListArray] = useState([]);
  // const handelWhishlist = () => {
  //   setWhishListArray((prev) => whishListArray?.push(item));
  //   console.log("whishListArray", whishListArray);
  // };

  return (
    <>
      <div className="relative transform duration-200 hover:scale-105 overflow-hidden bg-white border border-slate-300 rounded-lg">
        <div
          // onClick={handelWhishlist}
          className="absolute top-3 right-3  cursor-pointer w-[40px] h-[40px] flex justify-center items-center"
        >
          <IoMdHeartEmpty size={50} />
        </div>
        <Image
          src={pic}
          alt={item?.foldernamepic?.[0]}
          className="rounded-md w-full"
        />
        <Link href="/product/1">
          <div className="py-3 p-3 flex justify-between flex-col gap-3">
            <h2 className="text-lg font-medium h-[50px]">
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
