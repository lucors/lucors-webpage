import { memo } from "react";
import Window from "#main/windows/Window";
import "./WindowFrame.css";

export default memo(function WindowFrame({ data }) {
  const isLucors =
    data.href === "https://lucors.ru/" || data.href === "https://lucors.ru";

  return (
    <Window
      className="frame"
      title={isLucors ? "Рекурсия" : data.title}
      titleHref={data.href}
      data={data}
      content={
        <>
          <div className="frame-block"></div>
          <iframe
            src={data?.href}
            allow="autoplay; camera; microphone; display-capture; fullscreen;"
            allowFullScreen={true}
          ></iframe>
        </>
      }
    />
  );
});
