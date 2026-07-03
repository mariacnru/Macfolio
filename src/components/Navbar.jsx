import React, { useMemo } from "react";
import dayjs from "dayjs";
import { navIcons } from "../constants";

function Navbar({ setContactMe, setWorks }) {
  const currentTime = useMemo(() => dayjs().format("ddd MMM D h:mm A"), []);

  return (
    <nav className="flex items-center justify-between px-5 py-2">
      <div className="flex items-center gap-5">
        <img
          src="/Macfolio/images/logo.svg"
          alt="logo"
          width={15}
          height={15}
        />

        <p className="font-bold text-sm">Maryam's Portfolio</p>

        <ul className="hidden md:flex items-center gap-5">
          <li onClick={() => setWorks(true)}>Portfolio</li>
          <li onClick={() => setContactMe(true)}>Contact</li>
        </ul>
      </div>

      <div className="hidden md:flex items-center gap-5">
        <ul className="flex items-center gap-3">
          {navIcons.map(({ id, img }) => (
            <li key={id}>
              <img
                src={`/Macfolio${img}`}
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
