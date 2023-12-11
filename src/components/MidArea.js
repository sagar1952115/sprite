import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Draggable, Droppable } from "react-beautiful-dnd";

import { addNewBlockList } from "../redux/spriteSlice";
import RenderElement from "./RenderElement";

export default function MidArea() {
  const dispatch = useDispatch();
  const blocksList = useSelector(
    (state) => state.spriteReducer.midAreaComponentBlocks
  );
  console.log(blocksList);
  const waitList = useSelector((state) => state.spriteReducer.wait);
  const addNewContainer = () => {
    dispatch(addNewBlockList());
  };
  return (
    <div className="flex-1 h-full p-5 overflow-auto">
      <div className="flex justify-between">
        <div className="text-lg font-bold text-center">Mid Area</div>

        <div>
          <button onClick={addNewContainer}>New Block</button>
        </div>
      </div>

      {/* Mid area blocks */}
      <div className="flex flex-wrap gap-2.5">
        {blocksList?.map((block) => {
          return (
            <div className="w-60" id={block.id} key={block.id}>
              <div elevation={3} className="p-4">
                <div className="p-2 border-2 border-gray-300 w-52">
                  <Droppable droppableId={block.id} type="COMPONENTS">
                    {(provided) => {
                      return (
                        <ul
                          className={`${block.id} w-48 h-full`}
                          {...provided.droppableProps}
                          ref={provided.innerRef}
                        >
                          {/* <div className="mx-auto my-2 mb-4 text-center">
                            <Button
                              variant="contained"
                              startIcon={<PlayArrowOutlined />}
                              // onClick={() =>
                              //   handleBlockRun(block.elements, block.id)
                              // }
                            >
                              Run
                            </Button>
                          </div> */}

                          {block.elements &&
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
                            })}
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
