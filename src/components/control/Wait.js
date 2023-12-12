import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setWaitEvents } from "../../redux/spriteSlice";

const Wait = ({ compId }) => {
  const [duration, setDuration] = useState(10);
  const [inputWidth, setInputWidth] = useState("3");
  const dispatch = useDispatch();
  const waitList = useSelector((state) => state.spriteReducer.waitList);
  useEffect(() => {
    let curr = waitList;
    let waitValue = parseInt(duration);
    curr = { ...curr, [compId]: waitValue };

    dispatch(setWaitEvents(curr));
  }, []);

  return (
    <div
      id={compId}
      className="flex items-center w-full p-2 font-light text-white bg-yellow-500 border rounded-lg cursor-pointer"
    >
      <span className="pr-2 ">wait</span>

      <input
        type="text"
        className="text-center text-black bg-white border rounded-full outline-none "
        placeholder=""
        value={duration}
        style={{
          width: `${inputWidth}ch`,
        }}
        onChange={(e) => {
          let inputValue = e.target.value.replace(/[^0-9-]/g, "");
          setDuration(inputValue);
          if (inputValue.length > 2) setInputWidth(inputValue.length + 1);
          let curr = waitList;
          let waitValue = parseInt(inputValue);
          curr = { ...curr, [compId]: waitValue };
          dispatch(setWaitEvents(curr));
        }}
      />

      <span className="px-2 ml-2">seconds</span>
    </div>
  );
};

export default Wait;
