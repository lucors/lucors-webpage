import { appsMetas } from "#common/apps.js";
import { getSingletonAppCreator } from "#common/utils.js";
import { lazy } from "react";

export const WINDOW_TITLE = "Название приложения";
export const WINDOW_ICON = "img/calc.png";
export const WINDOW_APP_NAME = "app_name";

appsMetas.set(
  WINDOW_APP_NAME,
  lazy(() => import("./WindowName"))
);

export const createApp = getSingletonAppCreator(
  WINDOW_APP_NAME,
  WINDOW_TITLE,
  WINDOW_ICON
);

