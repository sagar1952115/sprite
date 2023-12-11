import React, { useState } from "react";
import { useSelector } from "react-redux";

const MotionX = ({ compId }) => {
  const [editing, setEditing] = useState(false);
  const [steps, setSteps] = useState(10);
  const [inputWidth, setInputWidth] = useState("3");
  const activeSprite = useSelector((state) => state.spriteReducer.active);
  const handleClick = () => {
    // console.log(activeSprite);
    const buttonEle = document.getElementById(compId);
    const buttonId = buttonEle.parentElement.parentElement.id;
    // && buttonId !== "mid-area-action"
    if (!editing) {
      const el = document.getElementById(`${activeSprite}-div`);

      var left = el.offsetLeft;
      el.style.position = "relative";
      el.style.left = `${left + parseInt(steps)}px`;
    }
  };

  return (
    <div
      className="flex items-center w-full p-2 font-light text-white bg-blue-500 border rounded-lg cursor-pointer pointer"
      onClick={handleClick}
      id={compId}
    >
      <span className="pr-2 ">move</span>

      <input
        type="text"
        className="text-center text-black bg-white border rounded-full outline-none "
        placeholder=""
        onFocus={() => setEditing(true)}
        onBlur={() => setEditing(false)}
        value={steps}
        style={{
          width: `${inputWidth}ch`,
        }}
        onChange={(e) => {
          setEditing(true);
          const inputValue = e.target.value.replace(/[^0-9-]/g, "");
          setSteps(inputValue);
          if (inputValue.length > 2) setInputWidth(inputValue.length + 1);
          setEditing(false);
        }}
      />

      <span className="px-2 ml-2">steps</span>
    </div>
  );
};

export default MotionX;
