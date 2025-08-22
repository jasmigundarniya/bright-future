import React from "react";

const LinkedInSvg = () => {
  return (
    <div className="group">
      <svg
        width="45"
        height="45"
        viewBox="0 0 45 45"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="0.5"
          y="0.5"
          width="44"
          height="44"
          rx="9.5"
          className="fill-[#F7B529] stroke-[#F7B529] group-hover:fill-white  transition-all duration-1000"
        />
        <rect
          x="0.5"
          y="0.5"
          width="44"
          height="44"
          rx="9.5"
          stroke="#F7B529"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M34.6875 34.6875H29.8125V26.1574C29.8125 23.8174 28.7802 22.5119 26.9289 22.5119C24.9143 22.5119 23.7188 23.8723 23.7188 26.1574V34.6875H18.8438V18.8438H23.7188V20.6255C23.7188 20.6255 25.2483 17.9416 28.6949 17.9416C32.1427 17.9416 34.6875 20.0456 34.6875 24.3989V34.6875ZM13.2887 16.3098C11.6446 16.3098 10.3125 14.9669 10.3125 13.3106C10.3125 11.6555 11.6446 10.3125 13.2887 10.3125C14.9316 10.3125 16.2637 11.6555 16.2637 13.3106C16.2649 14.9669 14.9316 16.3098 13.2887 16.3098ZM10.3125 34.6875H16.4062V18.8438H10.3125V34.6875Z"
          className="fill-white group-hover:fill-[#F7B529]  transition-all duration-1000"
        />
      </svg>
    </div>
  );
};

export default LinkedInSvg;
