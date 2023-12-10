import React from "react";
import CatSprite from "./CatSprite";
import "./style.css";
import { useSelector } from "react-redux";
import SpriteList from "./SpriteList";

export default function PreviewArea() {
  const spriteList = useSelector((state) => state.spriteReducer.spriteList);
  var position1 = 0,
    position2 = 0,
    position3 = 0,
    position4 = 0;
  var ele;
  const handleSpriteDrag = (e, id) => {
    e.preventDefault();

    ele = document.getElementById(id);
    console.log(ele);

    position3 = e.clientX;
    position4 = e.clientY;

    document.onmousemove = startSpriteDrag;
    document.onmouseup = stopSpriteDrag;
  };
  const startSpriteDrag = (e) => {
    e.preventDefault();
    position1 = position3 - e.clientX;
    position2 = position4 - e.clientY;
    position3 = e.clientX;
    position4 = e.clientY;
    ele.style.top = ele.offsetTop - position2 + "px";
    ele.style.left = ele.offsetLeft - position1 + "px";
  };
  const stopSpriteDrag = () => {
    document.onmouseup = null;
    document.onmousemove = null;
  };

  console.log(spriteList);
  return (
    <div className="flex flex-col w-full">
      <div className="flex-none w-full p-2 overflow-y-auto border h-3/4">
        {spriteList.map((sprite) => {
          return (
            <div
              id={`${sprite.id}-main`}
              onMouseDown={(e) => handleSpriteDrag(e, `${sprite.id}-main`)}
              key={sprite.id}
              className="absolute"
            >
              <div
                id={`${sprite.id}-div`}
                className="transition-all duration-500 ease-in-out cursor-pointer "
              >
                <div
                  className="hidden w-auto p-2 mb-2 ml-3 border-2 whitespace-nowrap"
                  id={sprite.id + "-message-box"}
                ></div>
                <div
                  className="hidden w-4 h-4 mb-2 ml-3 border-2 rounded-full left-1/2 whitespace-nowrap"
                  id={sprite.id + "-think-box1"}
                ></div>

                <CatSprite spriteId={`${sprite.id}`} />
              </div>
            </div>
          );
        })}
      </div>
      <div>
        <SpriteList />
      </div>
    </div>
  );
}
