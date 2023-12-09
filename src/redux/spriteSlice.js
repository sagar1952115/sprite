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
  },
});

export const { setAngleOfSprite } = spriteSlice.actions;

export const spriteReducer = spriteSlice.reducer;
