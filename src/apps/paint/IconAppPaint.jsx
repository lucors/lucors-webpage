import { createApp, WINDOW_TITLE } from "./shared";

export default function IconAppPaint() {
  return (
    <div
      id="icon-paint"
      className="desktop-icon"
      title={WINDOW_TITLE}
      onClick={() => createApp()}
    >
      <img src="img/icon-paint.png" />
      <div className="label">{WINDOW_TITLE}</div>
    </div>
  );
}
