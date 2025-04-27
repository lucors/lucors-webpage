import $ from "jquery";
import { useSelector } from "react-redux";
import { useEffect, useRef } from "react";
import store from "#store/store";
import "./Menu.css";
import FullscreenButton from "./FullscreenButton";
import { setMenu } from "#store/menuSlice.js";
import QueryButton from "#apps/manager/QueryButton.jsx";
import FrameButton from "#apps/frame/FrameButton.jsx";
import Button from "#common/Button.jsx";

import ShutdownButton from "./ShutdownButton";
import {
  contentMenu as managerMenu,
  WINDOW_APP_MANAGER,
  WINDOW_ICON,
} from "#apps/manager/shared.jsx";
import {
  createApp,
  WINDOW_ICON as APPSLIST_ICON,
  WINDOW_APP_APPSLIST,
} from "#apps/appslist/shared.jsx";
import { useTranslation } from "react-i18next";

function MenuSection({ icon, title, children }) {
  return (
    <div className="menu-section">
      <div className="section-title">
        <img src={icon} />
        <span>{title}</span>
      </div>
      <div>{children}</div>
    </div>
  );
}

function MenuSectionManager({ hideMenu }) {
  const { t } = useTranslation(WINDOW_APP_MANAGER);

  return (
    <MenuSection icon={WINDOW_ICON} title={t("menuSectionTitle")}>
      {managerMenu.filter((v) => !v.hide).map((v) => {
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
    </MenuSection>
  );
}

function MenuSectionOther({ hideMenu }) {
  const { t } = useTranslation(WINDOW_APP_APPSLIST);

  const clickHandler = () => {
    createApp();
    hideMenu();
  };

  return (
    <MenuSection icon={APPSLIST_ICON} title={t("menuSectionTitle")}>
      <Button onClick={clickHandler}>{t("menuItem")}</Button>
    </MenuSection>
  );
}

export default function Menu() {
  const openned = useSelector((state) => state.menu.openned);
  const menuBoxRef = useRef(null);

  const hideToLeft = () => {
    menuBoxRef.current.style.left = `-${$(menuBoxRef.current).outerWidth(
      true
    )}px`;
    menuBoxRef.current.style.opacity = 0;
  };

  useEffect(() => {
    if (!menuBoxRef?.current) return;
    const observer = new ResizeObserver(() => {
      if (store.getState().menu.openned) hideMenu();
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
      // menuBoxRef.current.style.left = `${$("#footer-body").offset().left}px`;
      menuBoxRef.current.style.left = `${$("#startButt").position().left}px`;
      menuBoxRef.current.style.opacity = 1;
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
        {/* <div id="logoPlace" data-query="main-page" title="На главную страницу">
          <img className="logoType" src="img/lucors-logo.svg" />
        </div> */}
        <div className="actions">
          <FullscreenButton />
          <ShutdownButton />
        </div>
      </div>
      <div id="menuContent">
        <MenuSectionManager hideMenu={hideMenu} />
        <MenuSectionOther hideMenu={hideMenu} />
      </div>
    </div>
  );
}
