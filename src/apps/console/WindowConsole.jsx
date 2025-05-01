import React, { memo } from "react";
import Window from "#layout/main/windows/Window";
import Console from "./Console";
import { WINDOW_TITLE } from "./shared";

export default memo(function WindowConsole({ data }) {
  return <Window data={data} title={WINDOW_TITLE} content={<Console />} />;
});
