import React from "react";
import Sidebar from "./components/Sidebar";
import MidArea from "./components/MidArea";
import PreviewArea from "./components/PreviewArea";
import { DragDropContext } from "react-beautiful-dnd";
import "./App.css";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { updateBlockList } from "./redux/spriteSlice";

export default function App() {
  const state = useSelector((state) => state.spriteReducer);
  const dispatch = useDispatch();
  const onDragEnd = (result) => {
    let element = result.draggableId.split("-")[0];
    let oldBlocksList = [...state.midAreaComponentBlocks];
    let idx = oldBlocksList.findIndex(
      (x) => x.id === result.source.droppableId
    );

    if (idx > -1) {
      let updatedList = oldBlocksList[idx].elements;
      const newSourceBlockList = [...updatedList];
      newSourceBlockList.splice(result.source.index, 1);
      oldBlocksList[idx] = {
        ...oldBlocksList[idx],
        elements: newSourceBlockList,
      };

      dispatch(
        updateBlockList({
          list: newSourceBlockList,
          id: oldBlocksList[idx].id,
        })
      );
    }

    let destIndex = oldBlocksList.findIndex(
      (x) => x.id === result.destination.droppableId
    );

    if (destIndex > -1) {
      let destElementList = oldBlocksList[destIndex].elements;
      const newDestElementList = [...destElementList];
      newDestElementList.splice(result.destination.index, 0, element);
      oldBlocksList[destIndex] = {
        ...oldBlocksList[destIndex],
        elements: newDestElementList,
      };

      let eventElementIndex = oldBlocksList[destIndex].elements.findIndex(
        (element) => element === "THIS_SPRITE_CLICKED"
      );

      if (eventElementIndex > -1) {
        const movedElement = oldBlocksList[destIndex].elements.splice(
          eventElementIndex,
          1
        )[0];
        oldBlocksList[destIndex].elements.unshift(movedElement);
      }

      dispatch(
        updateBlockList({
          list: newDestElementList,
          id: oldBlocksList[destIndex].id,
        })
      );
    }
  };

  return (
    <div className="pt-6 font-sans bg-blue-100">
      <div className="flex flex-row h-screen overflow-hidden ">
        <DragDropContext onDragEnd={onDragEnd}>
          <div className="flex flex-row flex-1 h-screen mr-2 overflow-hidden bg-white border-t border-r border-gray-200 rounded-tr-xl">
            <Sidebar /> <MidArea />
          </div>
          <div className="flex flex-row w-1/3 h-screen ml-2 overflow-hidden bg-white border-t border-l border-gray-200 rounded-tl-xl">
            <PreviewArea />
          </div>
        </DragDropContext>
      </div>
    </div>
  );
}
