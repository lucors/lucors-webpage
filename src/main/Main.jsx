import { useEffect, useRef } from "react";
import $ from "jquery";
import WindowsList from "./windows/WindowsList";
import store from "#store/store";
import { setMenu } from "#store/menuSlice";
import "./Main.css";
import IconsList from "./IconsList";
import DesktopCanvas from "./DesktopCanvas";

export default function Main() {
  const mainRef = useRef(null);

  useEffect(() => {
    if (!mainRef?.current) return;
    $(mainRef.current).on("click", function () {
      store.dispatch(setMenu(false));
    });

    return () => {
      $(mainRef.current).off("click");
    };
  }, []);

  return (
    <main ref={mainRef}>
      <DesktopCanvas />
      <IconsList />
      <WindowsList />
    </main>
  );
}
