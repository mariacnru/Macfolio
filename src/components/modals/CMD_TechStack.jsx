import React, { useEffect, useRef, useState } from "react";
import { FaCheck } from "react-icons/fa";
import { RiCloseLine } from "react-icons/ri";

function CMD_TechStack({ techStack, setTechStack, topZ }) {
  const modalRef = useRef();
   const [zIndex, setZIndex] = useState(10);

   useEffect(() => {
     if (techStack) {
       topZ.current += 1;
       setZIndex(topZ.current);
     }
   }, [techStack]);

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
        techStack
          ? "visible opacity-100 scale-100"
          : "invisible opacity-0 scale-0"
      } transition-all text-gray-300 w-2xl absolute top-15 right-5 bg-white rounded-xl overflow-hidden border border-stone-700 shadow-xl`}
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
          onClick={() => setTechStack(false)}
          className="justify-self-end cursor-pointer"
        >
          <RiCloseLine />
        </div>
      </header>
      <div className="bg-[#1e1e1e] p-5 space-y-5">
        <p className="text-sm">
          <span className="font-semibold">@maryam</span> % show techstack
        </p>

        <div className="">
          <div className="grid grid-cols-2 border-b-2 border-dashed border-stone-200 pb-3">
            <span className="">Category</span>
            <span className="">Technologies</span>
          </div>

          <div className="grid grid-cols-2 pt-3 text-sm border-b-2 border-dashed border-stone-200 pb-3">
            <div className="*:block space-y-1 text-[#2dd987]">
              <span>Frontend</span>
              <span>Styling</span>
              <span>Database</span>
              <span>Dev Tools</span>
            </div>
            <div className="*:block space-y-1">
              <span>JavaScript, React, TypeScript</span>
              <span>Tailwind, CSS</span>
              <span>Firebase, Familiar with MySQL</span>
              <span>Git, GitHub, Postman</span>
            </div>
          </div>
        </div>

        <div className="text-sm">
          <p className="text-[#2dd987]">
            5 of 5 stacks loaded successfuly (100%)
          </p>
          <p className="pt-1">Render time: 6ms</p>
        </div>
      </div>
    </div>
  );
}

export default CMD_TechStack;
