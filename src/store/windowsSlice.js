import { createSlice } from "@reduxjs/toolkit";
import { v4 } from "uuid";

export const windowsSlice = createSlice({
  name: "windows",
  initialState: {
    list: [],
    current: null,
  },
  reducers: {
    addWindow(state, { payload }) {
      const windowInstance = {
        icon: "img/manager.svg",
        collapsed: false,
        dragging: false,
        expanded: false,
        x: 20,
        y: 20,
        startX: 0,
        startY: 0,
        // Значения по-умолчанию
        width: "50em", 
        height: "20em",
        type: null,
        ...payload,
        id: v4(),
      };
      state.list = [...state.list, windowInstance];
      state.current = windowInstance;
    },
    deleteWindowById(state, { payload }) {
      state.list = [...state.list.filter((v) => v.id != payload)];
      if (state.current?.id == payload) state.current = null;
    },
    updateWindow(state, { payload }) {
      state.list = [
        ...state.list.map((v) => {
          if (v.id != payload.id) return v;
          const newEntity = { ...v, ...payload };
          if (state.current?.id === payload.id) {
            state.current = newEntity;
          }
          return newEntity;
        }),
      ];
    },
    updateAllWindows(state, { payload }){
      state.list = [
        ...state.list.map((v) => {
          const newEntity = { ...v, ...payload };
          if (state.current?.id === payload.id) {
            state.current = newEntity;
          }
          return newEntity;
        }),
      ];
    },
    setCurrentWindowById: (state, { payload }) => {
      state.current = state.list.find((v) => v.id === payload);
    },
    setCurrentWindow: (state, { payload }) => {
      state.current = payload;
    },
  },
});

export const byId = (state, id) => {
  return state.windows.list.find((v) => v.id === id);
};

export const byType = (state, type) => {
  return state.windows.list.find((v) => v.type === type);
};

export const isCurrent = (state, id) => {
  return state.windows.current?.id === id;
};

export const {
  addWindow,
  deleteWindowById,
  updateWindow,
  updateAllWindows,
  setCurrentWindowById,
  setCurrentWindow,
} = windowsSlice.actions;

export default windowsSlice.reducer;
