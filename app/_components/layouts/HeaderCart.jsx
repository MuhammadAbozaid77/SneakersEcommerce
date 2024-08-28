import { BiMenuAltRight } from "react-icons/bi";
import { IoHeartOutline, IoCartOutline } from "react-icons/io5";

export default function HeaderCart() {
  return (
    <>
      <div className="flex  justify-center items-center gap-4">
        <div className="h-[40px] flex justify-center items-center relative">
          <IoHeartOutline size={35} />
          <span className="headerCartIconSpan">1</span>
        </div>
        <div className="h-[40px] flex justify-center items-center relative">
          <IoCartOutline size={35} />
          <span className="headerCartIconSpan">1</span>
        </div>
        <div className="h-[40px]  justify-center items-center md:hidden flex">
          <BiMenuAltRight size={35} />
        </div>
      </div>
    </>
  );
}
