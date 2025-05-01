import React, { memo } from "react";
import Window from "#layout/main/windows/Window";
import Dvd from "./Dvd";
import { WINDOW_TITLE } from "./shared";

export default memo(function WindowCalc({ data }) {
  return <Window data={data} title={WINDOW_TITLE} content={<Dvd />} />;
});
