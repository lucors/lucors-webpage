import React, { memo } from "react";
import Window from "#main/windows/Window";
import Console from "./Console";

export default memo(function WindowConsole({ data }) {
  return <Window data={data} content={<Console />} />;
});
