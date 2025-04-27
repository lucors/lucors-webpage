import { cmds } from "#apps/console/shared.jsx";
import { appsComponents } from "#common/apps.js";
import { getSingletonAppCreator } from "#common/utils.js";
import { lazy } from "react";
import i18next from "i18next";
import IconAppManager from "#apps/manager/IconAppManager.jsx";
import IconAppUrl2Frame from "#apps/url2frame/IconAppUrl2Frame.jsx";
import IconAppChat from "#apps/chat/IconAppChat.jsx";
import IconAppCalc from "#apps/calc/IconAppCalc.jsx";
import IconAppPaint from "#apps/paint/IconAppPaint.jsx";
import IconAppDvd from "#apps/dvd/IconAppDvd.jsx";
import IconAppTrash from "#apps/trash/IconAppTrash.jsx";
import IconAppConsole from "#apps/console/IconAppConsole.jsx";

export const WINDOW_TITLE = "Приложения";
export const WINDOW_ICON = "img/apps.png";
export const WINDOW_APP_APPSLIST = "app_appslist";

i18next.addResourceBundle("ru", WINDOW_APP_APPSLIST, {
  menuSectionTitle: "Остальное",
  menuItem: "Остальные приложения",
});
i18next.addResourceBundle("en", WINDOW_APP_APPSLIST, {
  menuSectionTitle: "Other",
  menuItem: "Other apps",
});

appsComponents.set(
  WINDOW_APP_APPSLIST,
  lazy(() => import("./WindowAppsList"))
);

cmds.set("apps", () => {
  createApp();
  return "Открываю список приложений";
});

export const createApp = getSingletonAppCreator(
  WINDOW_APP_APPSLIST,
  WINDOW_TITLE,
  WINDOW_ICON
);

export function IconsList() {
  return (
    <div className="section mwem20 desktop-icons">
      <IconAppManager />
      <IconAppUrl2Frame />
      <IconAppChat />
      <IconAppCalc />
      <IconAppPaint />
      <IconAppDvd />
      <IconAppConsole />
      <IconAppTrash />
    </div>
  );
}
