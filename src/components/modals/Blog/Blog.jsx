import React, { useEffect, useRef, useState } from "react";
import { RiCloseLine } from "react-icons/ri";

function Blog({ blog, setBlog, topZ }) {
  const modalRef = useRef();
  const [zIndex, setZIndex] = useState(10);

  useEffect(() => {
    if (blog) {
      topZ.current += 1;
      setZIndex(topZ.current);
    }
  }, [blog]);

  const bringToFront = () => {
    topZ.current += 1;

    modalRef.current.style.zIndex = topZ.current;
  };

  return (
    <div
      ref={modalRef}
      onClick={bringToFront}
      style={{ zIndex }}
      className={`${
        blog ? "visible opacity-100 scale-100" : "invisible opacity-0 scale-0"
      } 
        transition-all
        text-gray-300
        w-[90dvw]
        md:w-2xl
        absolute
        top-1/7
        left-1/2
        -translate-x-1/2
        md:left-auto
        md:translate-x-0
        md:top-25
        md:right-15
        bg-white
        rounded-xl
        overflow-hidden
        border
        border-stone-700
        shadow-xl`}
    >
      <header className="grid grid-cols-3 px-1.5 py-2 bg-[#3f4042]">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded-full bg-[#ff5f57]"></div>
          <div className="w-4 h-4 rounded-full bg-[#febc2e]"></div>
          <div className="w-4 h-4 rounded-full bg-[#28c840]"></div>
        </div>
        <div className="justify-self-center">
          <p className="text-sm font-semibold">Tech Stack</p>
        </div>
        <div
          onClick={() => setBlog(false)}
          className="justify-self-end cursor-pointer"
        >
          <RiCloseLine />
        </div>
      </header>
    </div>
  );
}

export default Blog;
