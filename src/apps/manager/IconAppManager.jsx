import { createExplorer, WINDOW_TITLE } from "./shared";

export default function IconAppManager() {
  return (
    <div
      id="icon-manager"
      className="desktop-icon"
      title={WINDOW_TITLE}
      onClick={() => createExplorer()}
    >
      <img src="img/manager.svg"/>
      <div className="label">{WINDOW_TITLE}</div>
    </div>
  );
}
