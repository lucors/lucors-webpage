import { memo } from "react";
import Window from "#main/windows/Window";

export default memo(function WindowFrame({ data }) {
  const isLucors =
    data.href === "https://lucors.ru/" || data.href === "https://lucors.ru";

  return (
    <Window
      className="frame"
      data={{
        ...data,
        title: isLucors ? "Рекурсия" : data.title,
      }}
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
