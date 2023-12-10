import React, { useState } from "react";
// import { useSelector } from "react-redux";

const Wait = () => {
  const [editing, setEditing] = useState(false);
  const [duration, setDuration] = useState(10);
  const [inputWidth, setInputWidth] = useState("3");

  const handleClick = () => {
    console.log(editing);
  };
  return (
    <div
      onClick={handleClick}
      className="flex items-center w-full p-2 font-light text-white bg-yellow-500 border rounded-lg cursor-pointer"
    >
      <span className="pr-2 ">wait</span>

      <input
        type="text"
        className="text-center text-black bg-white border rounded-full outline-none "
        placeholder=""
        onFocus={() => setEditing(true)}
        onBlur={() => setEditing(false)}
        value={duration}
        style={{
          width: `${inputWidth}ch`,
        }}
        onChange={(e) => {
          setEditing(true);
          const inputValue = e.target.value.replace(/[^0-9-]/g, "");
          setDuration(inputValue);
          if (inputValue.length > 2) setInputWidth(inputValue.length + 1);
          setEditing(false);
        }}
      />

      <span className="px-2 ml-2">seconds</span>
    </div>
  );
};

export default Wait;
