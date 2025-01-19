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
        [...cmds.keys(), "clear"].join(", ")
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
  ["hi", () => "hello"],
  ["hello", () => "hi"],
  ["echo", (args) => args.join(" ")],
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
