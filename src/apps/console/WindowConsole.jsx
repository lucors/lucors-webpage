import React, {memo} from "react";
import Window from "#windows/Window";
import Console from "./Console";
import {useTranslation} from "react-i18next";
import {TITLE_KEY} from "#common/consts.js";
import {META} from "./shared.jsx";

export default memo(function WindowConsole({ data }) {
  const {t} = useTranslation(META.type);
  return <Window data={data} title={t(TITLE_KEY)} icon={META.icon}  content={<Console />} />;
});
