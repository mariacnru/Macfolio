import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";

function BlogCard({ title, description, img }) {
  return (
    <div className="flex items-center w-96">
      <div className="">
        <img src={img} alt="" width={80} height={80}/>
      </div>
      <div className="space-y-2">
        <span className="text-xs">17 july</span>
        <h3 className="text-white text-sm">{title}</h3>
        <div className="text-blue-500 flex items-center text-xs hover:underline cursor-pointer">
          <p>Check out the full post</p> <MdKeyboardArrowRight size={15} />
        </div>
      </div>
    </div>
  );
}

export default BlogCard;
