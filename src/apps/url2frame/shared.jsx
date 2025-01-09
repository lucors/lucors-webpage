import { appsComponents } from "#common/apps.js";
import { getSingletonAppCreator } from "#common/utils.js";
import { lazy } from "react";

export const WINDOW_TITLE = "Сайт в окно";
export const WINDOW_ICON = "img/url2frame.png";
export const WINDOW_APP_URL2FRAME = "app_url2frame";

appsComponents.set(
  WINDOW_APP_URL2FRAME,
  lazy(() => import("./WindowUrl2Frame"))
);

export const createApp = getSingletonAppCreator(
  WINDOW_APP_URL2FRAME,
  WINDOW_TITLE,
  WINDOW_ICON
);
