import React from "react";
import { RiCloseLine, RiSearch2Line } from "react-icons/ri";

function Header({ setBlog }) {
  return (
    <header className="grid grid-cols-3 px-1.5 py-2 bg-[#222433]">
      <div className="flex items-center gap-2">
        <div className="w-4 h-4 rounded-full bg-[#ff5f57]"></div>
        <div className="w-4 h-4 rounded-full bg-[#febc2e]"></div>
        <div className="w-4 h-4 rounded-full bg-[#28c840]"></div>
      </div>
      <div className="flex items-center gap-2 justify-self-center">
        <p className="text-sm font-semibold text-nowrap">Blog</p>
      </div>
      <div
        onClick={() => setBlog(false)}
        className="flex justify-center items-center justify-self-end cursor-pointer"
      >
        <RiCloseLine />
      </div>
    </header>
  );
}

export default Header;
