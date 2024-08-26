import { links } from "@/helps/navbarLinks";
import Link from "next/link";

export default function Header() {
  return (
    <>
      <ul className="flex justify-center items-center gap-1">
        {links?.map((el, index) => (
          <li key={index} className="border p-2 rounded shadow">
            <Link className="capitalize text-[18px]" href={`/${el?.path}`}>
              {el?.name}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
