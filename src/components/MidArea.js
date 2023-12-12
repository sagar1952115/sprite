import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Draggable, Droppable } from "react-beautiful-dnd";

import { addNewBlockList } from "../redux/spriteSlice";
import RenderElement from "./RenderElement";
import { FaPlus } from "react-icons/fa";

export default function MidArea() {
  const dispatch = useDispatch();
  const blocksList = useSelector(
    (state) => state.spriteReducer.midAreaComponentBlocks
  );

  const waitList = useSelector((state) => state.spriteReducer.wait);
  const addNewContainer = () => {
    dispatch(addNewBlockList());
  };
  return (
    <div className="flex-1 h-full p-5 overflow-auto">
      <div className="flex justify-between">
        <div className="text-lg font-bold text-center">Mid Area</div>

        <div>
          <button
            className="p-2 font-bold text-white bg-blue-500 rounded-md"
            onClick={addNewContainer}
          >
            New Block
          </button>
        </div>
      </div>

      {/* Mid area blocks */}
      <div className="flex flex-wrap gap-2.5">
        {blocksList?.map((block) => {
          return (
            <div className="w-60" id={block.id} key={block.id}>
              <div elevation={3} className="p-4">
                <div className="p-2 border-2 border-gray-300 rounded w-52">
                  <Droppable droppableId={block.id} type="COMPONENTS">
                    {(provided) => {
                      return (
                        <ul
                          className={`${block.id} w-48 h-full`}
                          {...provided.droppableProps}
                          ref={provided.innerRef}
                        >
                          {block.elements?.length > 0 ? (
                            block.elements.map((x, i) => {
                              let str = `${x}`;
                              let componentId = `element${str}-${block.id}-${i}`;

                              return (
                                <Draggable
                                  key={`${str}-${block.id}-${i}`}
                                  draggableId={`${str}-${block.id}-${i}`}
                                  index={i}
                                >
                                  {(provided) => (
                                    <li
                                      id="mid-area-action"
                                      ref={provided.innerRef}
                                      {...provided.draggableProps}
                                      {...provided.dragHandleProps}
                                    >
                                      {RenderElement(str, componentId)}
                                      {provided.placeholder}
                                    </li>
                                  )}
                                </Draggable>
                              );
                            })
                          ) : (
                            <div className="flex flex-col items-center justify-center">
                              <FaPlus color="#c6c6c6" size="5rem" />
                              <h2 className="text-lg text-gray-400">
                                Drop sprites here
                              </h2>
                            </div>
                          )}
                          {provided.placeholder}
                        </ul>
                      );
                    }}
                  </Droppable>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
