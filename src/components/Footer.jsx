import React from "react";
import { footerIcons } from "../constants";

function Footer({ setContactMe, setTechStack, setWorks }) {
  return (
    <div className="h-fit w-fit absolute bottom-5 m-auto left-0 right-0 bg-white/20 backdrop-blur-3xl border border-white/20 px-7 py-1 rounded-2xl">
      <ul className="flex items-center *:hover:transform *:hover:-translate-y-5 *:transition-transform *:cursor-pointer">
        <li
          onClick={() => setWorks(true)}
          className="flex flex-col items-center"
        >
          <img src="images/finder.png" alt="finder-icon" className="w-17" />
          <p className="text-[10px] text-stone-100">Work</p>
        </li>
        <li className="flex flex-col items-center">
          <img src="images/safari.png" alt="safari-icon" className="w-17" />
          <p className="text-[10px] text-stone-100">Blog</p>
        </li>
        <li className="flex flex-col items-center">
          <img src="images/photos.png" alt="photos-icon" className="w-17" />
          <p className="text-[10px] text-stone-100">Gallery</p>
        </li>
        <li
          onClick={() => setContactMe(true)}
          className="flex flex-col items-center"
        >
          <img src="images/contact.png" alt="contact-icon" className="w-17" />
          <p className="text-[10px] text-stone-100">Contact Me</p>
        </li>
        <li
          onClick={() => setTechStack(true)}
          className="flex flex-col items-center"
        >
          <img src="images/terminal.png" alt="terminal-icon" className="w-17" />
          <p className="text-[10px] text-stone-100">Tech Stack</p>
        </li>
      </ul>
    </div>
  );
}

export default Footer;
