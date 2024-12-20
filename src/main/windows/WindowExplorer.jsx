import { useState, useEffect } from "react";
import axios from "axios";
import QueryButton from "../../common/QueryButton";
import store from "../../store/store";
import { addWindow, updateWindow } from "../../store/windowsSlice";
import Window from "./Window";
import Button from "#common/Button.jsx";

export const WINDOW_TYPE_EXPLORER = "explorer";

export function createExplorer() {
  store.dispatch(
    addWindow({
      title: "Главная страница",
      icon: "img/manager.svg",
      type: WINDOW_TYPE_EXPLORER,
      query: "main-page",
    })
  );
}

export default function WindowExplorer({ data }) {
  const currentQuery = data.query;
  const [remoteContent, setRemoteContent] = useState(null);


  const contentMenu = [
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
      icon: "https://lucors.ru/iochat/img/favicon.png",
    },
    {
      id: 7,
      title: "О сайте",
      query: "about",
    },
  ];

  useEffect(() => {
    const formData = new FormData();
    formData.append("tag", currentQuery);
    setRemoteContent(null);
    axios
      .post("https://lucors.ru/index_content.php", formData, {
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
      })
      .then((response) => {
        setRemoteContent(response?.data?.content);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [data.query]);

  return (
    <Window
      data={data}
      menu={contentMenu.map((v) => {
        if (v.query) {
          return (
            <QueryButton key={v.id} title={v.title} query={v.query} winid={data.id}>
              {v.title}
            </QueryButton>
          );
        }
        return (
          <Button key={v.id} onClick={v.onClick}>
            {v.title}
          </Button>
        );
      })}
      rawContent={remoteContent}
    />
  );
}
