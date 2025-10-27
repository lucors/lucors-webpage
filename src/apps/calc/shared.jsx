import {cmds} from "#apps/console/shared.jsx";
import {AppMeta} from "#common/apps.js";
import {getSingletonAppCreator} from "#common/utils.js";
import {lazy} from "react";
import i18next from "i18next";

const TYPE = "app_calc";

export const META = new AppMeta(
  TYPE,
  lazy(() => import("./WindowCalc")),
  getSingletonAppCreator(TYPE),
  "img/calc.png");

i18next.addResourceBundle("en", TYPE, {
  title: "Calculator",
});
i18next.addResourceBundle("ru", TYPE, {
  title: "Калькулятор",
});

cmds.set("calc", () => {
  META.createApp();
  return "Открываю калькулятор";
});
