import { appsComponents } from "#common/apps.js";
import { getSingletonAppCreator } from "#common/utils.js";
import { lazy } from "react";

export const WINDOW_TITLE = "Приложения";
export const WINDOW_ICON = "img/apps.png";
export const WINDOW_APP_APPSLIST = "app_appslist";

appsComponents.set(
  WINDOW_APP_APPSLIST,
  lazy(() => import("./WindowAppsList"))
);

export const createApp = getSingletonAppCreator(
  WINDOW_APP_APPSLIST,
  WINDOW_TITLE,
  WINDOW_ICON
);
