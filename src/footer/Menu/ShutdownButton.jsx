import { setShutdown } from "#store/screenSlice.js";
import store from "#store/store.js";
import "./ShutdownButton.css";

export default function ShutdownButton() {
  function shutdown() {
    console.log("Спокойной ночи~");
    store.dispatch(setShutdown(true));
  }

  return (
    <div id="shutdownButton" title="Завершение работы" onClick={shutdown}>
      <div className="ico"></div>
    </div>
  );
}
