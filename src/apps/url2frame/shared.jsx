import store from "#store/store";
import { addWindow } from "#store/windowsSlice";
import {
  byType,
  setCurrentWindowById,
  updateWindow,
} from "#store/windowsSlice.js";

export const WINDOW_TITLE = "Сайт в окно";
export const WINDOW_ICON = "img/url2frame.png";
export const WINDOW_APP_URL2FRAME = "app_url2frame";

export function createApp() {
  const win = byType(store.getState(), WINDOW_APP_URL2FRAME);
  if (!win) {
    return store.dispatch(
      addWindow({
        title: WINDOW_TITLE,
        icon: WINDOW_ICON,
        type: WINDOW_APP_URL2FRAME,
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
