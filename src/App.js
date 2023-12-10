import React from "react";
import Sidebar from "./components/Sidebar";
import MidArea from "./components/MidArea";
import PreviewArea from "./components/PreviewArea";
import { DragDropContext } from "react-beautiful-dnd";
import "./App.css";

export default function App() {
  return (
    <div className="pt-6 font-sans bg-blue-100">
      <div className="flex flex-row h-screen overflow-hidden ">
        {/* <DragDropContext> */}
        <div className="flex flex-row flex-1 h-screen mr-2 overflow-hidden bg-white border-t border-r border-gray-200 rounded-tr-xl">
          <Sidebar /> <MidArea />
        </div>
        <div className="flex flex-row w-1/3 h-screen ml-2 overflow-hidden bg-white border-t border-l border-gray-200 rounded-tl-xl">
          <PreviewArea />
        </div>
        {/* </DragDropContext> */}
      </div>
    </div>
  );
}
