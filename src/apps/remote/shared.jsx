import {cmds} from "#apps/console/shared.jsx";
import {AppMeta} from "#common/apps.js";
import i18next from "i18next";
import {lazy} from "react";
import {getSingletonAppCreator} from "#common/utils.js";

const TYPE = "remote_test";

export const META = new AppMeta(
  TYPE,
  lazy(() => import("remote_apps/Test")),
  getSingletonAppCreator(TYPE));

i18next.addResourceBundle("en", TYPE, {
  title: "Remote component",
});
i18next.addResourceBundle("ru", TYPE, {
  title: "Удаленный компонент",
});

cmds.set(TYPE, () => {
  META.createApp();
});
