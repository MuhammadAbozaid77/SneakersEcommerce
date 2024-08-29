import Image from "next/image";
import Link from "next/link";
import pic from "@/public/p1.png";
export default function ProductCard() {
  return (
    <>
      <Link
        href="/product/1"
        className="transform duration-200 hover:scale-105 overflow-hidden bg-white  cursor-pointer"
      >
        <Image className="w-full rounded-md" src={pic} alt="" />
        <div className="py-3 p-3">
          <h2 className="text-lg font-medium"> Product 1 </h2>
          <div className="flex gap-3 items-center">
            <p className="font-semibold text-lg mr-2"> Details </p>
            <p className="font-medium text-base line-through"> 25.00 $ </p>
            <p className="ml-auto bg-green-500 p-2 rounded-md text-base">
              20% OFF
            </p>
          </div>
        </div>
      </Link>
    </>
  );
}
