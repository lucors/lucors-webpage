import {AppMeta} from "#common/apps.js";
import {getSingletonAppCreator} from "#common/utils.js";
import {lazy} from "react";
import i18next from "i18next";

const TYPE = "app_dvd";

export const META = new AppMeta(
  TYPE,
  lazy(() => import("./WindowDvd")),
  getSingletonAppCreator(TYPE),
  "img/dvd.png");

i18next.addResourceBundle("en", TYPE, {
  title: "Screensaver",
});
i18next.addResourceBundle("ru", TYPE, {
  title: "Скринсейвер",
});
