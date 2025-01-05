import store from "#store/store";
import { addWindow } from "#store/windowsSlice";
import {
  byId,
  byType,
  setCurrentWindowById,
  updateWindow,
} from "#store/windowsSlice.js";

export const WINDOW_TITLE = "Главная страница";
export const WINDOW_ICON = "img/manager.svg";
export const WINDOW_APP_MANAGER = "explorer";
export const WINDOW_DEFAULT_QUERY = "main-page";

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
      title: title || WINDOW_TITLE,
      icon: WINDOW_ICON,
      type: WINDOW_APP_MANAGER,
      query: query || WINDOW_DEFAULT_QUERY,
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
    title: "Главная страница",
    query: "main-page",
  },
  {
    id: 2,
    title: "Контакты",
    query: "contacts",
  },
  {
    id: 3,
    title: "Проекты",
    query: "projects",
  },
  {
    id: 5,
    title: "Статьи",
    query: "articles",
  },
  {
    id: 8,
    title: "О сайте",
    query: "about",
  },
];

export const managerMenu = [
  ...contentMenu,
  {
    id: 6,
    title: "Архив",
    query: "archive",
  },
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
