import { createApp } from "#apps/appslist/shared.jsx";
import store from "#store/store";
import { addWindow } from "#store/windowsSlice";

export const WINDOW_APP_MANAGER = "explorer";

export function createExplorer() {
  store.dispatch(
    addWindow({
      title: "Главная страница",
      icon: "img/manager.svg",
      type: WINDOW_APP_MANAGER,
      query: "main-page",
    })
  );
}

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
  {
    id: 4,
    title: "Приложения",
    onClick: createApp
  },
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
