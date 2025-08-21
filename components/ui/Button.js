import RightArrowSvg from "@/public/svgs/RightArrowSvg";
import React from "react";

const Button = ({ title, type = "button" }) => {
  return (
    <button
      type={type}
      className="relative bg-theme cursor-pointer text-white text-[20px] px-4 py-2 rounded-[10px] font-normal flex items-center justify-center gap-3 w-fit border border-theme overflow-hidden group"
    >
      <span className="relative z-10 flex items-center gap-2 transition-colors duration-500 group-hover:text-theme">
        <RightArrowSvg className="transition-colors duration-500 group-hover:stroke-theme" />
        {title}
      </span>

      <span className="absolute left-1/2 top-1/2 w-[50px] h-[50px] bg-white rounded-full -translate-x-1/2 -translate-y-1/2 scale-0 group-hover:scale-[8] transition-transform duration-500 ease-out z-0"></span>
    </button>
  );
};

export default Button;
