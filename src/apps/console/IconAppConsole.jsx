import { createApp, WINDOW_TITLE } from "./shared";

export default function IconAppConsole() {
  return (
    <div
      id="icon-console"
      className="desktop-icon"
      title={WINDOW_TITLE}
      onClick={() => createApp()}
    >
      <img src="img/console.svg" />
      <div className="label">{WINDOW_TITLE}</div>
    </div>
  );
}
