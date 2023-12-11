import React from "react";
import { useSelector } from "react-redux";

const ThisSpriteClicked = ({ compId }) => {
  const state = useSelector((state) => state.spriteReducer);
  const handleClick = () => {
    const buttonEle = document.getElementById(compId);
    if (buttonEle.parentElement.parentElement.id !== "mid-area-action") {
      console.log("hello");
      return;
    }
    const id =
      buttonEle.parentElement.parentElement.parentElement.parentElement
        .parentElement.parentElement.id;

    const blockIndex = state.midAreaComponentBlocks.findIndex(
      (ele) => ele.id === id
    );

    const arr = state.midAreaComponentBlocks[blockIndex].elements;
    console.log(arr);
    if (arr.length === 0) return;
    let i = 1;
    var cnt = setInterval(() => {
      if (i === arr.length) {
        clearInterval(cnt);
        return;
      }
      // Handle Wait
      // if (arr[i] === "WAIT") {
      //   let str2 = `element${arr[i]}-${id}-${i}`;
      //   let last_time = new Date().getTime();
      //   let curr_time = new Date().getTime();

      //   while ((curr_time - last_time) / 1000 < waitList[str2] - 2) {
      //     curr_time = new Date().getTime();
      //   }
      //   i++;
      // }
      // Handle Repeat element at current index
      // else if (arr[i] === "REPEAT") {
      //   let str2 = `element${arr[i]}-${id}-${i}`;
      //   repeat = repeat * (repeatList[str2] + 1);
      //   i++;
      // }
      // If Repeat element is at previous index
      // else if (arr[i - 1] === "REPEAT" && repeat > 2) {
      //   let str2 = `element${arr[i]}-${id}-${i}`;
      //   fireEvent(document.getElementById(str2), "click");
      //   repeat--;
      // } else {
      let str2 = `element${arr[i]}-${id}-${i}`;
      console.log(str2);
      fireEvent(document.getElementById(str2), "click");
      i++;
      // }
    }, 500);
    // }
  };
  const fireEvent = (element, eventType) => {
    console.log(element);
    element.click();
  };
  return (
    <div
      onClick={handleClick}
      id={compId}
      className="flex items-center w-full p-2 font-light text-white bg-yellow-400 border rounded-lg cursor-pointer"
    >
      when this sprite clicked
    </div>
  );
};

export default ThisSpriteClicked;
