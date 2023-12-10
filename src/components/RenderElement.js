import React from "react";
import MotionX from "./motion/MotionX";
import GoToRandom from "./motion/GoToRandom";
import GoToXY from "./motion/GoToXY";
import TurnClockWise from "./motion/TurnClockWise";
import TurnAntiClockwise from "./motion/TurnAntiClockwise";
import Say from "./looks/Say";
import SayFor from "./looks/SayFor";
import Think from "./looks/Think";
import ThinkFor from "./looks/ThinkFor";
import Show from "./looks/Show";
import ChangeSizeBy from "./looks/ChangeSizeBy";
import SetSizeto from "./looks/SetSizeto";
import Hide from "./looks/Hide";

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
    case "SAY":
      component = <Say compId={compId} />;
      break;
    case "SAY_FOR":
      component = <SayFor compId={compId} />;
      break;
    case "THINK":
      component = <Think compId={compId} />;
      break;
    case "THINK_FOR":
      component = <ThinkFor compId={compId} />;
      break;
    case "SHOW":
      component = <Show compId={compId} />;
      break;
    case "HIDE":
      component = <Hide compId={compId} />;
      break;
    case "CHANGE_SIZE_BY":
      component = <ChangeSizeBy compId={compId} />;
      break;
    case "SET_SIZE_TO":
      component = <SetSizeto compId={compId} />;
      break;
    default:
      component = <div></div>;
      break;
  }
  return <div>{component}</div>;
}
