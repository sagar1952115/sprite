import React from "react";
import { useSelector } from "react-redux";

const GoToRandom = ({ compId }) => {
  const activeSprite = useSelector((state) => state.spriteReducer.active);
  const handleClick = () => {
    const el = document.getElementById(`${activeSprite}-div`);

    el.style.position = "relative";
    const randomX = Math.random() * 500;
    const randomY = Math.random() * 500;

    console.log(randomX, randomY);

    el.style.left = `${randomX}px`;
    el.style.top = `${randomY}px`;
  };

  return (
    <div
      id={compId}
      className="flex items-center w-full p-2 font-light text-white bg-blue-500 border rounded-lg"
      onClick={handleClick}
    >
      go to random position
    </div>
  );
};

export default GoToRandom;
