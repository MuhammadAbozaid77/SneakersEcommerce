import ShowUsers from "./ShowUsers";

export default async function Home() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  return (
    <>
      <div>
        <ShowUsers data={data} />
      </div>
    </>
  );
}
