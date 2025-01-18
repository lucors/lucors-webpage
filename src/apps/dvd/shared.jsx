import { appsComponents } from "#common/apps.js";
import { getSingletonAppCreator } from "#common/utils.js";
import { lazy } from "react";

export const WINDOW_TITLE = "Скринсейвер";
export const WINDOW_ICON = "img/dvd.png";
export const WINDOW_APP_DVD = "app_dvd";

appsComponents.set(
  WINDOW_APP_DVD,
  lazy(() => import("./WindowDvd"))
);

export const createApp = getSingletonAppCreator(
  WINDOW_APP_DVD,
  WINDOW_TITLE,
  WINDOW_ICON,
  {
    width: "50em",
    height: "20em",
  }
);
