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
  return (
    <div className="flex flex-col items-start flex-none h-full p-2 overflow-y-auto border-r border-gray-200 w-60">
      <div className="text-lg font-bold "> {"Motion"} </div>
      <Droppable droppableId="sidebar-motion" type="COMPONENTS">
        {(provided) => (
          <ul
            className="my-3 sideArea-motion"
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {motionComponentTypes.map((component, i) => {
              return (
                <Draggable
                  key={`${component}-sideArea`}
                  draggableId={`${component}-sideArea`}
                  index={i}
                >
                  {(provided) => (
                    <li
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      className="my-2"
                    >
                      {" "}
                      {RenderElement(component, i)}
                    </li>
                  )}
                </Draggable>
              );
            })}
            {provided.placeholder}
          </ul>
        )}
      </Droppable>
      <div className="text-lg font-bold "> {"Looks"} </div>
      <Droppable droppableId="sidebar-motion" type="COMPONENTS">
        {(provided) => (
          <ul
            className="my-3 sideArea-motion"
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {looksComponentTypes.map((component, i) => {
              return (
                <Draggable
                  key={`${component}-sideArea`}
                  draggableId={`${component}-sideArea`}
                  index={i}
                >
                  {(provided) => (
                    <li
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      className="my-2"
                    >
                      {" "}
                      {RenderElement(component, i)}{" "}
                    </li>
                  )}
                </Draggable>
              );
            })}
            {provided.placeholder}
          </ul>
        )}
      </Droppable>

      <div className="text-lg font-bold "> {"Control"} </div>
      <Droppable droppableId="sidebar-motion" type="COMPONENTS">
        {(provided) => (
          <ul
            className="my-3 sideArea-motion"
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {controlComponentTypes.map((component, i) => {
              return (
                <Draggable
                  key={`${component}-sideArea`}
                  draggableId={`${component}-sideArea`}
                  index={i}
                >
                  {(provided) => (
                    <li
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      className="my-2"
                    >
                      {RenderElement(component, i)}{" "}
                    </li>
                  )}
                </Draggable>
              );
            })}
            {provided.placeholder}
          </ul>
        )}
      </Droppable>
      <div className="text-lg font-bold "> {"Event"} </div>
      <Droppable droppableId="sidebar-motion" type="COMPONENTS">
        {(provided) => (
          <ul
            className="my-3 sideArea-motion"
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {eventComponentTypes.map((component, i) => {
              return (
                <Draggable
                  key={`${component}-sideArea`}
                  draggableId={`${component}-sideArea`}
                  index={i}
                >
                  {(provided) => (
                    <li
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      className="my-2"
                    >
                      {RenderElement(component, i)}
                    </li>
                  )}
                </Draggable>
              );
            })}
            {provided.placeholder}
          </ul>
        )}
      </Droppable>
    </div>
  );
}
