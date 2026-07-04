import React, { useEffect, useRef, useState } from "react";
import { RiCloseLine } from "react-icons/ri";
import AboutMe from "./components/AboutMe";
import Works from "./components/Works/Works";
import Resume from "./components/Resume";

function Work({ works, setWorks, topZ }) {
  const modalRef = useRef();
  const [zIndex, setZIndex] = useState(10);
  const [activeTab, setActiveTab] = useState("about");

  useEffect(() => {
    if (works) {
      topZ.current += 1;
      setZIndex(topZ.current);
    }
  }, [works]);

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
        works ? "visible opacity-100 scale-100" : "invisible opacity-0 scale-0"
      } block md:flex transition-all text-gray-300 md:w-2xl absolute top-1/7 right-0 left-0 mx-5 md:mx-20 bg-white rounded-xl overflow-hidden border border-stone-700 shadow-xl`}
    >
      <nav className="md:hidden flex justify-between items-center bg-[#323137] py-2">
        <div className="hidden sm:flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-[#ff5f57]"></div>
          <div className="w-3 h-3 rounded-full bg-[#febc2e]"></div>
          <div className="w-3 h-3 rounded-full bg-[#28c840]"></div>
        </div>

        <ul className="text-sm *:flex *:items-center *:gap-2 *:hover:not-first:bg-gray-600 *:rounded-lg *:transition-colors cursor-pointer *:whitespace-nowrap">
          <li onClick={() => setActiveTab("about")}>
            <img src="/Macfolio/icons/info.svg" alt="" /> درباره من
          </li>
          <li onClick={() => setActiveTab("work")}>
            <img src="/Macfolio/icons/work.svg" alt="" /> نمونه کار ها
          </li>
          <li onClick={() => setActiveTab("resume")}>
            <img src="/Macfolio/icons/file.svg" alt="" /> رزومه
          </li>
        </ul>

        <div
          onClick={() => setWorks(false)}
          className="justify-self-end cursor-pointer"
        >
          <RiCloseLine />
        </div>
      </nav>

      <aside className="hidden md:inline w-45 bg-[#323137] px-3 py-4">
        <div className="flex items-center gap-2 mb-4 ml-2">
          <div className="w-3 h-3 rounded-full bg-[#ff5f57]"></div>
          <div className="w-3 h-3 rounded-full bg-[#febc2e]"></div>
          <div className="w-3 h-3 rounded-full bg-[#28c840]"></div>
        </div>

        <ul className="text-sm *:flex *:items-center *:gap-2 *:hover:not-first:bg-gray-600 *:p-2 *:rounded-lg *:transition-colors cursor-pointer">
          <li className="text-xs text-stone-500 font-semibold hover:bg-transparent">
            Favorites
          </li>
          <li onClick={() => setActiveTab("about")}>
            <img src="/Macfolio/icons/info.svg" alt="" /> درباره من
          </li>
          <li onClick={() => setActiveTab("work")}>
            <img src="/Macfolio/icons/work.svg" alt="" /> نمونه کار ها
          </li>
          <li onClick={() => setActiveTab("resume")}>
            <img src="/Macfolio/icons/file.svg" alt="" /> رزومه
          </li>
        </ul>

        <ul className="text-sm mt-2 *:flex *:items-center *:gap-2 *:hover:not-first:bg-gray-600 *:p-2 *:rounded-lg *:transition-colors cursor-pointer">
          <li className="text-xs text-stone-500 font-semibold">Projects</li>
          <li>
            <img src="/Macfolio/icons/file.svg" alt="" /> project 1
          </li>
          <li>
            <img src="/Macfolio/icons/file.svg" alt="" /> project 2
          </li>
          <li>
            <img src="/Macfolio/icons/file.svg" alt="" /> project 3
          </li>
        </ul>
      </aside>

      <div className="w-full h-90 md:h-112.5 bg-[#1e1e1e]">
        <header className="hidden md:grid grid-cols-2 p-2 border-b border-stone-700">
          <div className="">
            <p className="text-sm font-semibold">Work</p>
          </div>
          <div
            onClick={() => setWorks(false)}
            className="justify-self-end cursor-pointer"
          >
            <RiCloseLine />
          </div>
        </header>

        {activeTab === "work" && <Works />}
        {activeTab === "about" && <AboutMe />}
        {activeTab === "resume" && <Resume />}
      </div>
    </div>
  );
}

export default Work;
