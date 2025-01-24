import $ from "jquery";
import { useSelector } from "react-redux";
import { useEffect, useRef } from "react";
import store from "#store/store";
import "./Menu.css";
import FullscreenButton from "./FullscreenButton";
import ExplorerButton from "./ExplorerButton";
import { setMenu } from "#store/menuSlice.js";
import QueryButton from "#apps/manager/QueryButton.jsx";
import FrameButton from "#apps/frame/FrameButton.jsx";
import ShutdownButton from "./ShutdownButton";
import { contentMenu, WINDOW_APP_MANAGER } from "#apps/manager/shared.jsx";
import { useTranslation } from "react-i18next";
import { ChangeLanguage } from "#footer/FooterRight.jsx";

export default function Menu() {
  const openned = useSelector((state) => state.menu.openned);
  const menuBoxRef = useRef(null);
  const {t} = useTranslation(WINDOW_APP_MANAGER);

  const hideToLeft = () => {
    menuBoxRef.current.style.left = `-${$(menuBoxRef.current).outerWidth(
      true
    )}px`;
  };

  useEffect(() => {
    if (!menuBoxRef?.current) return;
    menuBoxRef.current.ontransitionend = () => {
      if ((menuBoxRef.current.getAnimations() || []).length > 0) return;
      if (store.getState().menu.openned) return;
      menuBoxRef.current.style.visibility = "hidden";
    };
    const observer = new ResizeObserver(() => {
      if (store.getState().menu.openned) return;
      hideToLeft();
    });
    observer.observe(menuBoxRef.current);

    return () => {
      if (menuBoxRef?.current) menuBoxRef.current.ontransitionend = undefined;
      observer.disconnect();
    };
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

  const hideMenu = () => {
    if (store.getState().menu.openned) store.dispatch(setMenu(false));
  };

  return (
    <div id="menuBox" ref={menuBoxRef}>
      <div className="menuLeft">
        <div id="logoPlace" data-query="main-page" title="На главную страницу">
          <img className="logoType" src="img/lucors-logo.svg" />
        </div>
        <div className="actions">
          <ExplorerButton />
          <FullscreenButton />
          <ShutdownButton />
        </div>
      </div>
      <div id="menuContent">
        {contentMenu.map((v) => {
          const title = t(v.title);
          if (v.query) {
            return (
              <QueryButton
                key={v.id}
                title={title}
                query={v.query}
                onClick={hideMenu}
              >
                {title}
              </QueryButton>
            );
          }
          return (
            <FrameButton
              key={v.id}
              title={title}
              href={v.href}
              icon={v.icon}
              onClick={hideMenu}
            >
              {title}
            </FrameButton>
          );
        })}
      </div>
    </div>
  );
}
