import React, { useState } from "react";
import { useSelector } from "react-redux";

const ChangeSizeBy = () => {
  const [editing, setEditing] = useState(false);
  const [size, setSize] = useState(10);
  const [inputWidth, setInputWidth] = useState("3");
  const activeSprite = useSelector((state) => state.spriteReducer.active);
  const handleClick = () => {
    if (!editing) {
      const svgElement = document.getElementById(`${activeSprite}-svg`);
      let currentWidth = svgElement.getAttribute("width");
      let currentHeight = svgElement.getAttribute("height");

      // Convert width and height to integers
      currentWidth = parseInt(currentWidth);
      currentHeight = parseInt(currentHeight);

      // Increase the width and height by 10 pixels
      const newWidth = currentWidth + 10;
      const newHeight = currentHeight + 10;

      // Set the new width and height
      svgElement.setAttribute("width", newWidth);
      svgElement.setAttribute("height", newHeight);
    }
  };

  return (
    <div
      onClick={handleClick}
      className="flex items-center w-full p-2 font-light text-white bg-purple-500 border rounded-lg cursor-pointer"
    >
      <span className="pr-2 ">change size by</span>

      <input
        type="text"
        className="text-center text-black bg-white border rounded-full outline-none "
        placeholder=""
        onFocus={() => setEditing(true)}
        onBlur={() => setEditing(false)}
        value={size}
        style={{
          width: `${inputWidth}ch`,
        }}
        onChange={(e) => {
          setEditing(true);
          const inputValue = e.target.value.replace(/[^0-9-]/g, "");
          setSize(inputValue);
          if (inputValue.length > 2) setInputWidth(inputValue.length + 1);
          setEditing(false);
        }}
      />
    </div>
  );
};

export default ChangeSizeBy;
