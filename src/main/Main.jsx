import { useEffect, useRef } from "react";
import $ from "jquery";
import DesktopCanvas from "./DesktopCanvas";
import WindowsList from "./windows/WindowsList";
import store from "../store/store";
import { setMenu } from "../store/menuSlice";
import "./Main.css";
import TrashcanIcon from "./icons/TrashcanIcon";

export default function Main() {
  const mainRef = useRef(null);

  useEffect(() => {
    if (!mainRef?.current) return;
    $(mainRef.current).on("click", function(){
      store.dispatch(setMenu(false));
    });
    
    return () => {
      $(mainRef.current).off("click");
    }
  }, []);

  return (
    <main ref={mainRef}>
      <TrashcanIcon/>
      <DesktopCanvas/>
      <WindowsList/>
    </main>
  )
}
