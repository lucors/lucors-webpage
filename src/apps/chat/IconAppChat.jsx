import { createApp } from "./shared";

export default function IconAppChat() {
  return (
    <div
      id="icon-chat"
      className="desktop-icon"
      title="Чат"
      onClick={() => createApp()}
    >
      <img src="https://lucors.ru/iochat/assets/img/favicon.png" />
      <div className="label">Чат</div>
    </div>
  );
}
