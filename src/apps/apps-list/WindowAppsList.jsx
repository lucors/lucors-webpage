import {memo} from "react";
import Window from "#windows/Window";
import {META} from "./shared";
import {useTranslation} from "react-i18next";
import {TITLE_KEY} from "#common/consts.js";
import {META as calcAppMeta} from "#apps/calc/shared.jsx";
import {META as consoleAppMeta} from "#apps/console/shared.jsx";
import {META as chatAppMeta} from "#apps/chat/shared.jsx";
import {META as trashAppMeta} from "#apps/trash/shared.jsx";
import {META as url2FrameAppMeta} from "#apps/url2frame/shared.jsx";

function IconApp({meta}) {
  const {t} = useTranslation(meta.type);
  return (
    <div
      className="desktop-icon"
      title={t(TITLE_KEY)}
      onClick={() => meta.createApp()}
    >
      <img src={meta.icon}/>
      <div className="label">{t(TITLE_KEY)}</div>
    </div>
  );
}

function AppsList() {
  return (
    <div className="section mwem20 desktop-icons">
      <IconApp meta={chatAppMeta}/>
      <IconApp meta={consoleAppMeta}/>
      <IconApp meta={calcAppMeta}/>
      {/*<IconApp meta={dvdAppMeta}/>*/}
      <IconApp meta={url2FrameAppMeta}/>
      <IconApp meta={trashAppMeta}/>
    </div>
  );
}

export default memo(function WindowAppsList({data}) {
  const {t} = useTranslation(META.type);
  return <Window data={data} title={t(TITLE_KEY)} icon={META.icon} content={<AppsList/>}/>;
});
