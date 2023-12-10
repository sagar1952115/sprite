import React from "react";
import { FaPlus } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { addSprite, setActive } from "../redux/spriteSlice";

const SpriteList = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.spriteReducer);
  const handleAddSprite = () => {
    dispatch(addSprite());
  };
  const handleSetSpriteActive = (spriteId) => {
    dispatch(setActive(spriteId));
  };
  console.log(state);
  return (
    <div>
      <div className="relative flex flex-wrap">
        {state.spriteList.map((sprite) => {
          return (
            <div
              key={sprite.id}
              className={`p-1 m-2 ${
                state.active === sprite.id
                  ? " border-yellow-500"
                  : "border-transparent"
              } rounded-md w-max border-4`}
            >
              <div
                onClick={() => handleSetSpriteActive(sprite.id)}
                className="p-2 font-bold text-white bg-yellow-500 rounded-md w-max"
              >
                {sprite.id}
              </div>
            </div>
          );
        })}
      </div>
      <div
        onClick={handleAddSprite}
        className="absolute flex items-center justify-center bg-yellow-500 rounded-full pointer w-14 h-14 bottom-2 right-2 bg-clip-p-2"
      >
        <FaPlus color="#ffffff" size="2rem" />
      </div>
    </div>
  );
};

export default SpriteList;
