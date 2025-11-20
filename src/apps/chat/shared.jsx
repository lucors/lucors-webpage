import {cmds} from "#apps/console/shared.jsx";
import {AppMeta} from "#common/apps.js";
import i18next from "i18next";
import {lazy} from "react";
import {getSingletonAppCreator} from "#common/utils.js";

const TYPE = "chat";
const ICON = "https://lucors.ru/iochat/assets/img/favicon.png";

export const CHAT_URL = "https://lucors.ru/iochat";

export const META = new AppMeta(
  TYPE,
  lazy(() => import("./WindowChat")),
  getSingletonAppCreator(TYPE, null, null,
    {
      width: "30em",
      height: "40em",
    }),
  ICON);

i18next.addResourceBundle("en", TYPE, {
  title: "Chat",
});
i18next.addResourceBundle("ru", TYPE, {
  title: "Чат",
});

cmds.set("chat", () => {
  META.createApp();
  return "Открываю чат";
});
