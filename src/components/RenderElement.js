import React from "react";
import MotionX from "./motion/MotionX";
import GoToRandom from "./motion/GoToRandom";
import GoToXY from "./motion/GoToXY";
import TurnClockWise from "./motion/TurnClockWise";
import TurnAntiClockwise from "./motion/TurnAntiClockwise";

export default function RenderElement(componentEle, compId) {
  console.log(compId, componentEle);
  let component;
  switch (componentEle) {
    case "MOTION_X":
      component = <MotionX compId={compId} />;
      break;
    case "GOTO_RANDOM":
      component = <GoToRandom compId={compId} />;
      break;
    case "MOTION_XY":
      component = <GoToXY compId={compId} />;
      break;
    case "TURN_CLOCK":
      component = <TurnClockWise compId={compId} />;
      break;
    case "TURN_ANTICLOCK":
      component = <TurnAntiClockwise compId={compId} />;
      break;
    default:
      component = <div></div>;
      break;
  }
  return <div>{component}</div>;
}
