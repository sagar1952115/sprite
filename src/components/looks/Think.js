import React, { useState } from "react";
import { useSelector } from "react-redux";

const Think = ({ compId }) => {
  const [editing, setEditing] = useState(false);
  const [word, setWord] = useState("Hmm...");

  const [inputWidth, setInputWidth] = useState("8");

  const activeSprite = useSelector((state) => state.spriteReducer.active);

  const handleClick = () => {
    if (!editing) {
      const messageEle = document.getElementById(`${activeSprite}-message-box`);
      const thinkEle = document.getElementById(`${activeSprite}-think-box1`);

      messageEle.style.display = "block";
      messageEle.style.position = "relative";

      thinkEle.style.display = "block";
      thinkEle.style.position = "relative";

      messageEle.innerHTML = word;
    }
  };
  return (
    <div
      id={compId}
      onClick={handleClick}
      className="flex items-center w-full p-2 font-light text-white bg-purple-500 border rounded-lg"
    >
      <span className="pr-2 ">think</span>

      <input
        type="text"
        className="text-center text-black bg-white border rounded-full outline-none "
        placeholder=""
        onFocus={() => setEditing(true)}
        onBlur={() => setEditing(false)}
        value={word}
        style={{
          width: `${inputWidth}ch`,
        }}
        onChange={(e) => {
          setEditing(true);
          const inputValue = e.target.value;
          setWord(inputValue);
          if (inputValue.length > 2) setInputWidth(inputValue.length + 1);
          setEditing(false);
        }}
      />
    </div>
  );
};

export default Think;
