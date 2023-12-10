import React, { useState } from "react";
import { useSelector } from "react-redux";

const GoToXY = () => {
  const [editing, setEditing] = useState(false);
  const [x, setX] = useState("50");
  const [y, setY] = useState("50");
  const [inputWidthx, setInputWidthx] = useState("3");
  const [inputWidthy, setInputWidthy] = useState("3");
  const activeSprite = useSelector((state) => state.spriteReducer.active);

  const handleClick = () => {
    if (!editing) {
      const el = document.getElementById(`${activeSprite}-div`);
      el.style.position = "relative";

      el.style.left = `${x}px`;
      el.style.top = `${y}px`;
    }
  };

  return (
    <div
      className="flex items-center w-full p-2 font-light text-white bg-blue-500 border rounded-lg"
      onClick={handleClick}
    >
      <span className="pr-2">got to x: </span>

      <input
        type="text"
        className="text-center text-black bg-white border rounded-full outline-none "
        placeholder=""
        onFocus={() => setEditing(true)}
        onBlur={() => setEditing(false)}
        value={x}
        style={{
          width: `${inputWidthx}ch`,
        }}
        onChange={(e) => {
          setEditing(true);
          const inputValue = e.target.value.replace(/[^0-9-]/g, "");
          setX(inputValue);
          if (inputValue.length > 2) setInputWidthx(inputValue.length + 1);
          setEditing(false);
        }}
      />

      <span className="px-2 ml-2">y:</span>
      <input
        type="text"
        className="text-center text-black bg-white border rounded-full outline-none "
        placeholder=""
        onFocus={() => setEditing(true)}
        onBlur={() => setEditing(false)}
        value={y}
        style={{
          width: `${inputWidthy}ch`,
        }}
        onChange={(e) => {
          setEditing(true);
          const inputValue = e.target.value.replace(/[^0-9-]/g, "");
          setY(inputValue);
          if (inputValue.length > 2) setInputWidthy(inputValue.length + 1);
          setEditing(false);
        }}
      />
    </div>
  );
};

export default GoToXY;
