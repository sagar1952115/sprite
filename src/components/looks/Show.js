import React from "react";
import { useSelector } from "react-redux";

const Show = ({ compId }) => {
  const activeSprite = useSelector((state) => state.spriteReducer.active);
  const handleClick = () => {
    const el = document.getElementById(activeSprite);
    el.style.display = "inline-block";
  };
  return (
    <div
      id={compId}
      onClick={handleClick}
      className="flex items-center w-full p-2 font-light text-white bg-purple-500 border rounded-lg cursor-pointer"
    >
      Show
    </div>
  );
};

export default Show;
