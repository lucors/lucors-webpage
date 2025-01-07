import { memo } from "react";
import Window from "#main/windows/Window";
import IconAppManager from "#apps/manager/IconAppManager.jsx";
import IconAppUrl2Frame from "#apps/url2frame/IconAppUrl2Frame.jsx";
import IconAppChat from "#apps/chat/IconAppChat.jsx";
import IconAppCalc from "#apps/calc/IconAppCalc.jsx";
import IconAppPaint from "#apps/paint/IconAppPaint.jsx";
import IconAppDvd from "#apps/dvd/IconAppDvd.jsx";
import IconAppTrash from "#apps/trash/IconAppTrash.jsx";

function IconsList() {
  return (
    <div className="section mwem20 desktop-icons">
      <IconAppManager />
      <IconAppUrl2Frame />
      <IconAppChat />
      <IconAppCalc />
      <IconAppPaint />
      <IconAppDvd />
      <IconAppTrash />
    </div>
  );
}

export default memo(function WindowAppsList({ data }) {
  return <Window data={data} content={<IconsList />} />;
});
