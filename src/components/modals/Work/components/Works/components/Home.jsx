import React from "react";

function Home() {
  return (
    <ul className="*:flex *:flex-col *:items-center *:text-sm text-white relative">
      <li
        onClick={() => setActiveTab("cms")}
        className="absolute top-2 left-5 hover:scale-95 transition-transform cursor-pointer"
      >
        <img src="/images/folder.png" alt="folder-icon" />
        <span>Project 1 (CMS)</span>
      </li>
      <li
        onClick={() => setActiveTab("news_magazine")}
        className="absolute top-70 left-10 hover:scale-95 transition-transform cursor-pointer"
      >
        <img src="/images/folder.png" alt="folder-icon" />
        <span className="text-center">
          Project 2 <br /> (News Magazine Landing Page)
        </span>
      </li>
      <li
        onClick={() => setActiveTab("cms2")}
        className="absolute top-30 right-5 hover:scale-95 transition-transform cursor-pointer"
      >
        <img src="/images/folder.png" alt="folder-icon" />
        <span>Project 3 (CMS)</span>
      </li>
      <li
        onClick={() => setActiveTab("personal_website")}
        className="absolute top-20 right-1/3 hover:scale-95 transition-transform cursor-pointer"
      >
        <img src="/images/folder.png" alt="folder-icon" />
        <span>Project 4 (Personal Website)</span>
      </li>
    </ul>
  );
}

export default Home;
