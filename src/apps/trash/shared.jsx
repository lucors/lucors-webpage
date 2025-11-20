import {cmds} from "#apps/console/shared.jsx";
import {getSingletonAppCreator} from "#common/utils.js";
import {lazy} from "react";
import {AppMeta} from "#common/apps.js";
import i18next from "i18next";

const TYPE = "app_trash";

export const META = new AppMeta(
  TYPE,
  lazy(() => import("./WindowTrash")),
  getSingletonAppCreator(TYPE),
  "img/trashico.png");

i18next.addResourceBundle("en", TYPE, {
  title: "Trashcan",
});
i18next.addResourceBundle("ru", TYPE, {
  title: "Корзина",
});

cmds.set("trash", () => {
  META.createApp();
  return "Открываю корзину";
});
