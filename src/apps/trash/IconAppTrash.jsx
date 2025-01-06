import { createApp, WINDOW_TITLE } from "./shared";

export default function IconAppTrash() {
  return (
    <div
      id="icon-trashcan"
      className="desktop-icon"
      title={WINDOW_TITLE}
      onClick={() => createApp()}
    >
      <img src="img/trashico.svg" />
      <div className="label">{WINDOW_TITLE}</div>
    </div>
  );
}
