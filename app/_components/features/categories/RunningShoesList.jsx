import GridLayout from "../../ui/GridLayout";
import ProductCard from "../cards/ProductCard";
import { getRunningShoesDataWithImages } from "@/app/_data/_api/runningshoes";

export default async function RunningShoesList() {
  const data = await getRunningShoesDataWithImages();

  return (
    <>
      <GridLayout item={data}>
        {data?.map((item, index) => (
          <ProductCard key={index} item={item} />
        ))}
      </GridLayout>
    </>
  );
}
