import { lazy, memo } from "react";
import QueryButton from "./QueryButton";
import store from "#store/store";
import { addWindow } from "#store/windowsSlice";
import Window from "#main/windows/Window";
import FrameButton from "#apps/frame/FrameButton.jsx";

const LazyWelcome = lazy(() => import("./LazyWelcome"));
const LazyContacts = lazy(() => import("./LazyContacts"));
const LazyProjects = lazy(() => import("./LazyProjects"));
const LazyHref2Window = lazy(() => import("./LazyHref2Window"));
const LazyAbout = lazy(() => import("./LazyAbout"));
const LazyArticles = lazy(() => import("./articles/LazyArticles"));
const LazyCommonIndex = lazy(() => import("./articles/common/LazyCommonIndex"));
const LazyArticleMapReduce = lazy(() => import("./articles/common/LazyArticleMapReduce"));

export const WINDOW_APP_EXPLORER = "explorer";

export function createExplorer() {
  store.dispatch(
    addWindow({
      title: "Главная страница",
      icon: "img/manager.svg",
      type: WINDOW_APP_EXPLORER,
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

const contentType = {
  "main-page": <LazyWelcome />,
  contacts: <LazyContacts />,
  projects: <LazyProjects />,
  "external-app": <LazyHref2Window />,
  about: <LazyAbout />,

  articles: <LazyArticles />,
  "article-category-common": <LazyCommonIndex/>,
  "article-map-reduce": <LazyArticleMapReduce/>,
};

export default memo(function WindowExplorer({ data }) {
  return (
    <Window
      data={data}
      menu={contentMenu.map((v) => {
        if (v.query) {
          return (
            <QueryButton
              key={v.id}
              title={v.title}
              query={v.query}
              winid={data.id}
            >
              {v.title}
            </QueryButton>
          );
        }
        return (
          <FrameButton key={v.id} title={v.title} href={v.href} icon={v.icon}>
            {v.title}
          </FrameButton>
        );
      })}
      content={contentType[data.query]}
    />
  );
});
