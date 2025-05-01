import { useEffect, useRef } from "react";
import $ from "jquery";
import WindowsList from "./windows/WindowsList";
import store from "#store/store";
import { setMenu } from "#store/menuSlice";
import "./Main.css";
import DesktopCanvas from "./DesktopCanvas";
import Clock from "#common/Clock.jsx";
import { useSelector } from "react-redux";

export default function Main() {
  const mainRef = useRef(null);
  const mobile = useSelector((state) => state.screen.mobile);

  useEffect(() => {
    if (!mainRef?.current) return;
    $(mainRef.current).on("click", function () {
      if (store.getState().menu.openned) store.dispatch(setMenu(false));
    });

    return () => {
      $(mainRef.current).off("click");
    };
  }, []);

  return (
    <main ref={mainRef}>
      <DesktopCanvas />
      {/* <IconAppAppsList /> */}
      <WindowsList />
      {mobile && <Clock />}
    </main>
  );
}
