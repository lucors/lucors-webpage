import { cmds } from "#apps/console/shared.jsx";
import { createFrame } from "#apps/frame/shared.js";

cmds.set("chat", () => {
  createApp();
  return "Открываю чат";
});

export function createApp() {
  createFrame("Чат", "https://lucors.ru/iochat", "https://lucors.ru/iochat/assets/img/favicon.png");
}
