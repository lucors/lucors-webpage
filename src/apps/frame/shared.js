import store from "#store/store";
import { addWindow } from "#store/windowsSlice";
import { setCurrentWindowById } from "#store/windowsSlice.js";

export const WINDOW_APP_FRAME = "frame";

export function createFrame(title, href, icon = "img/unknow-app.svg") {
  const frames = store
    .getState()
    .windows.list.filter((w) => w.type == WINDOW_APP_FRAME && w.href == href);
  if (frames.length) {
    store.dispatch(setCurrentWindowById(frames[0].id));
    return;
  }
  store.dispatch(
    addWindow({
      title,
      icon,
      type: WINDOW_APP_FRAME,
      href: href,
    })
  );
}
