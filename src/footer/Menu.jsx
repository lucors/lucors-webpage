import $ from "jquery";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useRef } from "react";
import store from "#store/store";
import "./Menu.css";
import FullscreenButton from "./FullscreenButton";
import ExplorerButton from "./ExplorerButton";
import { contentMenu } from "#apps/manager/WindowExplorer.jsx";
import { setMenu } from "#store/menuSlice.js";
import QueryButton from "#apps/manager/QueryButton.jsx";
import FrameButton from "#apps/frame/FrameButton.jsx";

export default function Menu() {
  const dispatch = useDispatch();
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
      menuBoxRef.current.ontransitionend = undefined;
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
    dispatch(setMenu(false));
  };

  return (
    <div id="menuBox" ref={menuBoxRef}>
      <div className="menuLeft">
        <div id="logoPlace" data-query="main-page" title="На главную страницу">
          <img className="logoType" src="img/lucors-logo.svg" />
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
              <QueryButton
                key={v.id}
                title={v.title}
                query={v.query}
                onClick={hideMenu}
              >
                {v.title}
              </QueryButton>
            );
          }
          return (
            <FrameButton
              key={v.id}
              title={v.title}
              href={v.href}
              icon={v.icon}
              onClick={hideMenu}
            >
              {v.title}
            </FrameButton>
          );
        })}
      </div>
    </div>
  );
}
