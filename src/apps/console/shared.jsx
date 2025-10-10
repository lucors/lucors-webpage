import { appsComponents } from "#common/apps.js";
import { getSingletonAppCreator } from "#common/utils.js";
import { setShutdown } from "#store/screenSlice.js";
import store from "#store/store.js";
import { lazy } from "react";

export const WINDOW_TITLE = "Консоль";
export const WINDOW_ICON = "img/console.svg";
export const WINDOW_APP_CONSOLE = "app_console";

export const cmds = new Map([
  [
    "help",
    () => {
      return (
        "Доступные команды: " +
        [...cmds.keys()].join(", ")
      );
    },
  ],
  [
    "shutdown",
    () => {
      store.dispatch(setShutdown(true));
      return "Спокойной ночи~";
    },
  ],
  ["echo", (args) => args.join(" ")],
  ["clear", null]
]);

appsComponents.set(
  WINDOW_APP_CONSOLE,
  lazy(() => import("./WindowConsole"))
);

export const createApp = getSingletonAppCreator(
  WINDOW_APP_CONSOLE,
  WINDOW_TITLE,
  WINDOW_ICON,
  {
    width: "50em",
    height: "20em",
  }
);
