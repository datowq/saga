import React from "react";
import { Link } from "react-router-dom";

const SquareButton = ({ text, link }) => {
  console.log(link);
  return (
    <Link to={link}>
      <button
        className={`outline outline-4 outline-grey w-10 h-10 font-bold text-beige bg-grey hover:text-grey hover:bg-beige active:bg-beige active:text-grey`}
      >
        {text}
      </button>
    </Link>
  );
};

export default SquareButton;
