import React, {memo} from "react";
import Window from "#windows/Window";
import Dvd from "./Dvd";
import {useTranslation} from "react-i18next";
import {META} from "./shared.jsx";
import {TITLE_KEY} from "#common/consts.js";

export default memo(function WindowCalc({ data }) {
  const {t} = useTranslation(META.type);
  return <Window data={data} title={t(TITLE_KEY)} icon={META.icon} content={<Dvd />} />;
});
