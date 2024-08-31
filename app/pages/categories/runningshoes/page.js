import ProductCard from "@/app/_components/features/product/ProductCard";
import GridLayout from "@/app/_components/ui/GridLayout";
import Wrapper from "@/app/_components/ui/Wrapper";
import { getRunningShoesDataWithImages } from "@/app/_data/_api/runningshoes";

export const metadata = {
  title: "RunningShoes",
};

export default async function RunningShoes() {
  const data = await getRunningShoesDataWithImages();

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

        <GridLayout item={data}>
          {data?.map((item, index) => (
            <ProductCard key={index} item={item} />
          ))}
        </GridLayout>
      </Wrapper>
    </>
  );
}
