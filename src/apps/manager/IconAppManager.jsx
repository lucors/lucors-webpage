import { createExplorer } from "./shared";
import "./IconAppManager.css";
import { useRef } from "react";
import { withDoubleClick } from "#common/utils.js";

export default function IconAppManager() {
  const timer = useRef();

  return (
    <div
      id="icon-manager"
      className="desktop-icon"
      title="Проводник"
      onClick={withDoubleClick(timer, createExplorer)}
    ></div>
  );
}
