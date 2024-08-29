"use client";
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
import pic1 from "@/public/p1.png";
import pic2 from "@/public/p2.png";
import pic3 from "@/public/p3.png";
import pic4 from "@/public/p4.png";
import pic5 from "@/public/p5.png";

export default function HomeProductCarosel() {
  return (
    <>
      <div>
        <Carousel
          autoPlay={true}
          infiniteLoop={true}
          showStatus={false}
          showThumbs={60}
          showIndicators={false}
          className="productCarousel"
        >
          <Image src={pic1} alt="" />
          <Image src={pic2} alt="" />
          <Image src={pic3} alt="" />
          <Image src={pic4} alt="" />
          <Image src={pic5} alt="" />
        </Carousel>
      </div>
    </>
  );
}
