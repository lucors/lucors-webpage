import { cmds } from "#apps/console/shared.jsx";
import { appsComponents } from "#common/apps.js";
import store from "#store/store";
import { addWindow } from "#store/windowsSlice";
import {
  byId,
  byType,
  setCurrentWindowById,
  updateWindow,
} from "#store/windowsSlice.js";
import { lazy } from "react";
import i18next from "i18next";
import IconAppUrl2Frame from "#apps/url2frame/IconAppUrl2Frame.jsx";
import IconAppChat from "#apps/chat/IconAppChat.jsx";
import IconAppCalc from "#apps/calc/IconAppCalc.jsx";
import IconAppPaint from "#apps/paint/IconAppPaint.jsx";
import IconAppDvd from "#apps/dvd/IconAppDvd.jsx";
import IconAppTrash from "#apps/trash/IconAppTrash.jsx";
import IconAppConsole from "#apps/console/IconAppConsole.jsx";

export const WINDOW_TITLE = "Менеджер справки";
export const WINDOW_ICON = "img/manager.svg";
export const WINDOW_APP_MANAGER = "explorer";
export const WINDOW_DEFAULT_QUERY = "main-page";

i18next.addResourceBundle("en", WINDOW_APP_MANAGER, {
  menuSectionTitle: "Common",
  menu1: "Main page",
  menu2: "Contacts",
  menu3: "Projects",
  menu3alt: "Archival projects",
  menu5: "Articles",
  menu8: "About",
  menu9: "Apps",
});
i18next.addResourceBundle("ru", WINDOW_APP_MANAGER, {
  menuSectionTitle: "Общее",
  menu1: "Главная страница",
  menu2: "Контакты",
  menu3: "Проекты",
  menu3alt: "Архивные проекты",
  menu5: "Статьи",
  menu8: "О сайте",
  menu9: "Приложения",
});
// i18next.addResourceBundle("ru", WINDOW_APP_APPSLIST, {
//   menuSectionTitle: "Остальное",
//   menuItem: "Остальные приложения",
// });
// i18next.addResourceBundle("en", WINDOW_APP_APPSLIST, {
//   menuSectionTitle: "Other",
//   menuItem: "Other apps",
// });

appsComponents.set(
  WINDOW_APP_MANAGER,
  lazy(() => import("./WindowExplorer"))
);

cmds.set("manager", () => {
  createExplorer();
  return "Открываю менеджер справки";
});

export function createExplorer(title, query) {
  return createApp(title, query);
}

const byQuery = (state, query) => {
  return state.windows.list.find(
    (v) => v.type === WINDOW_APP_MANAGER && v.query === query
  );
};

export function createApp(title, query) {
  return store.dispatch(
    addWindow({
      title: title || "menu1",
      icon: WINDOW_ICON,
      type: WINDOW_APP_MANAGER,
      query: query || WINDOW_DEFAULT_QUERY,
      width: "50em",
      height: "20em",
    })
  );
}

export const setWindowQuery = (title, query, winid = undefined) => {
  if (winid) {
    store.dispatch(setCurrentWindowById(winid));
    return store.dispatch(
      updateWindow({
        id: winid,
        title,
        query,
        collapsed: false,
      })
    );
  }

  const quered = byQuery(store.getState(), query);
  if (quered) {
    store.dispatch(setCurrentWindowById(quered.id));
    return store.dispatch(
      updateWindow({
        id: quered.id,
        collapsed: false,
      })
    );
  }

  const current = byId(store.getState(), store.getState().windows.current?.id);
  if (current && current.type == WINDOW_APP_MANAGER) {
    store.dispatch(setCurrentWindowById(current.id));
    return store.dispatch(
      updateWindow({
        id: current.id,
        title,
        query,
        collapsed: false,
      })
    );
  }

  const win = byType(store.getState(), WINDOW_APP_MANAGER);
  if (win) {
    store.dispatch(setCurrentWindowById(win.id));
    return store.dispatch(
      updateWindow({
        id: win.id,
        title,
        query,
        collapsed: false,
      })
    );
  }
  return createApp(title, query);
};

export const contentMenu = [
  {
    id: 1,
    title: "menu1",
    query: "main-page",
  },
  {
    id: 2,
    title: "menu2",
    query: "contacts",
  },
  {
    id: 3,
    title: "menu9",
    query: "applist",
  },
  {
    id: 4,
    title: "menu3",
    query: "projects",
  },
  {
    id: 4,
    title: "menu3alt",
    query: "archive",
    hide: true,
  },
  {
    id: 5,
    title: "menu5",
    query: "articles",
  },
  {
    id: 8,
    title: "menu8",
    query: "about",
  },
];

export const managerMenu = [
  ...contentMenu,
  // {
  //   id: 4,
  //   title: "Архив",
  //   query: "archive",
  // },
  // {
  //   id: 4,
  //   title: "Приложения",
  //   onClick: createApp,
  // },
  // {
  //   id: 6,
  //   title: "Сайт в окно",
  //   query: "external-app",
  // },
  // {
  //   id: 7,
  //   title: "Чат",
  //   href: "https://lucors.ru/iochat",
  //   icon: "https://lucors.ru/iochat/assets/img/favicon.png",
  // },
].sort((a, b) => a.id - b.id);

// TODO: Сейчас это прогружает сведения о всех существующих приложениях
// Без этого ломается загрузка приложений, если не был запущен manager 
export function AppsList() {
  return (
    <div className="section mwem20 desktop-icons">
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