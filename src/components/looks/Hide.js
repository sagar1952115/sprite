import React from "react";
import { useSelector } from "react-redux";

const Hide = () => {
  const activeSprite = useSelector((state) => state.spriteReducer.active);

  const handleClick = () => {
    const messageEle = document.getElementById(`${activeSprite}-message-box`);
    const thinkEle = document.getElementById(`${activeSprite}-think-box1`);
    const el = document.getElementById(activeSprite);
    el.style.display = "none";
    messageEle.style.display = "none";
    thinkEle.style.display = "none";
  };
  return (
    <div
      onClick={handleClick}
      className="flex items-center w-full p-2 font-light text-white bg-purple-500 border rounded-lg cursor-pointer"
    >
      Hide
    </div>
  );
};

export default Hide;
