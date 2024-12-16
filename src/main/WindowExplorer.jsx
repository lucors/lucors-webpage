import Button from "../common/Button";
import QueryButton from "../common/QueryButton";
import store from "../store/store";
import { addWindow } from "../store/windowsSlice";
import Window from "./Window";

export const WINDOW_TYPE_EXPLORER = "explorer";

export function createExplorer() {
  store.dispatch(
    addWindow({
      title: "Главная страница",
      icon: "img/manager.svg",
      type: WINDOW_TYPE_EXPLORER
    })
  );
}

const contentMenu = [
  { id: 1, title: "Главная страница", query: "main-page" },
  { id: 2, title: "Контакты", query: "contacts" },
  { id: 3, title: "Проекты", query: "projects" },
  { id: 4, title: "Статьи", query: "articles" },
  { id: 5, title: "Сайт в окно", query: "external-app" },
  {
    id: 6,
    title: "Чат",
    href: "https://lucors.ru/iochat",
    icon: "https://lucors.ru/iochat/img/favicon.png",
  },
  { id: 7, title: "О сайте", query: "about" },
];

export default function WindowExplorer({ data }) {
  return (
    <Window
      data={data}
      menu={contentMenu.map((v) => {
        if (v.query) {
          return (
            <QueryButton key={v.id} query={v.query}>
              {v.title}
            </QueryButton>
          );
        }
        return (
          <Button key={v.id} {...v}>
            {v.title}
          </Button>
        );
      })}
    />
  );
}
