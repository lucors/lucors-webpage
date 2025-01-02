import store from "#store/store";
import { addWindow } from "#store/windowsSlice";
import {
  byType,
  setCurrentWindowById,
  updateWindow,
} from "#store/windowsSlice.js";

export const WINDOW_APP_TRASH = "app_trash";

export function createApp() {
  const win = byType(store.getState(), WINDOW_APP_TRASH);
  if (!win) {
    return store.dispatch(
      addWindow({
        title: "Trash zone",
        icon: "img/trashico.svg",
        type: WINDOW_APP_TRASH,
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
