import {cmds} from "#apps/console/shared.jsx";
import {getSingletonAppCreator} from "#common/utils.js";
import {lazy} from "react";
import i18next from "i18next";
import {AppMeta} from "#common/apps.js";

const TYPE = "app_contacts";

export const META = new AppMeta(
  TYPE,
  lazy(() => import("./WindowContacts")),
  getSingletonAppCreator(TYPE, null, null,
    {
      width: "40em",
      height: "30em",
    }),
  "img/contacts.png");

i18next.addResourceBundle("en", TYPE, {
  title: "About me",
});
i18next.addResourceBundle("ru", TYPE, {
  title: "Обо мне",
});

cmds.set("contacts", () => {
  META.createApp();
  return "Открываю контакты";
});
