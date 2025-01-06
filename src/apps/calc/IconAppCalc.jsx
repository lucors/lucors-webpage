import { createApp, WINDOW_TITLE } from "./shared";

export default function IconAppCalc() {
  return (
    <div
      id="icon-calc"
      className="desktop-icon"
      title={WINDOW_TITLE}
      onClick={() => createApp()}
    >
      <img src="img/calc.png" />
      <div className="label">{WINDOW_TITLE}</div>
    </div>
  );
}
