import "./ShutdownButton.css";
import $ from "jquery";

export default function ShutdownButton() {
  function shutdown() {
    console.log("Спокойной ночи~");
    $("#fade").addClass("active");
    setTimeout(() => {
      $("body").addClass("fade");
    }, 2000);
  }

  return (
    <div id="shutdownButton" title="Завершение работы" onClick={shutdown}>
      <div className="ico"></div>
    </div>
  );
}
