import { createSlice } from "@reduxjs/toolkit";

export const screenSlice = createSlice({
  name: "screen",
  initialState: {
    fullscreen: false,
    mobile: false,
    shutdown: false,
  },
  reducers: {
    setFullscreen: (state, action) => {
      state.fullscreen = action.payload;
    },
    setMobile: (state, action) => {
      state.mobile = action.payload;
    },
    setShutdown: (state, action) => {
      state.shutdown = action.payload;
    },
  },
});

export const { setFullscreen, setMobile, setShutdown } = screenSlice.actions;

export default screenSlice.reducer;
