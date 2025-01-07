import { createApp, WINDOW_TITLE } from "./shared";

export default function IconAppDvd() {
  return (
    <div
      id="icon-dvd"
      className="desktop-icon"
      title={WINDOW_TITLE}
      onClick={() => createApp()}
    >
      <img src="img/dvd.png" />
      <div className="label">{WINDOW_TITLE}</div>
    </div>
  );
}
