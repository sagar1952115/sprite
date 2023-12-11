import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = {
  active: "sprite0",
  spriteList: [{ id: "sprite0", angle: 0 }],
  midAreaComponentBlocks: [
    {
      id: "midAreaBlock-0",
      elements: ["MOTION_X"],
    },
  ],
  wait: {},
};

const spriteSlice = createSlice({
  name: "spriteSlice",
  initialState,
  reducers: {
    addNewBlockList: (state) => {
      let blockList = state.midAreaComponentBlocks;
      let newList = {
        id: `midAreaBlock-${state.midAreaComponentBlocks.length}`,
        elements: ["MOTION_X"],
      };

      blockList.push(newList);
      state.midAreaComponentBlocks = blockList;
    },
    updateBlockList: (state, action) => {
      let index = state.midAreaComponentBlocks.findIndex(
        (x) => x.id === action.payload.id
      );
      let allBlocks = state.midAreaComponentBlocks;
      let [item] = allBlocks.splice(index, 1);

      item.elements = action.payload.list;
      allBlocks.splice(index, 0, item);
      state.midAreaComponentBlocks = allBlocks;
    },
    setAngleOfSprite: (state, action) => {
      const sprites = state.spriteList;
      const active = sprites.find((sprite) => sprite.id === state.active);

      const currentIndex = sprites.findIndex(
        (sprite) => sprite.id === state.active
      );

      if (currentIndex > -1) {
        active.angle = action.payload;
        sprites[currentIndex] = active;
      }

      state.spriteList = sprites;
    },
    addSprite: (state, action) => {
      let spriteArray = state.spriteList;

      spriteArray.push({
        id: `sprite${state.spriteList.length}`,
        angle: 0,
      });

      state.spriteList = spriteArray;
    },
    setActive: (state, action) => {
      state.active = action.payload;
    },
    setWaitEvents: (state, action) => {
      state.wait = action.payload;
    },
  },
});

export const {
  addNewBlockList,
  updateBlockList,
  setWaitEvents,
  setAngleOfSprite,
  addSprite,
  setActive,
} = spriteSlice.actions;

export const spriteReducer = spriteSlice.reducer;
