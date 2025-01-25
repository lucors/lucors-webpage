import { memo } from "react";
import Window from "#main/windows/Window";
import { IconsList, WINDOW_TITLE } from "./shared";

export default memo(function WindowAppsList({ data }) {
  return <Window data={data} title={WINDOW_TITLE} content={<IconsList />} />;
});
