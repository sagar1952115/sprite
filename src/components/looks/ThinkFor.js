import React, { useState } from "react";
import { useSelector } from "react-redux";

const ThinkFor = () => {
  const [editing, setEditing] = useState(false);
  const [word, setWord] = useState("Hello!");
  const [duration, setDuration] = useState(2);
  const [inputWidthWord, setInputWidthWord] = useState("8");
  const [inputWidthDuration, setInputWidthDuration] = useState("3");
  const activeSprite = useSelector((state) => state.spriteReducer.active);

  const handleClick = () => {
    console.log(activeSprite);
    if (!editing) {
      const messageEle = document.getElementById(`${activeSprite}-message-box`);
      const thinkEle = document.getElementById(`${activeSprite}-think-box1`);

      messageEle.style.display = "block";
      messageEle.style.position = "relative";

      thinkEle.style.display = "block";
      thinkEle.style.position = "relative";

      messageEle.innerHTML = word;
      window.setTimeout(() => {
        messageEle.style.display = "none";
        thinkEle.style.display = "none";
      }, duration * 1000);
    }
  };
  return (
    <div
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
          width: `${inputWidthWord}ch`,
        }}
        onChange={(e) => {
          setEditing(true);
          const inputValue = e.target.value;
          setWord(inputValue);
          if (inputValue.length > 2) setInputWidthWord(inputValue.length + 1);
          setEditing(false);
        }}
      />
      <span className="px-2 ">for</span>

      <input
        type="text"
        className="text-center text-black bg-white border rounded-full outline-none "
        placeholder=""
        onFocus={() => setEditing(true)}
        onBlur={() => setEditing(false)}
        value={duration}
        style={{
          width: `${inputWidthDuration}ch`,
        }}
        onChange={(e) => {
          setEditing(true);
          const inputValue = e.target.value.replace(/[^0-9]/g, "");
          setDuration(inputValue);
          if (inputValue.length > 2)
            setInputWidthDuration(inputValue.length + 1);
          setEditing(false);
        }}
      />
      <span className="px-2 ">seconds</span>
    </div>
  );
};

export default ThinkFor;
