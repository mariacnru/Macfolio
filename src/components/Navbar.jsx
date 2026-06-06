import React from "react";
import dayjs from "dayjs";
import { navLinks, navIcons } from "../constants";

function Navbar() {
  return (
    <nav>
      <div className="">
        <img src="/public/images/logo.svg" alt="logo" />
        <p className="font-bold text-sm">Maryam's Portfolio</p>

        <ul>
          {navLinks.map(({ id, name }) => (
            <li key={id}>{name}</li>
          ))}
        </ul>
      </div>

      <div className="hidden md:flex">
        <ul>
          {navIcons.map(({ id, img }) => (
            <li key={id}>
              <img src={img} alt={`icon-${id}`} />
            </li>
          ))}
        </ul>

        <time>{dayjs().format("ddd MMM D h:mm A")}</time>
      </div>
    </nav>
  );
}

export default Navbar;
