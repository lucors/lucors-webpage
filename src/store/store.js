import { configureStore } from '@reduxjs/toolkit'
import menuReducer from './menuSlice'
import screenReducer from "./screenSlice";
import windowsReducer from "./windowsSlice";

export default configureStore({
  reducer: {
    menu: menuReducer,
    screen: screenReducer,
    windows: windowsReducer
  }
})