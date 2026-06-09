import React, { useEffect, useRef, useState } from "react";
import Header from "./components/Header";
import Content from "./components/Content";

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
      <Header setBlog={setBlog} />
      <Content />
    </div>
  );
}

export default Blog;
