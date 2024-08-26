"use client";
export default function ShowUsers({ data }) {
  return (
    <div>
      <ul className="p-5 border rounded shadow bg-gray-100">
        {data?.length > 0 &&
          data?.map((el, index) => <li key={index}> {el.name} </li>)}
      </ul>
    </div>
  );
}
