import { getJordanDataWithImages } from "@/app/_data/_api/jordan";
import GridLayout from "../../ui/GridLayout";
import JordanCard from "../cards/JordanCard";

export default async function JordanList() {
  const data = await getJordanDataWithImages();

  return (
    <>
      <GridLayout item={data}>
        {data?.map((item, index) => (
          <JordanCard key={index} item={item} />
        ))}
      </GridLayout>
    </>
  );
}
