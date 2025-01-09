import { cmds } from "#apps/console/shared.jsx";
import { appsComponents } from "#common/apps.js";
import { getSingletonAppCreator } from "#common/utils.js";
import { lazy } from "react";

export const WINDOW_TITLE = "Калькулятор";
export const WINDOW_ICON = "img/calc.png";
export const WINDOW_APP_CALC = "app_calc";

appsComponents.set(
  WINDOW_APP_CALC,
  lazy(() => import("./WindowCalc"))
);

cmds.set("calc", () => {
  createApp();
  return "Открываю калькулятор";
});

export const createApp = getSingletonAppCreator(
  WINDOW_APP_CALC,
  WINDOW_TITLE,
  WINDOW_ICON
);
