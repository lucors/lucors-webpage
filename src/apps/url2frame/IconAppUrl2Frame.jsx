import { createApp, WINDOW_TITLE } from "./shared";

export default function IconAppUrl2Frame() {
  return (
    <div
      id="icon-url2frame"
      className="desktop-icon"
      title={WINDOW_TITLE}
      onClick={() => createApp()}
    >
      <img src="img/url2frame.png" />
      <div className="label">{WINDOW_TITLE}</div>
    </div>
  );
}
