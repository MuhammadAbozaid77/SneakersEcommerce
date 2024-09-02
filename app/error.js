"use client";
export default function Error({ error }) {
  return (
    <>
      <div className="flex flex-col gap-2 items-center justify-center h-[200px]">
        <span> {error.message} </span>
      </div>
    </>
  );
}
