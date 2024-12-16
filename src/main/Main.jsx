import { useEffect, useRef } from "react";
import $ from "jquery";
import DesktopCanvas from "./DesktopCanvas";
import WindowsList from "./WindowsList";
import store from "../store/store";
import { setMenu } from "../store/menuSlice";
import "./Main.css";

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
      <DesktopCanvas/>
      <WindowsList/>
    </main>
  )
}
