import React from "react";
import Icon from "./Icon";
import { Draggable, Droppable } from "react-beautiful-dnd";
import { motionComponentTypes } from "./SidebarData";
import RenderElement from "./RenderElement";

export default function Sidebar() {
  console.log(motionComponentTypes);
  return (
    <div className="flex flex-col items-start flex-none h-full p-2 overflow-y-auto border-r border-gray-200 w-60">
      <div className="font-bold"> {"Motion"} </div>

      {/* <Droppable droppableId="sidebar-motion" type="COMPONENTS">
        {(provided) => (
          <ul
            className="my-3 sideArea-motion"
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {motionComponentTypes.map((x, i) => {
              return (
                <Draggable
                  key={`${x}-sideArea`}
                  draggableId={`${x}-sideArea`}
                  index={i}
                >
                  {(provided) => (
                    <li
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      className="my-2"
                    >
                      {RenderElement(x, i)}
                    </li>
                  )}
                </Draggable>
              );
            })}
            {provided.placeholder}
          </ul>
        )}
      </Droppable> */}
      {motionComponentTypes.map((component, i) => {
        return <div key={i}>{RenderElement(component, i)}</div>;
      })}
    </div>
  );
}
