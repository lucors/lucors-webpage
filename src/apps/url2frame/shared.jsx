import { cmds } from "#apps/console/shared.jsx";
import {AppMeta, appsMetas} from "#common/apps.js";
import { getSingletonAppCreator } from "#common/utils.js";
import { lazy } from "react";
import i18next from "i18next";

const TYPE = "app_url2frame";

export const META = new AppMeta(
  TYPE,
  lazy(() => import("./WindowUrl2Frame")),
  getSingletonAppCreator(TYPE),
  "img/url2frame.png");

i18next.addResourceBundle("en", TYPE, {
  title: "URL to Frame",
});
i18next.addResourceBundle("ru", TYPE, {
  title: "Сайт в окно",
});

cmds.set("html2frame", () => {
  META.createApp();
  return "Открываю приложение \"Сайт в окно\"";
});
