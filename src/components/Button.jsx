import React from "react";
import { Link } from "react-router-dom";

const Button = ({
  text,
  bgColor,
  bgHoverColor,
  textColor,
  textHoverColor,
  outlineColor,
  link,
}) => {
  console.log(link);
  return (
    <Link to={link}>
      <button
        className={`w-48 outline outline-4 outline-${outlineColor} py-4 font-bold text-${textColor} bg-${bgColor} hover:text-${textHoverColor} hover:bg-${bgHoverColor}`}
      >
        {text}
      </button>
    </Link>
  );
};

export default Button;
