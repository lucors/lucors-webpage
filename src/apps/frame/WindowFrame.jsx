import { memo } from "react";
import Window from "#main/windows/Window";

export default memo(function WindowFrame({ data }) {
  return (
    <Window
      className="frame"
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
