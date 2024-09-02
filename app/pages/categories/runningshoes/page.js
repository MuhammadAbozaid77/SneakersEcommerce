import RunningShoesList from "@/app/_components/features/categories/RunningShoesList";
import SpinnerLoading from "@/app/_components/ui/SpinnerLoading";
import Wrapper from "@/app/_components/ui/Wrapper";
import { getRunningShoesDataWithImages } from "@/app/_data/_api/runningshoes";
import { Suspense } from "react";

export const metadata = {
  title: "RunningShoes",
};

export default async function RunningShoes() {
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

        {/* Jordan List Start */}
        <Suspense fallback={<SpinnerLoading />}>
          <RunningShoesList />
        </Suspense>
        {/* Jordan List End */}
      </Wrapper>
    </>
  );
}
