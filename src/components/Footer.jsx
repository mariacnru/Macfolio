import React from "react";
import { footerIcons } from "../constants";

function Footer({ setContactMe, setTechStack, setWorks }) {
  const handleClick = (action) => {
    if (action === "works") setWorks(true);

    if (action === "contact") setContactMe(true);

    if (action === "tech") setTechStack(true);
  };

  return (
    <div
      className="
        absolute
        bottom-5
        left-1/2
        -translate-x-1/2
        w-fit
        bg-white/20
        backdrop-blur-md
        border
        border-white/20
        px-3
        sm:px-5
        py-2
        rounded-2xl
      "
    >
      <ul className="flex items-end gap-1 sm:gap-2">
        {footerIcons.map(({ id, title, img, action }) => (
          <li
            key={id}
            onClick={() => handleClick(action)}
            className="
              flex
              flex-col
              items-center
              cursor-pointer
              transition-transform
              duration-200
              hover:-translate-y-2
            "
          >
            <img
              src={img}
              alt={`${title}-icon`}
              width={68}
              height={68}
              loading="lazy"
              className="w-12 sm:w-16"
            />

            <p className="text-[10px] text-stone-100 mt-1">{title}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default React.memo(Footer);
