import {AppMeta, appsMetas} from "#common/apps.js";
import store from "#store/store";
import { addWindow } from "#store/windowsSlice";
import { setCurrentWindowById } from "#store/windowsSlice.js";
import { lazy } from "react";
import {DEFAULT_APP_ICON} from "#common/consts.js";

const TYPE = "frame";

export function createFrame(title, href, icon = undefined) {
  const frames = store
    .getState()
    .windows.list.filter((w) => w.type == TYPE && w.href == href);
  if (icon === undefined) {
    icon = href.includes("lucors.ru")
      ? DEFAULT_APP_ICON
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
      type: TYPE,
      href: href,
      width: "50em",
      height: "20em",
    })
  );
}

export const META = new AppMeta(
  TYPE,
  lazy(() => import("./WindowFrame")),
  createFrame);
