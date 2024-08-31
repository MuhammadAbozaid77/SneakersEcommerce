"use client";
export default function GridLayout({ children }) {

  return (
    <>
      <div className="grid grid-cols md:grid-cols-2 lg:grid-cols-4 gap-5 my-14 px-5">
        {children}
      </div>
    </>
  );
}
