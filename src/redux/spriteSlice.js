import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = {
  active: "sprite0",
  spriteList: [{ id: "sprite0", angle: 0 }],
};

const spriteSlice = createSlice({
  name: "spriteSlice",
  initialState,
  reducers: {
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
  },
});

export const { setAngleOfSprite, addSprite, setActive } = spriteSlice.actions;

export const spriteReducer = spriteSlice.reducer;
