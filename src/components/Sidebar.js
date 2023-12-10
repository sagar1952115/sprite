import React from "react";
import Icon from "./Icon";
import { Draggable, Droppable } from "react-beautiful-dnd";
import {
  controlComponentTypes,
  eventComponentTypes,
  looksComponentTypes,
  motionComponentTypes,
} from "./SidebarData";
import RenderElement from "./RenderElement";

export default function Sidebar() {
  console.log(motionComponentTypes);
  return (
    <div className="flex flex-col items-start flex-none h-full p-2 overflow-y-auto border-r border-gray-200 w-60">
      <div className="my-2 text-lg font-bold"> {"Motion"} </div>

      {motionComponentTypes.map((component, i) => {
        return <div key={i}>{RenderElement(component, i)}</div>;
      })}
      <div className="my-2 text-lg font-bold"> {"Looks"} </div>

      {looksComponentTypes.map((component, i) => {
        return <div key={i}>{RenderElement(component, i)}</div>;
      })}

      <div className="my-2 text-lg font-bold"> {"Control"} </div>

      {controlComponentTypes.map((component, i) => {
        return <div key={i}>{RenderElement(component, i)}</div>;
      })}
      <div className="my-2 text-lg font-bold"> {"Event"} </div>

      {eventComponentTypes.map((component, i) => {
        return <div key={i}>{RenderElement(component, i)}</div>;
      })}
    </div>
  );
}
