import { cmds } from "#apps/console/shared.jsx";
import { appsComponents } from "#common/apps.js";
import { getSingletonAppCreator } from "#common/utils.js";
import { lazy } from "react";

export const WINDOW_TITLE = "Настройка";
export const WINDOW_ICON = "img/settings.png";
export const WINDOW_APP_SETTINGS = "settings";

appsComponents.set(
  WINDOW_APP_SETTINGS,
  lazy(() => import("./WindowSettings"))
);

cmds.set("settings", () => {
  createApp();
  return "Открываю настройки";
});

export const createApp = getSingletonAppCreator(
  WINDOW_APP_SETTINGS,
  WINDOW_TITLE,
  WINDOW_ICON
);
