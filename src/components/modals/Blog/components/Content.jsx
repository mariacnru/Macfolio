import React from "react";
import { blogItems } from "../../../../constants";
import BlogCard from "./BlogCard";

function Content() {
  return (
    <div className="bg-[#1e1e1e] h-100 py-10 flex flex-col items-center overflow-y-auto project">
      <h3 className="text-rose-500 font-semibold mb-8">My Developer Blog</h3>

      <div className="space-y-5">
        {blogItems.map((item) => (
          <BlogCard key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
}

export default Content;
