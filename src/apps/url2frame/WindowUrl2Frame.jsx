import { memo, useRef } from "react";
import Window from "#windows/Window";
import { createFrame } from "#apps/frame/shared.js";
import "./WindowUrl2Frame.css";
import { WINDOW_TITLE } from "./shared";

function Url2Window() {
  const urlRef = useRef(null);
  const nameRef = useRef(null);

  const openFrame = () => {
    if (!urlRef?.current?.value || !nameRef?.current?.value) {
      createFrame("Video", "https://www.youtube.com/embed/dQw4w9WgXcQ?si=dqVBEDa8uc_ckevr");
      return;
    }
    createFrame(nameRef.current.value, urlRef.current.value);
    urlRef.current.value = "";
    nameRef.current.value = "";
  };

  const setDefaultUrl = () => {
    nameRef.current.value = "YouTube";
    urlRef.current.value = "https://www.youtube.com/";
  }

  return (
    <div className="section mwem20 url2frame">
      <h3>Открыть веб-страницу в окне iframe</h3>
      <p>
        Введите URL сайта, желаемое наименование окна и нажмите кнопку "Открыть
        окно"
      </p>
      <p>
        Например <code className="language-none" onClick={setDefaultUrl}>Имя:YouTube</code>,{" "}
        <code className="language-none" onClick={setDefaultUrl}>URL:https://www.youtube.com/</code>
      </p>
      <input
        ref={nameRef}
        className="app-name formInput"
        required
        placeholder="Наименование окна"
        size="30"
      />
      <input
        ref={urlRef}
        className="app-url formInput"
        required
        placeholder="URL страницы"
        size="30"
      />
      <br />
      <input
        className="formButton"
        type="submit"
        value="Открыть окно"
        title="Открыть окно"
        onClick={openFrame}
      />
    </div>
  );
}

export default memo(function WindowUrl2Frame({ data }) {
  return <Window data={data} title={WINDOW_TITLE} content={<Url2Window />} />;
});
