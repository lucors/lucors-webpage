import { createSlice } from "@reduxjs/toolkit";

export const settingsSlice = createSlice({
  name: "settings",
  initialState: {
    radius: 0.2,
  },
  reducers: {
    setRadius: (state, action) => {
      state.radius = action.payload;
      // Грязная функция получается, но не хочется ререндерить компонент по пустякам
      document.body.style.setProperty("--radius1", state.radius + "em");
    },
  },
});

export const { setRadius } = settingsSlice.actions;

export default settingsSlice.reducer;
