import { cmds } from "#apps/console/shared.jsx";
import { appsComponents } from "#common/apps.js";
import { getSingletonAppCreator } from "#common/utils.js";
import { lazy } from "react";
import i18next from "i18next";

export const WINDOW_ICON = "img/manager.svg";
export const WINDOW_APP_CONTACTS = "app_contacts";


i18next.addResourceBundle("en", WINDOW_APP_CONTACTS, {
  title: "Contacts",
});
i18next.addResourceBundle("ru", WINDOW_APP_CONTACTS, {
  title: "Контакты",
});

appsComponents.set(
  WINDOW_APP_CONTACTS,
  lazy(() => import("./WindowContacts"))
);

cmds.set("contacts", () => {
  createApp();
  return "Открываю контакты";
});

export const createApp = getSingletonAppCreator(
  WINDOW_APP_CONTACTS,
  null,
  WINDOW_ICON
);
