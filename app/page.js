import HomeProductCarosel from "./_components/features/home/HomeProductCarosel";
import HomeProductShow from "./_components/features/home/HomeProductShow";
import HeroBanner from "./_components/features/home/HeroBanner";
import ShowUsers from "./ShowUsers";

export default async function Home() {
  return (
    <>
      <HeroBanner />
      {/* <HomeProductCarosel /> */}
      <HomeProductShow />
    </>
  );
}

{
  /* <ShowUsers data={data} /> */
}
// const res = await fetch("https://jsonplaceholder.typicode.com/users");
// const data = await res.json();
