import { useSelector } from "react-redux";
import store from "#store/store";
import { setFullscreen } from "#store/screenSlice";
import "./FullscreenButton.css";

function requestFullscreen() {
  const elem = document.body;
  if (elem.requestFullScreen) {
    elem.requestFullScreen();
  } else if (elem.mozRequestFullScreen) {
    elem.mozRequestFullScreen();
  } else if (elem.webkitRequestFullScreen) {
    elem.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
  } else if (elem.msRequestFullscreen) {
    elem.msRequestFullscreen();
  }
  store.dispatch(setFullscreen(true));
}

function cancelFullscreen() {
  if (document.cancelFullScreen) {
    document.cancelFullScreen();
  } else if (document.mozCancelFullScreen) {
    document.mozCancelFullScreen();
  } else if (document.webkitCancelFullScreen) {
    document.webkitCancelFullScreen();
  } else if (document.msExitFullscreen) {
    document.msExitFullscreen();
  }
  store.dispatch(setFullscreen(false));
}

function toggleFullScreen() {
  window.checkFullscreen() ? cancelFullscreen() : requestFullscreen();
}

export default function FullscreenButton() {
  const fullscreeen = useSelector((state) => state.screen.fullscreen);

  return (
    <div id="fullscreen" title="Во весь экран" onClick={toggleFullScreen}>
      <div className={`ico ${fullscreeen ? "alt" : ""}`}></div>
    </div>
  );
}
