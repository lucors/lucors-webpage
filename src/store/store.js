import { configureStore } from '@reduxjs/toolkit'
import menuReducer from './menuSlice'
import screenReducer from "./screenSlice";
import windowsReducer from "./windowsSlice";
import settingsReducer from "./settingsSlice";


function loadFromLocalStorage() {
  try {
    const serialisedState = localStorage.getItem("persistantState");
    if (!serialisedState) return undefined;
    return JSON.parse(serialisedState);
  } catch (e) {
    console.warn(e);
    return undefined;
  }
}

function saveToLocalStorage(state) {
  try {
    const serialisedState = JSON.stringify(state);
    localStorage.setItem("persistantState", serialisedState);
  } catch (e) {
    console.error(e);
  }
}

const store = configureStore({
  reducer: {
    menu: menuReducer,
    screen: screenReducer,
    windows: windowsReducer,
    settings: settingsReducer,
  },
  preloadedState: loadFromLocalStorage()
});
store.subscribe(() => saveToLocalStorage(store.getState()));

export default store;