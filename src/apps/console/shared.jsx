import {AppMeta} from "#common/apps.js";
import {getSingletonAppCreator} from "#common/utils.js";
import {setShutdown} from "#store/screenSlice.js";
import store from "#store/store.js";
import {lazy} from "react";
import i18next from "i18next";

const TYPE = "app_console";

export const META = new AppMeta(
  TYPE,
  lazy(() => import("./WindowConsole")),
  getSingletonAppCreator(
    TYPE, null, null,
    {
      width: "50em",
      height: "20em",
    }
  ),
  "img/console.svg");

i18next.addResourceBundle("en", TYPE, {
  title: "Console",
});
i18next.addResourceBundle("ru", TYPE, {
  title: "Консоль",
});

export const cmds = new Map([
  [
    "help",
    () => {
      return (
        `Доступные команды: ${[...cmds.keys()].join(", ")}.\nДоступно исполнение js скриптов.`
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
