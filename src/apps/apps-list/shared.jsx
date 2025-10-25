import {cmds} from "#apps/console/shared.jsx";
import {getSingletonAppCreator} from "#common/utils.js";
import {lazy} from "react";
import i18next from "i18next";
import {AppMeta} from "#common/apps.js";

const TYPE = "app_apps_list";

export const META = new AppMeta(
  TYPE,
  lazy(() => import("./WindowAppsList")),
  getSingletonAppCreator(TYPE),
  "img/apps_alt.png");

i18next.addResourceBundle("en", TYPE, {
  title: "Apps",
});
i18next.addResourceBundle("ru", TYPE, {
  title: "Приложения",
});

cmds.set("contacts", () => {
  META.createApp();
  return "Открываю контакты";
});
