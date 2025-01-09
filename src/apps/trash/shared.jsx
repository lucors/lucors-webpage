import { appsComponents } from "#common/apps.js";
import { getSingletonAppCreator } from "#common/utils.js";
import { lazy } from "react";

export const WINDOW_TITLE = "Корзина";
export const WINDOW_ICON = "img/trashico.svg";
export const WINDOW_APP_TRASH = "app_trash";

appsComponents.set(
  WINDOW_APP_TRASH,
  lazy(() => import("./WindowTrash"))
);

export const createApp = getSingletonAppCreator(
  WINDOW_APP_TRASH,
  WINDOW_TITLE,
  WINDOW_ICON
);
