import React from "react";

const GoToRandom = () => {
  const handleClick = () => {
    // if (!editing) {
    const el = document.getElementById(`sprite0-div`);
    //   var left = el.offsetLeft;
    //   console.log(left, parseInt(steps));
    el.style.position = "relative";
    const randomX = Math.random() * 500;
    const randomY = Math.random() * 500;

    console.log(randomX, randomY);

    el.style.left = `${randomX}px`;
    el.style.top = `${randomY}px`;
    // }
  };

  return (
    <div
      className="flex items-center w-full p-2 font-light text-white bg-blue-500 border rounded-lg"
      onClick={handleClick}
    >
      go to random position
    </div>
  );
};

export default GoToRandom;
