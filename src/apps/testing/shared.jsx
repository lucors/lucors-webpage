import {cmds} from "#apps/console/shared.jsx";
import {getSingletonAppCreator} from "#common/utils.js";
import {lazy} from "react";
import i18next from "i18next";
import {AppMeta} from "#common/apps.js";

const TYPE = "app_testing";

export const META = new AppMeta(
  TYPE,
  lazy(() => import("./WindowTesting")),
  getSingletonAppCreator(TYPE, null, null,
    {
      width: "40em",
      height: "30em",
    }),
  "img/tests.png");

i18next.addResourceBundle("en", TYPE, {
  title: "About tests",
});
i18next.addResourceBundle("ru", TYPE, {
  title: "О тестах",
});

cmds.set("testing", () => {
  META.createApp();
  return "Открываю контакты";
});
