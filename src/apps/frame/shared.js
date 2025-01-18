import { appsComponents } from "#common/apps.js";
import store from "#store/store";
import { addWindow } from "#store/windowsSlice";
import { setCurrentWindowById } from "#store/windowsSlice.js";
import { lazy } from "react";

export const WINDOW_APP_FRAME = "frame";
export const DEFAULT_ICON = "img/unknow-app.svg";

appsComponents.set(
  WINDOW_APP_FRAME,
  lazy(() => import("./WindowFrame"))
);

export function createFrame(title, href, icon = undefined) {
  const frames = store
    .getState()
    .windows.list.filter((w) => w.type == WINDOW_APP_FRAME && w.href == href);
  if (icon === undefined) {
    icon = href.includes("lucors.ru")
      ? DEFAULT_ICON
      : `https://www.google.com/s2/favicons?domain=${href}&sz=256`;
  }
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
      width: "50em",
      height: "20em",
    })
  );
}
