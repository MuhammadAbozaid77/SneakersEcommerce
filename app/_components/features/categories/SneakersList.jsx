import GridLayout from "../../ui/GridLayout";
import ProductCard from "../cards/ProductCard";
import { getSneakersDataWithImages } from "@/app/_data/_api/sneakers";

export default async function SneakersList() {
  const data = await getSneakersDataWithImages();

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
