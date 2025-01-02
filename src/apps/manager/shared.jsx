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
    id: 4,
    title: "Статьи",
    query: "articles",
  },
  {
    id: 5,
    title: "Сайт в окно",
    query: "external-app",
  },
  {
    id: 6,
    title: "Чат",
    href: "https://lucors.ru/iochat",
    icon: "https://lucors.ru/iochat/assets/img/favicon.png",
  },
  {
    id: 7,
    title: "О сайте",
    query: "about",
  },
];
