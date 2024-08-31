import Image from "next/image";
import Link from "next/link";
import pic from "@/public/p1.png";
export default function ProductCard({ item }) {
  return (
    <>
      <Link
        href="/product/1"
        className="transform duration-200 hover:scale-105 overflow-hidden bg-white  cursor-pointer border border-slate-300 rounded-lg"
      >
        <Image
          src={pic}
          alt={item?.foldernamepic[0]}
          className="rounded-md w-full"
        />
        <div className="py-3 p-3 flex justify-between flex-col gap-3">
          <h2 className="text-lg font-medium h-[50px]">{item?.productName}</h2>
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
    </>
  );
}
