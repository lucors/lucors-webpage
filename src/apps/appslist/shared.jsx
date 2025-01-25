import { cmds } from "#apps/console/shared.jsx";
import { appsComponents } from "#common/apps.js";
import { getSingletonAppCreator } from "#common/utils.js";
import { lazy } from "react";
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
      <IconAppConsole/>
      <IconAppTrash />
    </div>
  );
}