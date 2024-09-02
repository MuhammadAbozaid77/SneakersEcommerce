import { getFootballShoesDataWithImages } from "@/app/_data/_api/footballshoes";
import GridLayout from "../../ui/GridLayout";
import ProductCard from "../cards/ProductCard";

export default async function FootballShoesList() {
  const data = await getFootballShoesDataWithImages();

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
