import React, { useMemo } from "react";
import dayjs from "dayjs";
import { navLinks, navIcons } from "../constants";

function Navbar() {
  const currentTime = useMemo(() => dayjs().format("ddd MMM D h:mm A"), []);

  return (
    <nav className="flex items-center justify-between px-5 py-3">
      <div className="flex items-center gap-5">
        <img src="/images/logo.svg" alt="logo" width={15} height={15} />

        <p className="font-bold text-sm">Maryam's Portfolio</p>

        <ul className="hidden md:flex items-center gap-5">
          {navLinks.map(({ id, name }) => (
            <li key={id}>{name}</li>
          ))}
        </ul>
      </div>

      <div className="hidden md:flex items-center gap-5">
        <ul className="flex items-center gap-3">
          {navIcons.map(({ id, img }) => (
            <li key={id}>
              <img
                src={img}
                alt={`icon-${id}`}
                width={15}
                height={15}
                loading="lazy"
              />
            </li>
          ))}
        </ul>

        <time>{currentTime}</time>
      </div>
    </nav>
  );
}

export default React.memo(Navbar);
