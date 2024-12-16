import { createSlice } from "@reduxjs/toolkit";

export const screenSlice = createSlice({
  name: "screen",
  initialState: {
    fullscreen: false,
    mobile: false,
  },
  reducers: {
    setFullscreen: (state, action) => {
      state.fullscreen = action.payload;
    },
    setMobile: (state, action) => {
      state.mobile = action.payload;
    },
  },
});

export const { setFullscreen, setMobile } = screenSlice.actions;

export default screenSlice.reducer;
