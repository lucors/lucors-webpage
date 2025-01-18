import { appsComponents } from "#common/apps.js";
import { getSingletonAppCreator } from "#common/utils.js";
import { lazy } from "react";

export const WINDOW_TITLE = "Рисовалка";
export const WINDOW_ICON = "img/icon-paint.png";
export const WINDOW_APP_PAINT = "app_paint";

appsComponents.set(
  WINDOW_APP_PAINT,
  lazy(() => import("./WindowPaint"))
);

export const createApp = getSingletonAppCreator(
  WINDOW_APP_PAINT,
  WINDOW_TITLE,
  WINDOW_ICON
);
