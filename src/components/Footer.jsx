import React from "react";
import { footerIcons } from "../constants";

function Footer() {
  return (
    <div className="h-fit w-fit absolute bottom-5 m-auto left-0 right-0 bg-white/20 backdrop-blur-3xl border border-white/20 px-7 py-1 rounded-2xl">
      <ul className="flex items-center *:hover:transform *:hover:-translate-y-5 *:transition-transform">
        {footerIcons.map(({ id, img }) => (
          <li key={id}>
            <img src={img} alt="" className="w-17" />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Footer;
