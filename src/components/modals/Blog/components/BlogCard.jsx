import React, { memo, useState } from "react";
import { MdKeyboardArrowDown, MdKeyboardArrowLeft } from "react-icons/md";

function BlogCard({ title, description, img }) {
  const [open, setOpen] = useState(false);

  return (
    <article
      dir="rtl"
      className={`w-full max-w-md p-3 rounded-lg hover:bg-[#2a2a2a] transition-colors duration-200 ${open ? "bg-[#2a2a2a]" : "bg-transparent"}`}
    >
      <div className="flex items-start gap-4">
        <div className="w-20 h-20 rounded-md overflow-hidden shrink-0 bg-[#2c2c2c]">
          <img
            src={img}
            alt={title}
            loading="lazy"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="flex flex-col gap-2 flex-1 min-w-0">
          <span className="text-xs text-zinc-400">Today</span>

          <h3 className="text-white text-sm font-medium line-clamp-2">
            {title}
          </h3>

          <button
            onClick={() => setOpen(!open)}
            className="text-blue-500 flex items-center text-xs hover:underline w-fit cursor-pointer"
          >
            {open ? "بستن جزئیات" : "مشاهده کامل پست"}
            {open ? (
              <MdKeyboardArrowDown size={15} />
            ) : (
              <MdKeyboardArrowLeft size={15} />
            )}
          </button>
        </div>
      </div>

      {open && (
        <div className="mt-4 pl-24">
          <p className="text-zinc-400 text-xs leading-6 whitespace-pre-line">
            {description}
          </p>
        </div>
      )}
    </article>
  );
}

export default memo(BlogCard);
