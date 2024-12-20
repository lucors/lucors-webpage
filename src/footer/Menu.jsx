import $ from "jquery";
import { useSelector } from "react-redux";
import { useEffect, useRef } from "react";
import store from "../store/store";
import Button from "../common/Button";
import QueryButton from "../common/QueryButton";
import ActionNewWindow from "../common/ActionNewWindow";
import "./Menu.css";
import FullscreenButton from "./FullscreenButton";
import ExplorerButton from "./ExplorerButton";
import { addWindow } from "../store/windowsSlice";

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
  {
    id: 8,
    title: "Привет мир!",
    onClick: () => {
      store.dispatch(
        addWindow({
          title: "Привет мир!",
          icon: "img/manager.svg",
          type: "",
        })
      );
    },
    subAction: (
      <ActionNewWindow
        onClick={() =>
          store.dispatch(
            addWindow({
              title: "Приветики",
              icon: "img/app.svg",
              type: "",
            })
          )
        }
      />
    ),
  },
];

export default function Menu() {
  const openned = useSelector((state) => state.menu.openned);
  const menuBoxRef = useRef(null);

  const hideToLeft = () => {
    menuBoxRef.current.style.left = `-${$(menuBoxRef.current).outerWidth(
      true
    )}px`;
  };

  useEffect(() => {
    if (!menuBoxRef?.current) return;
    menuBoxRef.current.ontransitionend = () => {
      if (store.getState().menu.openned) return;
      menuBoxRef.current.style.visibility = "hidden";
    };
    const menuResize = () => {
      if (store.getState().menu.openned) return;
      hideToLeft();
    };
    const observer = new ResizeObserver(menuResize);
    observer.observe(menuBoxRef.current);

    return () => {
      menuBoxRef.current.ontransitionend = undefined;
      observer.disconnect();
    }
  }, []);

  useEffect(() => {
    if (!menuBoxRef?.current) return;
    if (openned) {
      menuBoxRef.current.style.left = 0;
      menuBoxRef.current.style.visibility = "visible";
      return;
    }
    hideToLeft();
  }, [openned]);

  return (
    <div id="menuBox" ref={menuBoxRef}>
      <div className="menuLeft">
        <div id="logoPlace" data-query="main-page" title="На главную страницу">
          <img className="logoType" src="img/luco-logo.svg" />
        </div>
        <div className="actions">
          <FullscreenButton />
          <ExplorerButton />
        </div>
      </div>
      <div id="menuContent">
        {contentMenu.map((v) => {
          if (v.query) {
            return (
              <QueryButton key={v.id} title={v.title} query={v.query}>
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
      </div>
    </div>
  );
}
