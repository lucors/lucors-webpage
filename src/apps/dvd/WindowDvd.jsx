import React, { memo } from "react";
import Window from "#main/windows/Window";
import Dvd from "./Dvd";

export default memo(function WindowCalc({ data }) {
  return <Window data={data} content={<Dvd />} />;
});
