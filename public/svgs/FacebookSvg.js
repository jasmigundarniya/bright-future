import React from "react";

function FacebookSvg() {
  return (
    <div className="group">
      <svg
        width="45"
        height="45"
        viewBox="0 0 45 45"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Background with hover effect */}
        <rect
          x="0.5"
          y="0.5"
          width="44"
          height="44"
          rx="9.5"
          className="fill-[#F7B529] stroke-[#F7B529] group-hover:fill-white  transition-all duration-1000"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M24.7197 34.6875V23.7188H28.0498L28.5938 18.8438H24.7197V16.4693C24.7197 15.214 24.7518 13.9688 26.5059 13.9688H28.2826V10.4833C28.2826 10.4309 26.7565 10.3125 25.2125 10.3125C21.9881 10.3125 19.9691 12.3322 19.9691 16.0409V18.8438H16.4062V23.7188H19.9691V34.6875H24.7197Z"
          className="fill-white group-hover:fill-[#F7B529] transition-all duration-1000"
        />
      </svg>
    </div>
  );
}

export default FacebookSvg;
