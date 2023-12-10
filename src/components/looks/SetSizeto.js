import React, { useState } from "react";
import { useSelector } from "react-redux";

const SetSizeto = () => {
  const [editing, setEditing] = useState(false);
  const [percentage, setPercentage] = useState(100);
  const [inputWidth, setInputWidth] = useState("4");
  const activeSprite = useSelector((state) => state.spriteReducer.active);

  const handleClick = () => {
    // console.log(activeSprite);
    if (!editing) {
      const svgElement = document.getElementById(`${activeSprite}-svg`);

      const initialWidth = "95.17898101806641";
      const initialHeight = "100.04156036376953";

      const changedWidth = initialWidth * (percentage / 100);
      const changedheight = initialHeight * (percentage / 100);

      svgElement.setAttribute("width", changedWidth);
      svgElement.setAttribute("height", changedheight);
    }
  };
  return (
    <div
      onClick={handleClick}
      className="flex items-center w-full p-2 font-light text-white bg-purple-500 border rounded-lg"
    >
      <span className="pr-2 ">set size to</span>

      <input
        type="text"
        className="text-center text-black bg-white border rounded-full outline-none "
        placeholder=""
        onFocus={() => setEditing(true)}
        onBlur={() => setEditing(false)}
        value={percentage}
        style={{
          width: `${inputWidth}ch`,
        }}
        onChange={(e) => {
          setEditing(true);
          const inputValue = e.target.value.replace(/[^0-9-]/g, "");
          setPercentage(inputValue);
          if (inputValue.length > 2) setInputWidth(inputValue.length + 1);
          setEditing(false);
        }}
      />

      <span className="ml-2 px">%</span>
    </div>
  );
};

export default SetSizeto;
