import {memo} from "react";
import {useTranslation} from "react-i18next";
import {CHAT_URL, META} from "./shared.jsx";
import {TITLE_KEY} from "#common/consts.js";
import WindowFrame from "#apps/frame/WindowFrame.jsx";

export default memo(function WindowChat({ data }) {
  const {t} = useTranslation(META.type);
  return <WindowFrame data={{
    ...data,
    title: t(TITLE_KEY),
    titleHref: CHAT_URL,
    href: CHAT_URL,
    icon: META.icon,
  }} />;
});
