import { useRef } from "react";
import "./LazyContacts.css";
import { createFrame } from "#apps/frame/WindowFrame.jsx";

export default function LazyHref2Window() {
  const urlRef = useRef(null);
  const nameRef = useRef(null);

  const openFrame = () => {
    if (!urlRef?.current?.value || !nameRef?.current?.value) return;
    createFrame(nameRef.current.value, urlRef.current.value);
    urlRef.current.value = "";
    nameRef.current.value = "";
  };

  return (
    <div className="section mwem20">
      <h3>Открыть веб-страницу в окне iframe</h3>
      <p>
        Введите URL сайта, желаемое наименование окна и нажмите кнопку "Открыть
        окно"
      </p>
      <p>
        Например <code className="language-none">URL:https://www.youtube.com/</code>,{" "}
        <code className="language-none">Имя:YouTube</code>
      </p>
      <input
        ref={urlRef}
        className="app-url formInput"
        required
        placeholder="URL страницы"
        size="30"
      />
      <input
        ref={nameRef}
        className="app-name formInput"
        required
        placeholder="Наименование окна"
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
