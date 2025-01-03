import store from "#store/store";
import { addWindow } from "#store/windowsSlice";
import {
  byType,
  setCurrentWindowById,
  updateWindow,
} from "#store/windowsSlice.js";

export const WINDOW_TITLE = "Калькулятор";
export const WINDOW_ICON = "img/calc.png";
export const WINDOW_APP_CALC = "app_calc";

export function createApp() {
  const win = byType(store.getState(), WINDOW_APP_CALC);
  if (!win) {
    return store.dispatch(
      addWindow({
        title: WINDOW_TITLE,
        icon: WINDOW_ICON,
        type: WINDOW_APP_CALC,
      })
    );
  }
  store.dispatch(setCurrentWindowById(win.id));
  return store.dispatch(
    updateWindow({
      id: win.id,
      collapsed: false,
    })
  );
}
