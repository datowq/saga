import React from "react";

const ScrollButton = ({
  text,
  bgColor,
  bgHoverColor,
  textColor,
  textHoverColor,
  outlineColor,
  outlineHoverColor,
  link,
}) => {
  console.log(link);
  return (
    <a href={link}>
      <button
        className={`w-48 outline outline-4 outline-${outlineColor} py-4 font-bold text-${textColor} bg-${bgColor} hover:text-${textHoverColor} hover:bg-${bgHoverColor} hover:outline-${outlineHoverColor}`}
      >
        {text}
      </button>
    </a>
  );
};

export default ScrollButton;
