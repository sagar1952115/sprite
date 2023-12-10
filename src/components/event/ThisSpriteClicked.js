import React from "react";

const ThisSpriteClicked = () => {
  const handleClick = () => {
    console.log("Sprite Clicked");
  };
  return (
    <div
      onClick={handleClick}
      className="flex items-center w-full p-2 font-light text-white bg-yellow-400 border rounded-lg cursor-pointer"
    >
      when this sprite clicked
    </div>
  );
};

export default ThisSpriteClicked;
