import store from "#store/store";
import { addWindow } from "#store/windowsSlice";
import {
  byType,
  setCurrentWindowById,
  updateWindow,
} from "#store/windowsSlice.js";

export const WINDOW_TITLE = "Приложения";
export const WINDOW_ICON = "img/apps.png";
export const WINDOW_APP_APPSLIST = "app_appslist";

export function createApp() {
  const win = byType(store.getState(), WINDOW_APP_APPSLIST);
  if (!win) {
    return store.dispatch(
      addWindow({
        title: WINDOW_TITLE,
        icon: WINDOW_ICON,
        type: WINDOW_APP_APPSLIST,
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
