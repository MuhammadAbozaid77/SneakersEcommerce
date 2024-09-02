"use client";
import "react-multi-carousel/lib/styles.css";
import ProductCard from "../cards/ProductCard";
import Wrapper from "../../ui/Wrapper";
import GridLayout from "../../ui/GridLayout";

export default function HomeProductShow() {
  return (
    <>
      <Wrapper>
        {/* Heading And Pargraph Start */}
        <div className="max-w-[800px] mx-auto text-center my-[50px] md:my-[80px]">
          <div className="text-[28px] md:text-[34px] font-semibold mb-5 leading-tight">
            Sneakers. We Did It.
          </div>
          <div className="text-md md:text-xl">
            Sneakers delivers innovative products, experiences and services to
            inspire athletes.
          </div>
        </div>
        {/* Heading And Pargraph End */}

        <GridLayout>
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </GridLayout>
      </Wrapper>
    </>
  );
}
