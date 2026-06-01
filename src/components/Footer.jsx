import React from "react";
import { footerIcons } from "../constants";

function Footer({ setContactMe }) {
  return (
    <div className="h-fit w-fit absolute bottom-5 m-auto left-0 right-0 bg-white/20 backdrop-blur-3xl border border-white/20 px-7 py-1 rounded-2xl">
      <ul className="flex items-center *:hover:transform *:hover:-translate-y-5 *:transition-transform">
        <li>
          <img src="images/finder.png" alt="finder-icon" className="w-17" />
        </li>
        <li>
          <img src="images/safari.png" alt="safari-icon" className="w-17" />
        </li>
        <li>
          <img src="images/photos.png" alt="photos-icon" className="w-17" />
        </li>
        <li onClick={() => setContactMe(true)}>
          <img src="images/contact.png" alt="contact-icon" className="w-17" />
        </li>
        <li>
          <img src="images/terminal.png" alt="terminal-icon" className="w-17" />
        </li>
      </ul>
    </div>
  );
}

export default Footer;
