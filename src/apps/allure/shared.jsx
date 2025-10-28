import {cmds} from "#apps/console/shared.jsx";
import {AppMeta} from "#common/apps.js";
import i18next from "i18next";
import {lazy} from "react";
import {getSingletonAppCreator} from "#common/utils.js";

const TYPE = "allure";
const ICON = "https://lucors.ru/allure-report/favicon.svg";

export const URL = "https://lucors.ru/allure-report";

export const META = new AppMeta(
  TYPE,
  lazy(() => import("./WindowAllure")),
  getSingletonAppCreator(TYPE, null, null,
    {
      width: "20em",
      height: "30em",
    }),
  ICON);

i18next.addResourceBundle("en", TYPE, {
  title: "Allure",
});
i18next.addResourceBundle("ru", TYPE, {
  title: "Allure",
});

cmds.set("allure", () => {
  META.createApp();
});
