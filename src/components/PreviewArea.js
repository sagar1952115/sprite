import React from "react";
import CatSprite from "./CatSprite";
import "./style.css";
import { useSelector } from "react-redux";

export default function PreviewArea() {
  const spriteList = useSelector((state) => state.spriteReducer.spriteList);

  console.log(spriteList);
  return (
    <div className="flex-none h-full p-2 overflow-y-auto">
      {spriteList.map((sprite) => {
        return (
          <div key={sprite.id} className="absolute">
            <div
              id={`${sprite.id}-div`}
              className="transition-all duration-500 ease-in-out cursor-pointer "
            >
              <CatSprite spriteId={`${sprite.id}`} />
            </div>
          </div>
        );
      })}
    </div>
  );
}
