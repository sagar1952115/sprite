import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setAngleOfSprite } from "../../redux/spriteSlice";
import { GiAnticlockwiseRotation } from "react-icons/gi";

const TurnAntiClockwise = ({ compId }) => {
  const [editing, setEditing] = useState(false);
  const [angle, setAngle] = useState("30");
  const [inputWidth, setInputWidth] = useState("3");
  const dispatch = useDispatch();

  const state = useSelector((state) => state.spriteReducer);
  const handleClick = () => {
    if (!editing) {
      const el = document.getElementById(state.active);

      const findActiveSprite = state.spriteList.find(
        (x) => x.id === state.active
      );

      if (findActiveSprite) {
        el.style.transform = `rotate(${
          findActiveSprite.angle - parseInt(angle)
        }deg)`;
      }
      dispatch(setAngleOfSprite(findActiveSprite.angle - parseInt(angle)));
    }
  };

  return (
    <div
      id={compId}
      className="flex items-center w-full p-2 font-light text-white bg-blue-500 border rounded-lg"
      onClick={handleClick}
    >
      turn{" "}
      <span className="px-2">
        <GiAnticlockwiseRotation />
      </span>
      <input
        type="text"
        className="text-center text-black bg-white border rounded-full outline-none "
        placeholder=""
        onFocus={() => setEditing(true)}
        onBlur={() => setEditing(false)}
        value={angle}
        style={{
          width: `${inputWidth}ch`,
        }}
        onChange={(e) => {
          setEditing(true);
          const inputValue = e.target.value.replace(/[^0-9-]/g, "");
          setAngle(inputValue);
          if (inputValue.length > 2) setInputWidth(inputValue.length + 1);
          setEditing(false);
        }}
      />
      <span className="px-2">degrees</span>
    </div>
  );
};

export default TurnAntiClockwise;
